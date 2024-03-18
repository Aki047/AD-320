# React Applications with Different Frameworks

This repository contains projects developed using various React frameworks, including Next.js, Remix, Gatsby, and Expo. Each project showcases different features and functionalities of these frameworks.

## Installation and Setup

Before running any of the projects, ensure you have Node.js installed on your system.

### Next.js Application
1. Create a new Next.js project using npx create-next-app@latest your-next-app
2. Navigate to the `NextJS` directory.
3. Run the following command to install dependencies:

    ```bash
    npm install
    ```

4. To run the project, execute:

    ```bash
    npm run dev
    ```

### Remix Application
1. Initialize a new Remix project with npx create-remix your-remix-app.
2. Navigate to the `Remix` directory.
3. Run the following command to install dependencies:

    ```bash
    npm install
    ```

4. To start the development server, execute:

    ```bash
    npm run develop
    ```

### Gatsby Application

1. Navigate to the `Gatsby` directory.
2. Run the following command to install dependencies:

    ```bash
    npm install
    ```

3. To start the development server, execute:

    ```bash
    npm start
    ```

### Expo Application
1. Create a new Expo project using npx create-expo-app your-expo-app
2. Navigate to the `Expo` directory.
3. Run the following command to install dependencies:

    ```bash
    npm install
    ```

4. To start the Expo development server, execute:

    ```bash
    npm start
    ```

## Default Loaders

### Next.js Application

- **Home Page**: The default loader for the home page (`pages/index.js`) fetches data and pre-renders the landing page using Static Site Generation (SSG).
- **Dynamic Route**: A dynamic route (`pages/users/[id].js`) fetches user profiles from a public API.

### Remix Application

- **Home Page**: The default loader for the home page (`pages/index.tsx`) fetches data and displays a list of blog posts.
- **Individual Blog Post Page**: The loader function for individual blog post pages (`pages/posts/[postId].tsx`) fetches data for the specific blog post based on the post ID.

### Gatsby Application

- **Portfolio Site**: The default loader fetches project data from the GraphQL data layer and renders the portfolio site showcasing projects or artworks.
- **Styling**: The site is styled using Gatsby's CSS-in-JS support or a CSS framework of choice.

### Expo Application

- **Tab Navigator**: The default Expo project features a tab navigator with at least two tabs: Home and About.
- **Home Tab**: Displays a list of items fetched from an external API.
