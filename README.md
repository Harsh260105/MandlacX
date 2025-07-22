# MandlacX Edge Processor - Landing Page

A stunning and futuristic landing page for the MandlacX Edge Processor, showcasing the future of on-site AI surveillance. This project features a dynamic and animated interface with a central 3D model, built with Next.js, React, and Tailwind CSS.

---

## About The Project

This project serves as the showcase for the **MandlacX Edge Processor**, a first-generation, multi-domain AI-powered device designed for real-time threat detection. The landing page is crafted to reflect the cutting-edge nature of the product, featuring:

- **A Central 3D Product Model**: An interactive `EdgeProcessor3D` component at the heart of the page.
- **Futuristic UI/UX**: A dark, gradient-based theme with glowing background effects and animated SVG pointer lines.
- **Informational Cards**: Clearly laid-out feature cards that highlight the product's key specifications and capabilities.
- **Smooth Animations**: Fade-in-up animations on scroll and line-drawing effects to guide the user's eye.

### Key Product Features Showcased

- **On-Device Intelligence**: No reliance on the cloud for full control, speed, and reliability.
- **Real-Time Threat Detection**: Identifies intrusions, firearms, falls, and unusual motion.
- **Low Latency & Bandwidth**: Efficient edge computing that saves network resources.
- **Privacy by Design**: All footage and data remain on-site.

---

## Built With

This project is built with a modern, performant tech stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Three.js / React Three Fiber (implied for the 3D model)

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/MandlacX.git
    ```
2.  Navigate to the project directory
    ```sh
    cd MandlacX
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```
4.  Run the development server
    ```sh
    npm run dev
    ```

Open http://localhost:3000 with your browser to see the result.

---

## Project Structure

The main logic and components are located in the `client` directory:

- `client/pages/Index.tsx`: The main entry point and layout for the landing page. It contains all the sections, text content, and the arrangement of components.
- `client/components/`: This directory likely contains reusable components.
  - `EdgeProcessor3D.tsx`: The component responsible for rendering the central 3D model.
- `client/styles/`: Global styles and Tailwind CSS configuration can be found here.

---

## UI & Animation Features

- **Animated Background**: Subtle, floating, and pulsing background gradients create a sense of depth and atmosphere.
- **Scroll-Triggered Animations**: Informational cards and sections fade into view as the user scrolls, managed by the `IntersectionObserver` API.
- **SVG Line Animations**: The pointer lines connecting the central model to the feature cards are animated using `stroke-dasharray` and `stroke-dashoffset`, giving them a "drawing" effect on load.
- **Hover Effects**: Interactive cards scale up on hover to provide user feedback.
