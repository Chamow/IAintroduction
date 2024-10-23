const subscriptionKey = 'faaa3191cf324ba5baa6216bd6e09e01'; // Remplacez par votre clé d'abonnement Azure
const endpoint = 'https://testprojetia.cognitiveservices.azure.com/'; // Remplacez par votre URL d'endpoint Azure
const analyzeUrl = `${endpoint}/vision/v3.2/detect`;

document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // Crée un URL local pour l'image
        const imageUrl = URL.createObjectURL(file);

        // Sélectionne l'élément image et met à jour le 'src'
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = imageUrl;
        imagePreview.style.display = 'block';  // Affiche l'image

        // Utilise FileReader pour lire le fichier
        const reader = new FileReader();
        reader.onloadend = function() {
            const imgBase64 = reader.result.split(',')[1]; // Base64 string
            // Pour les tests, vous pouvez directement analyser l'image en base64
            analyzeImage(imgBase64);
        };
        reader.readAsDataURL(file);
    }
});

// Pour analyser l'image avec le format base64
function analyzeImage(base64Image) {
    fetch(analyzeUrl, {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Content-Type': 'application/octet-stream'
        },
        body: JSON.stringify({ data: base64Image }) // Envoie l'image en base64 à l'API Azure
    })
    .then(response => response.json()) 
            .then(data => {
        // Affiche les résultats si la conversion JSON est réussie
            console.log("Azure Response Data:", data);
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = JSON.stringify(data, null, 2);
            display_output(data);
    })
                
    .catch(error => {
        // Gestion de toutes les erreurs (réseau, JSON invalide, etc.)
        console.error('Error in analyzing the image:', error);
        const resultDiv = document.getElementById('result');
        resultDiv.innerText = `Error: ${error.message}`;
    });
}
