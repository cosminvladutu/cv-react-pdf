// index.tsx
// This is the main page component for the CV website using Next.js.
// It renders a simple landing page with buttons to view the CV in different formats,
// and displays the selected CV in a PDF viewer when a format is chosen.

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {PDFViewer} from "@react-pdf/renderer";
import styles from '../styles/Home.module.css'
import CvDocument from "../src/components/CvDocument";
import React, {useEffect, useMemo, useState} from "react";
import CvDocumentOnePage from "../src/components/CvDocument/CvDocumentOnePage";

/**
 * Home page component for the CV website
 * 
 * Features:
 * - Landing page with buttons to select PDF format
 * - Full multi-page CV option
 * - One-page CV summary option
 * - Embedded PDF viewer with toolbar for easy navigation and download
 * - Close button to return to the landing page
 */
const Home: NextPage = () => {
  const [showFullPdf, setShowFullPdf] = useState(false);
  const [showOnePagePdf, setShowOnePagePdf] = useState(false);
  // useEffect(() => {
  //   setShowFullPdf(true)
  // }, [])
  const cvDocumentElement = useMemo(() => {
    if (showFullPdf) {
      return <CvDocument />;
    }

    if (showOnePagePdf) {
      return <CvDocumentOnePage />
    }

    return null;
  }, [showFullPdf, showOnePagePdf]);

  // Handler for closing the PDF viewer

  const handleCloseClick = () => {
    setShowFullPdf(false);
    setShowOnePagePdf(false);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Professional CV | Cosmin Vlăduțu</title>
        <meta name="description" content="Professional CV for Cosmin Vlăduțu - Senior .NET Developer, Leader, Contractor, Freelancer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my CV website
        </h1>
        
        {/* Show PDF viewer when a document is selected */}
        {!!cvDocumentElement && (
          <div style={{position: 'fixed', width: '100vw', height: '100vh'}}>
            <PDFViewer 
              style={{
                position: 'absolute',
                width: '100vw',
                height: '100vh',
              }}
              showToolbar={true}
            >
              {cvDocumentElement}
            </PDFViewer>
            <a
              style={{
                position: "fixed",
                bottom: 15,
                right: 15,
                width: 30,
                height: 30,
                borderRadius: 20,
                background: '#c2c2c2',
                color: '#2a2a2a',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                cursor: "pointer"
              }}
              role={"button"}
              onClick={handleCloseClick}
            >              X
            </a>
          </div>
        )}

        {/* Show format selection buttons when no document is selected */}
        {!cvDocumentElement && (
          <div className={styles.grid}>
            <a
              className={styles.card}
              onClick={() => setShowFullPdf(true)}
              role={"button"}
            >
              <h2>Complete CV &rarr;</h2>
              <p>View my full CV with detailed project history and skills.</p>
            </a>

            <a
              className={styles.card}
              onClick={() => setShowOnePagePdf(true)}
            >
              <h2>One-page Summary &rarr;</h2>
              <p>View a condensed one-page version highlighting key projects.</p>
            </a>
          </div>
        )}
      </main>      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/cosmin-vladutu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Cosmin Vlăduțu
        </a>
      </footer>
    </div>
  )
}

export default Home
