
'use client'

import styles from './youtube.module.css'
import Header from '../modules/Header/Header';
import Footer from '../modules/Footer/Footer';
import CloseHandler from '../closeHandler';
export default function Youtube(){
    CloseHandler
    return(
        <div>
            <Header />
                <iframe id={styles.embed} src="/embed/youtube/index.html" />
            <Footer />
        </div>
    );
}
