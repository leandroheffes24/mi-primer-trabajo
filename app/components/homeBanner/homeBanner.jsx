'use client'
import styles from './homeBanner.module.css'
import { useEffect, useState } from 'react'
import homeBackground from '@/public/images/homeBackground.webp'
import Image from 'next/image'

export default function HomeBanner() {
    const [provinces, setProvinces] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
            const posts = await data.json()
            setProvinces(posts.provincias)
        }
        fetchData()
    }, [])

    return (
        <section className={styles.homeBannerSection}>
            <Image
                src={homeBackground}
                alt='Imagen de fondo'
                className={styles.homeBackgroundImage}
            />

            <form className={styles.searchForm}>
                <div className={styles.searchInputContainer}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={styles.homeSearchInputIcon}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                    <input type="text" placeholder='Busca puestos de trabajo' className={styles.homeSearchInput} />
                </div>

                <div className={styles.searchInputContainer}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={styles.homeProvincesSelectIcon}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    <select name="" id="" className={styles.homeProvincesSelect} >
                        <option>Todo el país</option>
                        {provinces.map((province) => (
                            <option value={province.id} key={province.id}>{province.nombre}</option>
                        ))}
                    </select>
                </div>

                <button className={styles.searchButton} type='submit'>Buscar empleos</button>
            </form>
        </section>
    )
}