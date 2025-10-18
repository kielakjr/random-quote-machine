# Random Quote Machine

A small, polished React app that shows one random quote at a time with its author and basic sharing support.

What the app does
- Fetches a random quote from the public Quotable API (https://api.quotable.io/random) and displays it.
- Shows a loading spinner while fetching and a clear error message with retry on failure.
- Displays the quote text and author with a visually prominent layout and subtle animations.
- Lets users get a new random quote with a "New Quote" button.
- Provides a quick "Tweet" button that opens Twitter with the current quote prefilled.
- Responsive and keyboard-accessible: interactive controls are buttons/links with focus styles.

User-visible features
- Single-quote view: large quote text with quotation marks and author line.
- Loading state: spinner + message while data is requested.
- Error state: readable error text and a retry button.
- Share: Tweet the current quote in a new tab.
- Smooth UI touches: animated glow, hover/active states for buttons.

How it works (high level)
- On load the main QuoteBox component requests one random quote.
- QuoteBox manages loading/error state and updates the displayed quote and author.
- The Twitter button builds a tweet URL including the quote and author.
- The app is a static single-page React app bundled by Vite.

Tech stack and files of interest
- React + Vite — fast development and production builds.
- Key files:
  - src/components/QuoteBox.jsx — fetch + UI states (loading, error, quote)
  - src/components/Quote.jsx, Author.jsx, TwitterButton.jsx — presentation and sharing
  - src/index.css — global styles and animations

Quick start
1. Install
   npm install

2. Start dev server
   npm run dev
   (open the URL shown in the terminal)

3. Build for production
   npm run build

4. Preview production build locally
   npm run preview

Notes
- The app is intended as a demo / small production-ready static site; deploy the built `dist` to Vercel, Netlify, GitHub Pages or any static host.
- The UI emphasizes readability and accessibility; interactive elements are focusable and usable with keyboard.
- The default behavior is to fetch quotes from Quotable; if the API is unavailable the app surfaces the error and allows retry.
