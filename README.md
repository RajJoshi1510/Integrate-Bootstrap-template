# Netflix Clone

## Overview

This project is a Netflix clone built using **Vite** and **React.js**. It allows users to browse a wide range of movies and TV shows, featuring user authentication through Firebase and movie data fetched from TMDB (The Movie Database). The application is deployed on **Vercel** for easy access.

### [View Deployed Page](https://netflix-clone-sandy-gamma.vercel.app/)


## Features

- **User Authentication**: Users can sign up and log in using Firebase Authentication.
  
- **Movie Browsing**: Explore a vast collection of movies and TV shows fetched from the TMDB API.

- **Responsive Design**: The application is designed to be responsive and user-friendly across various devices.

- **Toast Notifications**: Utilizes toast notifications to inform users about the status of their actions, such as successful logins or errors.

## Technologies Used

- **Vite**: A fast build tool for modern web applications.
- **React**: A JavaScript library for building user interfaces.
- **Firebase**: Used for user authentication and backend services.
- **TMDB API**: Provides movie and TV show data.
- **React Router**: Manages routing within the application.
- **React Toastify**: For displaying toast notifications.

## Project Structure

The project's folder structure is organized as follows:

```
project/
├── src/
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── Login/
│   │   │   └── Login.jsx
│   │   └── Player/
│   │       └── Player.jsx
│   ├── firebase.js
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shamshir-hussain/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the project root and add your Firebase and TMDB API keys:
   ```
   VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
   VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
   VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
   VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
   VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
   VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
   VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173/` to view the application.

## Deployment

The application is deployed on Vercel. You can view the live version at [https://netflix-clone-sandy-gamma.vercel.app/].

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or features.

## Acknowledgments

- Thanks to the Vite and React communities for their support and resources.
- Special thanks to TMDB for providing movie data and Firebase for authentication services.
"# Integrate-Bootstrap-template" 
