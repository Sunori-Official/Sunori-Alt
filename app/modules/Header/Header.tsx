import Link from 'next/link';
import Image from 'next/image'
export default function Header(){
    return(
        <header>
            <Link href="/">
            <Image alt="Sunori Icon" id="favicon" src="./favicon.ico" width={48} height={48}/>
            <h1 id="title">Sunori</h1>
            </Link>
            <nav>
                <ul>
                    <li><Link href="/games">Games</Link></li>
                    <li><Link href="../../../youtube/index.html">Youtube</Link></li>
                    <li><Link href="https://github.com/The-Sunori-Project/Sunori">Github</Link></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}
