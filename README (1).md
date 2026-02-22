# React Learning Projects
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/rishav-026/React-Learning-projects/tree/main)

This repository is a curated collection of five React projects, documenting a progressive learning journey from fundamental concepts to advanced applications.

## 🛠️ Tech Stack

- React (Hooks, Context API)
- Vite
- React Router
- Recharts (for data visualization)
- CoinGecko API
- CSS3 & Modern Styling

## 📂 Projects

Each project is self-contained within its respective directory (`proj0` to `proj4`) and focuses on specific React concepts.

### 🧩 proj0: React Fundamentals
- **Concept Focus:** Foundational React hooks (`useState`, `useEffect`), component lifecycle, props, and handling asynchronous operations.
- **Features:**
    - **Clock:** A simple component demonstrating the `useEffect` hook for intervals.
    - **Todo App:** A CRUD application for managing tasks, featuring state management and persistence using `localStorage`.
    - **Users List:** Fetches and displays a list of users from the JSONPlaceholder API, demonstrating data fetching and rendering lists.
    - **Random Photos:** Fetches and displays random images from the Picsum Photos API, illustrating handling of loading and error states.

### 🌐 proj1: Portfolio Website
- **Concept Focus:** Component-based architecture, UI layout, and single-page application routing managed by component state.
- **Features:**
    - A multi-section portfolio layout including Home, About, Skills, Gallery, and Contact pages.
    - Demonstrates how to structure a complete front-end application with distinct, reusable components.

### 🎮 proj2: Memory Card Game
- **Concept Focus:** Complex state management, game logic implementation, and custom hooks.
- **Features:**
    - A classic card-matching memory game.
    - Game logic is encapsulated in a custom hook (`useGameLogic.jsx`), managing the state of cards, score, and moves.
    - Features include card shuffling, win detection, and a reset function.

### 🎵 proj3: Music Player
- **Concept Focus:** Global state management with the Context API, `react-router-dom` for navigation, and `localStorage` for data persistence.
- **Features:**
    - **Music Controls:** Play, pause, next, previous, and volume controls for audio playback.
    - **State Management:** The `MusicContext` provides global state for the current track, playlists, and playback status.
    - **Dynamic Playlists:** Users can create and manage their own playlists, with data saved to `localStorage`.
    - **Routing:** Utilizes React Router to switch between the "All Songs" view and the "Playlists" view.

### 🪙 proj4: Crypto Tracker
- **Concept Focus:** Real-world API integration, dynamic routing, and data visualization.
- **Features:**
    - **API Integration:** Fetches real-time market data from the CoinGecko API.
    - **Dynamic Pages:** Uses React Router to create detailed view pages for each cryptocurrency (e.g., `/coin/:id`).
    - **Data Visualization:** Displays a 7-day price history for each coin using the `Recharts` library.
    - **Data Handling:** Includes utility functions for formatting prices and large numbers like market cap.

## 🚀 Getting Started

Each project is an independent Vite application and can be run separately.

1.  Clone the repository:
    ```sh
    git clone https://github.com/rishav-026/React-Learning-projects.git
    cd React-Learning-projects
    ```

2.  Navigate to a project directory:
    ```sh
    cd proj0  # Or proj1, proj2, etc.
    ```

3.  Install dependencies:
    ```sh
    npm install
    ```

4.  Run the development server:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.