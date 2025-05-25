/**
 * _app.tsx
 * 
 * This is the main application component for the Next.js application.
 * It wraps all pages and is responsible for maintaining state across page changes,
 * as well as including global CSS styles that apply throughout the application.
 * 
 * For the CV application, this component provides:
 * - Global styling through globals.css
 * - Consistent page structure across all routes
 * 
 * This component follows Next.js conventions for the App component:
 * https://nextjs.org/docs/advanced-features/custom-app
 */
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
