
'use client'

import styles from './app.module.css'
import Header from './modules/Header/Header';
import Footer from './modules/Footer/Footer';
import Link from 'next/link';
import Image from 'next/image';
import CloseHandler from './closeHandler';
export default function app() {
  CloseHandler
  return (
    <div>
      <Header />
      <p id={styles.description}>Welcome to Sunori, the proffesional games site written in Next.JS</p>
      <ul id={styles.nav}>
        <li><Link href="/"><Image alt="Home Icon" src="/img/icons/home.png" width={150} height={150}/></Link></li>
        <li><Link href="/games"><Image alt="Games Icon" src="/img/icons/games.png" width={150} height={150}/></Link></li>
        <li><Link href="/youtube"><Image alt="Youtube Icon" src="/img/icons/youtube.png" width={150} height={150}/></Link></li>
        <li><Link target="_blank" href="https://github.com/Sunori-Official/Sunori"><Image alt="Github Icon" src="/img/icons/github.png" width={150} height={150}/></Link></li>
      </ul>
      <Footer />
    </div>
  );
}
