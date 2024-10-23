const subscriptionKey = 'faaa3191cf324ba5baa6216bd6e09e01'; // Remplacez par votre clé d'abonnement Azure
const endpoint = 'https://testprojetia.cognitiveservices.azure.com/'; // Remplacez par votre URL d'endpoint Azure
const analyzeUrl = `${endpoint}/vision/v3.2/analyze?visualFeatures=Categories,Description,Color`;

document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // Crée un URL local pour l'image
        const imageUrl = URL.createObjectURL(file);

        // Sélectionne l'élément image et met à jour le 'src'
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = imageUrl;
        imagePreview.style.display = 'block';  // Affiche l'image

        // Optionnel : Si tu veux également mettre à jour un champ avec l'URL
        document.getElementById('result').innerText = `Image URL: ${imageUrl}`;
    }
});


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
