const subscriptionKey = 'YOUR_AZURE_SUBSCRIPTION_KEY'; // Remplacez par votre clé d'abonnement Azure
const endpoint = 'YOUR_AZURE_ENDPOINT_URL'; // Remplacez par votre URL d'endpoint Azure
const analyzeUrl = `${endpoint}/vision/v3.2/analyze?visualFeatures=Categories,Description,Color`;

document.getElementById('uploadBtn').onclick = function() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select an image file.');
        return;
    }

    const reader = new FileReader();
    reader.onloadend = function() {
        const imgBase64 = reader.result.split(',')[1]; // Base64 string
        // Vous devez envoyer le fichier à un serveur ou utiliser une URL accessible pour l'analyse
        uploadImage(file);
    };
    reader.readAsDataURL(file);
};

function uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);

    // Assurez-vous d'avoir une API ou un endpoint où vous pouvez envoyer le fichier
    // Pour l'exemple, nous allons simplement imprimer le fichier
    console.log('File uploaded:', file);
    
    // Après avoir téléchargé l'image sur un serveur, récupérez l'URL et analysez l'image
    // Ici nous appelons une fonction fictive pour illustrer
    const imageUrl = 'https://example.com/your-uploaded-image.jpg'; // Remplacez par l'URL de l'image téléchargée
    analyzeImage(imageUrl);
}

function analyzeImage(imageUrl) {
    fetch(analyzeUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': subscriptionKey,
        },
        body: JSON.stringify({ url: imageUrl }) // Utilisez 'url' pour analyser l'image
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
