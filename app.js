const subscriptionKey = 'cb926c4bca8b428fa9f0b817c594834a'; // Remplacez par votre clé d'abonnement Azure
const endpoint = 'https://newprojetok.cognitiveservices.azure.com/vision/v3.2/detect'; // Remplacez par votre URL d'endpoint Azure
let output; // Variable pour stocker la réponse de l'API

document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = imageUrl;
        imagePreview.style.display = 'block';  // Affiche l'image
        analyzeImage(file);  // Appelle la fonction pour analyser l'image
    }
});

// Fonction pour analyser l'image en envoyant le fichier directement
function analyzeImage(file) {
    const reader = new FileReader();
    reader.onloadend = function() {
        const arrayBuffer = reader.result;

        // Envoie les données binaires à l'API Azure
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'Content-Type': 'application/octet-stream'
            },
            body: arrayBuffer
        })
        .then(response => response.json())
        .then(data => {
            console.log("Azure Response Data:", data);
            output = data; // Stocke la réponse pour l'utiliser dans display_output
            display_output(); // Affiche les résultats
        })
        .catch(error => {
            console.error('Error in analyzing the image:', error);
            display_error(error.message);
        });
    };
    reader.readAsArrayBuffer(file); // Lire le fichier en tant qu'ArrayBuffer
}

// Fonction pour afficher les résultats
function display_output() {
    const outputDisplay = document.getElementById('output');
    const checkDisplay = document.getElementById('checkDisplay');
    
    outputDisplay.textContent = '';  // Réinitialise le contenu de l'affichage

    if (output) {
        if (output.objects && output.objects.length > 0) {
            output.objects.forEach((obj, index) => {
                const objectText = `Object ${index + 1}: ${obj.object} (Confidence: ${(obj.confidence * 100).toFixed(2)}%)\n`;
                outputDisplay.textContent += objectText;
            });
        } else {
            outputDisplay.textContent = "No object detected.";
        }
    }

    // Si l'option d'affichage JSON est cochée
    if (checkDisplay.checked) {
        outputDisplay.textContent = JSON.stringify(output, null, 2);
    }
}

// Fonction pour afficher les erreurs
function display_error(message) {
    const outputDisplay = document.getElementById('output');
    outputDisplay.textContent = `Error: ${message}`;
}
