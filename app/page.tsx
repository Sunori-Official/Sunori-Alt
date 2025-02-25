
import Header from './modules/Header/Header';
import Footer from './modules/Footer/Footer';
import './modules/imports.css';
import Link from 'next/link';
import Image from 'next/image';
export default function app() {
  return (
    <div>
      <Header />
      <p>Welcome to Sunori, the proffesional games site written in Next.JS</p>
      <ul id="icoNav">
      <li><Link className="navIco" href="/"><Image alt="Home Icon" src="/img/icons/home.png" width={150} height={150}/></Link></li>
        <li><Link className="navIco" href="/games"><Image alt="Games Icon" src="/img/icons/games.png" width={150} height={150}/></Link></li>
        <li><Link className="navIco" target="_blank" href="../youtube/index.html"><Image alt="Youtube Icon" src="/img/icons/youtube.png" width={150} height={150}/></Link></li>
        <li><Link className="navIco" target="_blank" href="https://github.com/Sunori-Official/Sunori"><Image alt="Github Icon" src="/img/icons/github.png" width={150} height={150}/></Link></li>
      </ul>
      <Footer />
    </div>
  );
}
