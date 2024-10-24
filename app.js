
        const subscriptionKey = 'cb926c4bca8b428fa9f0b817c594834a'; // Remplacez par votre clé d'abonnement Azure
        const endpoint = 'https://newprojetok.cognitiveservices.azure.com/'; // Remplacez par votre URL d'endpoint Azure
        const analyzeUrl = `${endpoint}/vision/v3.2/detect`;
        let output; // Variable pour stocker la réponse de l'API

        document.getElementById('imageInput').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                // Crée un URL local pour l'image
                const imageUrl = URL.createObjectURL(file);

                // Sélectionne l'élément image et met à jour le 'src'
                const imagePreview = document.getElementById('imagePreview');
                imagePreview.src = imageUrl;
                imagePreview.style.display = 'block';  // Affiche l'image

                // Appelle la fonction pour analyser l'image avec le fichier binaire
                analyzeImage(file);
            }
        });

        // Fonction pour analyser l'image en envoyant le fichier directement
        function analyzeImage(file) {
            // Utilise FileReader pour lire le fichier en tant qu'ArrayBuffer (données binaires)
            const reader = new FileReader();
            reader.onloadend = function() {
                const arrayBuffer = reader.result; // Le fichier binaire

                // Envoie les données binaires à l'API Azure
                fetch(analyzeUrl, {
                    method: 'POST',
                    headers: {
                        'Ocp-Apim-Subscription-Key': subscriptionKey,
                        'Content-Type': 'application/octet-stream' // Binaire
                    },
                    body: arrayBuffer // Envoie les données binaires
                })
                .then(response => response.json())
                .then(data => {
                    // Affiche les résultats si la conversion JSON est réussie
                    console.log("Azure Response Data:", data);
                    output = data; // Stocke la réponse pour l'utiliser dans display_output
                    display_output(); // Appelle la fonction display_output
                })
                .catch(error => {
                    // Gestion de toutes les erreurs (réseau, JSON invalide, etc.)
                    console.error('Error in analyzing the image:', error);
                    const resultDiv = document.getElementById('result');
                    resultDiv.innerText = `Error: ${error.message}`;
                });
            };

            // Lire le fichier en tant qu'ArrayBuffer (données binaires)
            reader.readAsArrayBuffer(file);
        }

        // Fonction pour afficher les résultats
        function display_output() {
            const outputDisplay = document.getElementById('output');
            const checkDisplay = document.getElementById('checkDisplay');

            // Efface le contenu existant dans la div output
            outputDisplay.textContent = '';

            // Vérifie si le résultat est disponible
            if (output) {
                if (output.objects) {
                    if (output.objects.length > 0) {
                        // Affiche les objets détectés
                        output.objects.forEach((obj, index) => {
                            const objectText = `Object ${index + 1}: ${obj.object} (Confidence: ${(obj.confidence * 100).toFixed(2)}%)\n`;
                            outputDisplay.textContent += objectText + '\n'; // Ajoute une nouvelle ligne
                        });
                    } else {
                        outputDisplay.textContent = "No object detected.";
                    }
                } else if (output.error) {
                    display_error(output.error.message);
                }
            }

            // Affiche les détails en JSON si la case est cochée
            if (checkDisplay.checked) {
                outputDisplay.textContent = JSON.stringify(output, null, 2);
            }
        }

        // Fonction pour afficher les erreurs
        function display_error(message) {
            const outputDisplay = document.getElementById('output');
            outputDisplay.textContent = `Error: ${message}`;
        }
    </script>

</body>
</html>


