# Hana the Hyena Website

A Next.js website for "The Hyena Who Went To Dinner" by Joseph Afolabi and Feven Teshome.

## Project Structure

```
HanaTheHyena/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── play/
│   │   └── page.tsx         # Play & Activities page
│   └── globals.css          # Global styles
├── public/
│   └── activities/          # PDF activity files
│       ├── README.md        # PDF specifications
│       └── [PDF files]      # Activity PDFs (to be added)
└── package.json
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Pages

- `/` - Home page
- `/play` - Play & Activities page with downloadable PDFs

## Activity PDFs

The activity PDFs should be placed in `public/activities/` folder. See `public/activities/README.md` for detailed specifications.

Required PDFs:
1. hana-dream-bubbles-colouring.pdf
2. hana-dinner-table-colouring.pdf
3. hana-journey-maze.pdf
4. hana-spot-the-difference-journey.pdf
5. hana-feelings-timeline.pdf
6. hana-postcard-from-addis.pdf
7. hana-activity-pack-all-in-one.pdf (optional)

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Deployment

This project is configured for deployment on Vercel. The PDFs in `public/activities/` will be served statically.
