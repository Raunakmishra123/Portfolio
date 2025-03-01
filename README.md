# Premium Developer Portfolio & Creative Architecture

A world-class, premium, modern developer portfolio website designed for **Raunak Mishra**. This portfolio is engineered to look like a premium luxury interface seen on Awwwards, Dribbble, or Behance. It features an interactive, dark/light mode, smooth animations, dynamic certificate verification, and is fully responsive across all screen sizes.

---

## ✨ Features

- **Luxury Design Aesthetics**: Dark/Light mode theme system with smooth CSS variable transitions and glassmorphism elements.
- **Dynamic Particles**: High-performance interactive background using `particles.js` adapting dynamically to theme changes.
- **Modern Typography**: Powered by premium display fonts (*Space Grotesk*, *Inter*, and *Fira Code*).
- **Smooth Animations**: Seamless element transitions and scroll effects powered by `AOS` (Animate on Scroll).
- **Interactive 3D Cards**: Immersive tilt hover interactions using `Vanilla-Tilt.js` on project cards, testimonial sections, and credentials.
- **Dynamic Typing Banner**: Typing role transition utilizing `Typed.js`.
- **Certificate Filtering & Search**: Instant, client-side search and filtering across 50+ certificates by provider or text query.
- **Interactive Verification Modal**: Dynamic modal badge system showing verification details (Crypto sign, verified status, level, dates) reading directly from card markup.
- **Contact Form Validation**: Form field checks with real-time blur and submit validation, plus premium success animations.
- **Responsive Layout**: Designed for mobile-first compatibility, optimized from 320px screens up to 4K displays.
- **SEO & Accessibility**: Complete semantic HTML5 structure, structured JSON-LD schema, open graph/meta tags, and strict focus-visible attributes.

---

## 🛠️ Tech Stack & CDNs

This project is built from scratch utilizing standard vanilla web technologies (no bulky frameworks, jQuery, or Bootstrap):

- **HTML5**: Semantic structure.
- **CSS3**: Variable-based design tokens, Flexbox/Grid layout, custom responsive breakpoints, and keyframe animations.
- **JavaScript (ES6+)**: Custom DOM manipulation, intersection observers, and event handlers.
- **External Libraries**:
  - **AOS (v2.3.4)**: [CDN Stylesheet & Script](https://cdnjs.com/libraries/aos)
  - **Typed.js (v2.0.12)**: [CDN Script](https://cdnjs.com/libraries/typed.js)
  - **Particles.js (v2.0.0)**: [CDN Script](https://cdnjs.com/libraries/particles.js)
  - **Vanilla-Tilt.js (v1.8.1)**: [CDN Script](https://cdnjs.com/libraries/vanilla-tilt)
  - **Font Awesome (v6.5.1)**: [CDN Icon Repository](https://cdnjs.com/libraries/font-awesome)
  - **Google Fonts**: *Inter*, *Space Grotesk*, and *Fira Code*.

---

## 📂 Directory Structure

```text
portfolio/
│
├── index.html          # Core page structure with semantic layout and CDNs
├── style.css           # Global stylesheets, custom themes, design tokens
├── script.js            # Custom interactive logic, filters, modal popups
│
├── assets/
│   ├── profile.jpg     # AI-generated professional avatar
│   └── favicon.png     # Site favicon
│
└── images/             # Screen capture assets and directory hooks
    ├── certificates/   # Custom certificate files
    ├── project1.png    # Student Management System screenshot
    ├── project2.png    # E-Commerce Website screenshot
    ├── project3.png    # AI Chatbot screenshot
    ├── project4.png    # Appointment Booking screenshot
    ├── project5.png    # Expense Tracker screenshot
    └── project6.png    # Chat Application screenshot
```

---

## 🚀 Quick Start / Local Setup

Follow these simple steps to run this project locally:

1. Clone or download this project directory to your computer.
2. Ensure the file structure is maintained as shown above.
3. Open `index.html` in your browser:
   - Double click `index.html` directly to run locally in the browser.
   - **Recommended**: Run using a local development server (like VS Code's **Live Server** extension) to ensure smooth loading of all external assets and scripts.

---

## 🎨 Customization

### 1. Theme Configuration
All styling configurations (colors, fonts, borders, shadows, transitions) are defined inside the custom properties section of `style.css`:
```css
:root {
  --primary: #2563EB;
  --secondary: #7C3AED;
  --accent: #06B6D4;
  /* Dark Theme Variable Tokens */
}
[data-theme="light"] {
  /* Light Theme Variable Tokens Overrides */
}
```
Modify these variables to adjust the design system to match your branding.

### 2. Typing Headline
Modify the dynamic words displayed in the hero section by editing strings inside `script.js`:
```javascript
new Typed('#typed-text', {
  strings: ['Full Stack Developer', 'Software Engineer', 'MERN Stack Expert'],
  typeSpeed: 60,
  backSpeed: 40
});
```

---

## 🌐 Deployment Instructions

### Option 1: GitHub Pages (Free)
1. Initialize a Git repository in the folder and push to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
2. In your GitHub repository settings, navigate to **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** and set the branch to `main` (folder `/root`).
4. Click **Save**. Your site will be online at `https://yourusername.github.io/portfolio/` in a few minutes.

### Option 2: Vercel (Free & Instant)
1. Install Vercel CLI locally (`npm install -g vercel`) or sign up at [vercel.com](https://vercel.com).
2. Run the deployment command inside the project root:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to deploy. You will receive an instant live URL.

### Option 3: Netlify (Free & Drag-n-Drop)
1. Go to [netlify.com](https://www.netlify.com/) and sign in.
2. Drag and drop your portfolio root folder into the Netlify Dashboard upload box.
3. Your portfolio will be live instantly with a custom generated URL!
