'use client'
import Image from 'next/image'
import styles from './homeBanner.module.css'
import homeDesktopBanner from '../../../public/images/homeDesktopBanner.webp'
import homeMobileBanner from '../../../public/images/homeMobileBanner.png'
import { useEffect, useState } from 'react'

export default function HomeBanner() {
    const [homeBanner, setHomeBanner] = useState("")

    useEffect(() => {
        if (screen.width <= 992) {
            setHomeBanner(homeMobileBanner)
        } else {
            setHomeBanner(homeDesktopBanner)
        }
    }, [])

    return (
        <section className={styles.homeBannerSection}>
            <Image
                src={homeBanner}
                alt='Banner de inicio'
                className={styles.homeBanner}
            />

            <div className={styles.searchInputContainer}>
                <input type="text" placeholder='Busca puestos o empresas' className={styles.homeSearchInput} />
            </div>
        </section>
    )
}