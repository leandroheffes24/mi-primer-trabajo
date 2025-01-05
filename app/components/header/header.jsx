'use client'
import Image from 'next/image'
import styles from './header.module.css'
import Logo from '@/public/images/logo.webp'
import Navbar from './components/navbar/Navbar'
import { useEffect, useState } from 'react'

export default function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = useState()

    useEffect(() => {
        if (screen.width >= 992) {
            setIsNavbarOpen(true)
        } else {
            setIsNavbarOpen(false)
        }
    }, [])

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen)
    }

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <a href="/" className={styles.logoLink}>
                    <Image
                        src={Logo} 
                        alt='Mi Primer Trabajo logo'
                        className={styles.logo}
                    />
                </a>
            </div>

            <button className={styles.openNavbarButton} onClick={toggleNavbar}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={styles.openNavbarIcon}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
            </button>

            {isNavbarOpen && <Navbar toggleNavbar={toggleNavbar} />}
        </header>
    )
}