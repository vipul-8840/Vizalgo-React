# Sorting Visualizer with React + Vite

This project is a sorting algorithm visualizer built using React and Vite. It provides an interactive interface to visualize various sorting algorithms.

## Folder and File Descriptions

### Root Directory
- `index.html`: The main HTML file for the project.
- `vite.config.js`: Configuration file for Vite.
- `package.json`: Contains project dependencies and scripts.

### `src` Folder
- `App.jsx`: The main React component that serves as the entry point for the application.
- `index.css`: Global CSS styles for the project.
- `index.jsx`: The entry point for rendering the React application.
- `components/SortingVisualizer.jsx`: Contains the implementation of the sorting visualizer component.
- `algorithms/`: A folder containing JavaScript files for different sorting algorithms, such as:
  - `bubbleSort.js`: Implementation of the Bubble Sort algorithm.
 

## Features
- Visualize sorting algorithms step by step.
- Adjustable speed and array size.
- Support for multiple sorting algorithms.

## Installation and Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd Sorting_Vis_React/project
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

4. Open the application in your browser at `http://localhost:3000`.

## Available Scripts

- `npm run dev`: Starts the development server with hot module replacement.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend using TypeScript and enabling type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
