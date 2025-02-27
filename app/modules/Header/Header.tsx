import styles from './Header.module.css'
import Link from 'next/link';
import Image from 'next/image';
import cloak from '@/app/cloak';
export default function Header(){
    return(
        <header>
            <Link className='link' href="/">
            <Image alt="Sunori Icon" id={styles.favicon} src="./favicon.ico" width={48} height={48}/>
            <h1 id={styles.title}>Sunori</h1>
            </Link>
            <nav id={styles.nav}>
                <ul>
                    <li><Link className='link' href="/">Home</Link></li>
                    <li><Link className='link' href="/games">Games</Link></li>
                    <li><Link className='link' href="/youtube">Youtube</Link></li>
                    <li><Link className='link' target="_blank" href="https://github.com/Sunori-Official/Sunori">Github</Link></li>
                    <li><p className='link' onClick={cloak}>Cloak</p></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}
