<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analyse d'image Azure</title>
</head>
<body>

    <h1>Analyse d'image Azure</h1>
    
    <!-- Input pour choisir une image -->
    <input type="file" id="imageInput" accept="image/*">
    
    <!-- Prévisualisation de l'image -->
    <img id="imagePreview" style="display:none; max-width:300px; margin-top:10px;" alt="Prévisualisation de l'image">
    
    <!-- Résultats de l'analyse -->
    <h2>Résultats de l'analyse :</h2>
    <div id="result"></div>

    <!-- Div pour afficher les résultats détaillés des objets détectés -->
    <div id="output"></div>

    <script>
        const subscriptionKey = 'cb926c4bca8b428fa9f0b817c594834a'; // Remplacez par votre clé d'abonnement Azure
        const endpoint = 'https://newprojetok.cognitiveservices.azure.com/'; // Remplacez par votre URL d'endpoint Azure
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
                    // Envoie le fichier image binaire pour analyse
                    analyzeImage(file);
                };
                reader.readAsDataURL(file);
            }
        });

        // Pour analyser l'image avec le format binaire
        function analyzeImage(file) {
            fetch(analyzeUrl, {
                method: 'POST',
                headers: {
                    'Ocp-Apim-Subscription-Key': subscriptionKey,
                    'Content-Type': 'application/octet-stream' // Important: Type binaire
                },
                body: file // Envoie le fichier binaire directement
            })
            .then(response => response.json()) 
            .then(data => {
                // Affiche les résultats si la conversion JSON est réussie
                console.log("Azure Response Data:", data);
                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = JSON.stringify(data, null, 2);
                display_output(data);  // Appelle la fonction display_output
            })
            .catch(error => {
                // Gestion de toutes les erreurs (réseau, JSON invalide, etc.)
                console.error('Error in analyzing the image:', error);
                const resultDiv = document.getElementById('result');
                resultDiv.innerText = `Error: ${error.message}`;
            });
        }

        // Fonction pour afficher les résultats des objets détectés
        function display_output(data) {
            const outputDiv = document.getElementById('output');
            
            // Efface le contenu existant dans la div output
            outputDiv.innerHTML = '';

            if (data.objects && data.objects.length > 0) {
                // Si des objets sont détectés, les afficher
                data.objects.forEach((obj, index) => {
                    const objectDiv = document.createElement('div');
                    objectDiv.className = 'object-detected';
                    
                    const title = document.createElement('h3');
                    title.textContent = `Object ${index + 1}: ${obj.object}`;
                    objectDiv.appendChild(title);

                    const confidence = document.createElement('p');
                    confidence.textContent = `Confidence: ${(obj.confidence * 100).toFixed(2)}%`;
                    objectDiv.appendChild(confidence);

                    const boundingBox = document.createElement('p');
                    boundingBox.textContent = `Bounding Box: Left=${obj.rectangle.x}, Top=${obj.rectangle.y}, Width=${obj.rectangle.w}, Height=${obj.rectangle.h}`;
                    objectDiv.appendChild(boundingBox);

                    // Ajoute les détails de l'objet dans la div output
                    outputDiv.appendChild(objectDiv);
                });
            } else {
                // Si aucun objet n'est détecté, afficher un message
                outputDiv.innerHTML = '<p>No objects detected in the image.</p>';
            }
        }
    </script>

</body>
</html>


