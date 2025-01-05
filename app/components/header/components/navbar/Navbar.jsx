'use client'
import styles from './navbar.module.css'

export default function Navbar({toggleNavbar}) {
    return (
        <nav className={styles.navbar}>
            <button className={styles.closeMobileNavbarButton} onClick={toggleNavbar}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={styles.closeMobileNavbarIcon}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>
            </button>

            <ul className={styles.navbarList}>
                <li className={styles.loginNavbarItem}>
                    <a href="#" className={styles.loginLink}>Ingresar</a>
                </li>
                <li className={styles.registerNavbarItem}>
                    <a href="#" className={styles.registerLink}>Registrarse</a>
                </li>
            </ul>
        </nav>
    )
}