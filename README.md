# KnowYourMED - A Full Stack Q.R Code Application for Smarter Medication Management

## Overview

A QR-based medicine information platform that allows users to scan medicine QR codes and instantly retrieve detailed information, including composition, dosage, side effects, and alternatives. It ensures users have accurate and accessible medication details for better healthcare awareness.
Website Link : https://know-your-medicine.vercel.app/

## Features

- Secure Authentication: Implements JWT token-based authentication with bcrypt for password hashing, ensuring secure user access.
- QR Code Scanning & Image Upload: Utilizes the JsQr library to scan QR codes directly or upload images for extracting data.
- Comprehensive Medicine Information: Integrates OpenFDA API to fetch accurate details on medicine composition, dosage, side effects, and alternatives.
- Multi-Language Support: Uses Google Translate API to provide medicine information in multiple languages for better accessibility.
- Automated Email Reminders: Employs Nodemailer to send medication reminders based on user-preferred time settings.
- Full-Stack Implementation: Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) for a seamless, scalable, and efficient web application.
- User-Friendly Dashboard: Provides an intuitive UI to manage medicine details, reminders, and user preferences.
- Secure & Scalable Backend: Leverages Node.js and Express.js for efficient API handling and MongoDB for dynamic data storage.

## Technologies Used

- React
- Node.Js
- Express
- Mongo DB
- Nodemailer
- Jwt-Auth
- JsQr library
- OpenFDA API
- Vercel

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/MaheshN1821/KnowYourMED.git
   ```
2. Navigate to the project directory:
   ```sh
   cd KnowYourMED
   ```
3. Navigate to the frontend directory by creating a new terminal:
   ```sh
   cd frontend
   ```
4. Install the dependencies:
   ```sh
   npm install --legacy-peer-deps
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```
6. Navigate to the backend directory by creating a new terminal:
   ```sh
   cd backend
   ```
7. Install the dependencies:
   ```sh
   npm install --legacy-peer-deps
   ```
8. Start the server:
   ```sh
   npm start
   ```
9. Remember to create a APP PASSWORD for your preferred email id, and these variables in your .env file : PORT,MONGO_URL,SEC_ACC,SEC_REF,EMAIL_PASS with appropriate values!
