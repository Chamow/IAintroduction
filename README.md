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
- [Contact](#contact)

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

1. Go to the [Azure Portal](https://portal.azure.com/).
2. If you don't have an account, sign up for a free account.

### Step 2: Create a Computer Vision Resource

1. In the Azure Portal, select **Create a resource**.
2. Search for **Computer Vision** and select it.
3. Click **Create**.
4. Fill in the required fields:
   - **Subscription**: Choose your subscription.
   - **Resource group**: Create a new resource group or use an existing one.
   - **Region**: Select the region where you want your resource to be created.
   - **Name**: Enter a unique name for your Computer Vision resource.
5. Click **Review + create** and then click **Create**.

### Step 3: Obtain Subscription Key and Endpoint

1. After the resource is created, go to the resource page.
2. In the left sidebar, select **Keys and Endpoint**.
3. Note down the **Key1** and **Endpoint URL**. You will need these for your application.

### Step 4: Train the Object Recognition Model

1. In the Azure Portal, navigate to **Cognitive Services** and select **Custom Vision**.
2. Click **Create a new project**.
3. Fill in the project details:
   - **Project Name**: Enter a name for your project.
   - **Description**: Provide a description (optional).
   - **Resource**: Select your Computer Vision resource.
   - **Domain**: Choose a domain based on your application (e.g., General, Retail).
4. Click **Create**.

### Step 5: Upload Images and Train the Model

1. In your Custom Vision project, go to the **Training Images** tab.
2. Click **Add Images** to upload images of the objects you want to recognize.
3. After uploading, label your images (tag them) appropriately.
4. Once you have uploaded and tagged your images, click on **Train** to train your model.
5. After training, the model will be available for prediction.

### Step 6: Get Prediction URL

1. After training, click on the **Performance** tab in your Custom Vision project.
2. Click **Publish** to deploy your model.
3. Note the **Prediction URL** and the associated **Key** from the **Settings** tab, which will be used in your application.

## Usage

1. **Enter Azure Credentials**

   In the "Azure Credentials" section, input your Azure subscription key and endpoint URL. You can find these details in the Azure Portal after creating your Computer Vision resource.

2. **Upload an Image**

   Click the "Upload an Image" button to select an image file from your device (supported formats: JPEG, PNG).

3. **Analyze the Image**

   After uploading, click the "Upload and Identify" button to analyze the image. The results will be displayed below in a formatted JSON structure.

## Project Structure

Here’s a brief overview of the project structure:

IAINTRODUCTION/ 
        │
        ├── index.html # Main HTML file     
        ├── app.js # JavaScript file for handling logic 
        └── styles.css # CSS file for styling the application


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

## Instructions for Use

1. **Create the `README.md` file**: Open your code editor or IDE, create a new file, and name it `README.md`.
2. **Copy and Paste**: Copy the above content and paste it into your newly created `README.md` file.
3. **Replace Placeholders**: 
   - Change `YOUR_USERNAME` to your actual GitHub username.
   - Update your contact information (name and email) in the "Contact" section.
4. **Save the File**: Save the changes to ensure the README is updated.

This `README.md` provides comprehensive information for users and contributors, including features, usage details, project structure, and contact information.
