# Object Recognition Application

This project is a web application that uses Azure Cognitive Services to identify common objects from images uploaded by users. The application allows users to input their Azure subscription key and endpoint to perform image analysis.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Creating an Azure Model for Object Recognition](#creating-an-azure-model-for-object-recognition)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- Upload an image from your device.
- Identify objects in the image using Azure Computer Vision.
- Display the results in a user-friendly format.
- Easy integration with Azure services.

## Technologies Used

- HTML
- CSS
- JavaScript
- Azure Cognitive Services (Computer Vision API)

## Getting Started

To get started with the application, follow these steps:

### Accessing the Application

The application is hosted on GitHub Pages and can be accessed directly at the following URL:

[https://ice-e.github.io/IAintroduction/](https://ice-e.github.io/IAintroduction/)

### Prerequisites

- An Azure account. You will need to create a Computer Vision resource to get your subscription key and endpoint.

## Creating an Azure Model for Object Recognition

To create a model in Azure for recognizing objects, follow these steps:

### Step 1: Create an Azure Account

1. Open lab 2 and go to the [Azure Portal](https://portal.azure.com/).

### Step 2: Create a Computer Vision Resource

1. In the Azure Portal, select **Create a resource**.
2. Search for **Azure AI services** and select it.
3. Click **Create**.
4. Fill in the required fields:
   - **Subscription**: Choose your subscription.
   - **Resource group**: Choose Group1.
   - **Region**: Select the region where you want your resource to be created.
   - **Name**: Enter a unique name for your Computer Vision resource.
   - **Pricing tier**: Standard S0.
   - By checking this box I acknowledge that I have read and understood all the terms below: Selected.
5. Click **Review + create** and then click **Create**.

### Step 3 : Connect your Azure AI service resource to Vision Studio

Next, connect the Azure AI service resource you provisioned above to Vision Studio.

1. In another browser tab, navigate to Vision Studio https://portal.vision.cognitive.azure.com?azure-portal=true.
2. Sign in with your account and making sure you are using the same directory as the one where you have created your Azure AI services resource.
3. On the Vision Studio home page, select View all resources under the Getting started with Vision heading. The View all resource link is highlighted under Getting started with Vision in Vision Studio.
4. On the Select a resource to work with page, hover your mouse cursor over the resource you created above in the list and then check the box to the left of the resource name, then select Select as default resource.
    - Note : If your resource is not listed, you may need to Refresh the page.
5. The Select a resource to work with dialog is displayed with the cog-ms-learn-vision-SUFFIX Cognitive Services resource highlighted and checked. The Select as default resource button is highlighted.
6. Close the settings page by selecting the "x" at the top right of the screen.

### Step 4 : Generate captions for an image

1. In a web browser, navigate to Vision Studio https://portal.vision.cognitive.azure.com?azure-portal=true.
2. On the Getting started with Vision landing page, select the Image analysis tab and then select the Add captions to images tile.

### Step 5 : Obtain Subscription Key and Endpoint

1. Select an image to add Captions.
2. In ***Next Step***, select ***Try out SDK***.
3. Note down the **Ressource Key** and **Vision Endpoint**. You will need these for your application.

## Usage

1. **Enter Azure Credentials**

   In the "Azure Credentials" section, input your Azure subscription key and vision endpoint. 

2. **Upload an Image**

   Click the "Upload an Image" button to select an image file from your device (supported formats: JPEG, PNG).

3. **Analyze the Image**

   After uploading, click the "Upload and Identify" button to analyze the image. The results will be displayed below in a formatted JSON structure.

## Project Structure

Here’s a brief overview of the project structure:

![image](https://github.com/user-attachments/assets/407f9f22-cb76-48fe-b4fa-63027b5f12dd)

### JavaScript Logic

The JavaScript file (`app.js`) handles the logic for uploading images, sending requests to the Azure API, and displaying results.

### Styling

The CSS file (`styles.css`) contains styles to enhance the user interface of the application.

## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.
