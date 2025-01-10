'use client'
import Link from 'next/link'
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
                <div className={styles.navbarItems}>
                    <li className={styles.navbarItem}>
                        <Link
                            href='/'
                            className={styles.navbarLink}
                        >
                            Buscar ofertas
                        </Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link
                            href="/"
                            className={styles.navbarLink}
                        >
                            Salarios
                        </Link>
                    </li>
                </div>
                <div className={styles.loginAndRegisterNavbarContainer}>
                    <li className={styles.loginNavbarItem}>
                        <Link
                            href="#"
                            className={styles.loginLink}
                        >
                            Ingresar
                        </Link>
                    </li>
                    <li className={styles.registerNavbarItem}>
                        <Link
                            href="#"
                            className={styles.registerLink}
                        >
                            Registrarse
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}