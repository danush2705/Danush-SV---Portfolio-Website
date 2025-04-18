# Danush SV - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Contact form with backend storage
- Project showcase with detailed descriptions
- Skills section with visual representation
- Education and experience timeline

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js (for contact form backend)
- Express.js
- File System (for storing contact form submissions)

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Select the main branch as source
5. Your site will be available at `https://<username>.github.io/<repository-name>`

### Option 2: Netlify (Free)
1. Create a Netlify account
2. Connect your GitHub repository
3. Configure build settings:
   - Build command: `npm install`
   - Publish directory: `.` (root)
4. Deploy your site

### Option 3: Vercel (Free)
1. Create a Vercel account
2. Import your GitHub repository
3. Configure project settings
4. Deploy your site

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open `http://localhost:3000` in your browser

## Contact Form Backend

The contact form stores submissions in a JSON file (`data/submissions.json`). To view submissions:
1. Access the `/submissions` endpoint
2. Or check the `data/submissions.json` file

## Files Structure

```
portfolio/
├── Danush_SV_Portfolio.html    # Main portfolio page
├── contact.html                # Contact page
├── server.js                   # Backend server
├── package.json                # Project dependencies
├── data/                       # Contact form submissions
│   └── submissions.json
└── README.md                   # Documentation
```

## Customization

To customize the portfolio:
1. Update personal information in HTML files
2. Modify styles in the `<style>` sections
3. Add/remove projects in the projects section
4. Update skills and experience as needed

## License

This project is open source and available under the MIT License. 