# STEMfolio

A modern, minimalistic web application for organizing and accessing advanced STEM notes across Mathematics, Physics, and Chemistry courses.

## Features

- **Color-Coded Subject Organization**:
  - Mathematics (Red): Linear Algebra, ODEs, Multivariable Calculus
  - Physics (Blue): Foundational Physics, Electromagnetism
  - Chemistry (Green): Organic Chemistry, Material Science

- **Modern UI/UX**: Abstract minimalistic design with smooth animations and transitions
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Course Navigation**: Dedicated pages for each course with sidebar navigation
- **Unit Organization**: Hierarchical structure with units and subunits

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Modern styling with custom properties and animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── data/
│   └── courses.js       # Course data and structure
├── pages/
│   ├── Homepage.jsx     # Main landing page
│   ├── Homepage.css
│   ├── CoursePage.jsx   # Individual course pages
│   └── CoursePage.css
├── App.jsx              # Main app component with routing
└── index.css            # Global styles
```

## Adding Content

To add or modify course content, edit the `src/data/courses.js` file. The structure follows:

```javascript
{
  subject: {
    title: "Subject Name",
    color: "#HexColor",
    courses: [
      {
        id: "course-id",
        name: "Course Name",
        subtitle: "Optional subtitle",
        units: [
          { id: "1.1", title: "Unit 1.1: Topic" }
        ]
      }

          ### Importing unit content automatically

          There are two ways to import article content for a unit (recommended when you paste/upload a whole unit at once):

          - Admin UI (browser):
            1. Start the dev server: `npm run dev`
            2. Open `http://localhost:5173/admin/import`
            3. Paste the full unit text (use topic headings like `1.1: Topic Title`) and click `Parse unit`.
            4. Download the individual `.md` files for each detected topic or follow the CLI option below to write files directly into the repo.

          - CLI importer (repo-side):
            1. Create a plaintext file with the full unit content (example: `scripts/sample_unit_linear_algebra_1.txt`).
            2. Run `npm run import-unit -- --course linear-algebra --unit 1 --file scripts/sample_unit_linear_algebra_1.txt`.
            3. The script writes markdown files into `public/articles/<courseId>/` and attempts to add `contentPath` entries inside `src/data/courses.js` for matching topic ids.

    ]
  }
}
```

## Design Philosophy

STEMfolio embraces a minimalistic, abstract design inspired by modern web applications. The interface uses:
- Dark theme optimized for long reading sessions
- Custom fonts (Inter & Space Grotesk) for clarity
- Subtle gradients and shadows for depth
- Color-coded subjects for quick visual navigation
- Smooth animations for enhanced user experience
