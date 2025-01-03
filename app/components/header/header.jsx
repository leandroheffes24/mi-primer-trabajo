'use client'
import Image from 'next/image'
import styles from './header.module.css'
import Logo from '@/public/images/logo.webp'
import { IconMenu2 } from '@tabler/icons-react';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <a href="/">
                    <Image
                        src={Logo} 
                        alt='Mi Primer Trabajo logo'
                        className={styles.logo}
                    />
                </a>
            </div>

            <IconMenu2 stroke={2} />
        </header>
    )
}