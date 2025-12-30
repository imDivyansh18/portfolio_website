# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, Tailwind CSS (CDN), and JavaScript (GSAP).

## Features

- **Glassmorphism Design**: Modern, clean UI with glass effects.
- **Dark/Light Mode**: Fully supported theme toggling with local storage persistence.
- **Smooth Animations**: Powered by GSAP and ScrollTrigger.
- **Responsive**: Mobile-friendly layout.
- **Contact Form**: UI-ready contact form with success simulation.

## Setup & Usage

Since this project uses the Tailwind CSS CDN, no build step is required for development.

1.  **Open the Project**: Simply open `index.html` in your web browser.
2.  **Customize Content**:
    - Edit `index.html` to update text, links, and images.
    - Images are currently sourced from Unsplash. You can replace them with local images in the `assets/img` folder.
3.  **Customize Styles**:
    - Tailwind classes are used for most styling.
    - Custom CSS (animations, glass effects) is located in `assets/css/style.css`.
    - Tailwind configuration (colors, fonts) is in the script tag within `index.html`.

## Deployment

### GitHub Pages
1.  Push this repository to GitHub.
2.  Go to **Settings** > **Pages**.
3.  Select the `main` branch and `/ (root)` folder.
4.  Save. Your site will be live in minutes.

### Vercel / Netlify
1.  Connect your GitHub repository to Vercel or Netlify.
2.  Deploy using default settings (no build command needed).

## Structure

```
/
├── index.html          # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css   # Custom styles
│   ├── js/
│   │   └── main.js     # Logic and animations
│   └── img/            # Image assets
└── README.md           # Documentation
```

## License

MIT
