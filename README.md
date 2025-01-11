# ARI3333-GenerativeAI_Project

Welcome to the repository for the **ARI3333 Generative AI Project**. This project showcases the development of a web-based platform for image generation using cutting-edge generative AI technology. The platform integrates an open-source diffusion model, FLUX-1 dev, to create high-quality and contextually accurate images from textual prompts.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)



## Overview

This project is part of the ARI3333 module and involves creating a responsive website interface for a generative AI-powered image generation tool. Users can input text prompts to generate images using the FLUX-1 dev model, an advanced diffusion-based generative AI model hosted on Hugging Face.

The platform is designed to be user-friendly and features:
- Customizable themes
- Real-time responsiveness
- Chat-based input for generating images
- Local storage of JSON logs for generated data



## Features
- **Image Generation**: Generate high-quality, context-aware images using text prompts.
- **Customizable Interface**: Change themes to suit user preferences (e.g., light, dark, and colored themes).
- **Chat-based User Interaction**: A chat-style interface allows users to interact with the model intuitively.
- **Local Storage**: Generated images and logs are stored in JSON format for review and reuse.
- **Preloader and Responsive Design**: The interface is optimized for a smooth user experience across devices.



## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **AI Model**: FLUX-1 dev (Hugging Face)
- **Web Server**: Apache (via XAMPP)
- **JSON**: For data storage and retrieval



## Installation

Follow these steps to set up the project locally:

### Set Up XAMPP:
1. Install [XAMPP](https://www.apachefriends.org/index.html).
2. Place the repository in the `htdocs` folder of your XAMPP installation.

### Install Dependencies:
1. Ensure the required PHP libraries are installed.
2. Run `composer install` in the project directory to install dependencies listed in `composer.json`.

### Start XAMPP:
1. Launch the Apache server through the XAMPP control panel.

### Run the Application:
1. Open your browser and navigate to: `http://localhost/ARI3333-GenerativeAI_Project`



## Usage
1. Open the website interface in your browser.
2. Enter a text prompt in the chat input field to generate an image.
3. View the generated image and save it if needed.
4. Access previously generated images via local storage (JSON files).