const subscriptionKey = 'YOUR_AZURE_SUBSCRIPTION_KEY';
const endpoint = 'YOUR_AZURE_ENDPOINT_URL';
const analyzeUrl = endpoint;

document.getElementById('uploadBtn').onclick = function() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select an image file.');
        return;
    }

    const reader = new FileReader();
    reader.onloadend = function() {
        const imgBase64 = reader.result.split(',')[1];
        analyzeImage(imgBase64);
    };
    reader.readAsDataURL(file);
};

function analyzeImage(imageBase64) {
    fetch(analyzeUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': subscriptionKey,
        },
        body: JSON.stringify({ data: imageBase64 })
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
