# Sanskar Agrawal Portfolio

A modern, animated, dark-themed developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

This project is designed to present work, skills, and experience in a premium recruiter-friendly format with smooth interactions and responsive UI.

## Live Highlights

- Dark glassmorphism UI with neon blue/purple gradients
- Fully responsive layout (mobile, tablet, desktop)
- Smooth section animations and micro-interactions
- Animated hero with typing effect
- Skills visualization with animated progress bars
- Filterable project cards (AI / Web / Data Science)
- Experience timeline + achievements marquee
- Contact form UI and social links

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 (via Vite plugin)
- Framer Motion
- React Icons
- ESLint 9

## Project Structure

```text
portfolio/
  public/
    profile.jpg
    resume.pdf
  src/
    components/
    data/
    hooks/
    App.jsx
    index.css
    main.jsx
```

## Getting Started

### 1) Clone and install

```bash
git clone https://github.com/sanskar0710/Sanskar-Agarwal-Portfolio.git
cd Sanskar-Agarwal-Portfolio
npm install
```

### 2) Run development server

```bash
npm run dev
```

Open `http://localhost:5173`.

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Customization

- Replace profile image: add your image at `public/profile.jpg`
- Add resume file: add `public/resume.pdf`
- Update projects/skills data in `src/data/portfolioData.js`
- Update social/contact links in:
  - `src/components/Hero.jsx`
  - `src/components/Contact.jsx`

## Deployment

You can deploy this project easily on:

- Vercel
- Netlify
- GitHub Pages (with additional Vite base path config)

Recommended settings for Vercel/Netlify:

- Build command: `npm run build`
- Output directory: `dist`

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build
- `npm run preview` - preview built app
- `npm run lint` - run ESLint checks

## Author

Sanskar Agrawal

- GitHub: [sanskar0710](https://github.com/sanskar0710)
- LinkedIn: [sanskaragrawal07](https://www.linkedin.com/in/sanskaragrawal07/)
- Email: [sanskaragrawl3263@gmail.com](mailto:sanskaragrawl3263@gmail.com)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
