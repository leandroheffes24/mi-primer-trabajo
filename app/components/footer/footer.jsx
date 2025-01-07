'use client'
import Link from 'next/link'
import styles from './footer.module.css'
import { useEffect } from 'react'

export default function Footer(){
    useEffect(() => {
        const year = document.querySelector('#current-year')
        year.innerHTML = new Date().getFullYear()
    }, [])

    return(
        <footer className={styles.footer}>
            <div className={styles.socialNetworksContainer}>
                <Link href='#' className={styles.socialNetworkContainer}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialNetworkIcon}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M16.5 7.5v.01" />
                    </svg>
                </Link>

                <Link href='#' className={styles.socialNetworkContainer}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialNetworkIcon}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                </Link>

                <Link href='#' className={styles.socialNetworkContainer}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.socialNetworkIcon}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                </Link>
            </div>

            <div className={styles.informationLinksContainer}>
                <Link
                    href='#'
                    className={styles.informationLink}
                >
                    Política de privacidad
                </Link>

                <Link
                    href='#'
                    className={styles.informationLink}
                >
                    Preguntas frecuentes
                </Link>

                <Link
                    href='#'
                    className={styles.informationLink}
                >
                    Términos y condiciones
                </Link>

                <Link
                    href='#'
                    className={styles.informationLink}
                >
                    Contacto
                </Link>
            </div>

            <div className={styles.developerAndCopyrightContainer}>
                <span className={styles.copyrightText}>© Copyright 2025-<span id='current-year'></span></span>
                <span className={styles.developerText}>Sitio web desarrollado por <Link href='https://www.leandroheffes.com.ar/' className={styles.developerLink}>Leandro Heffes</Link></span>
            </div>
        </footer>
    )
}