
'use client'

import styles from './Game.module.css'
import React, { FC } from 'react';
import Header from '../Header/Header'
import CloseHandler from '@/app/closeHandler';
type GameProps = {
    Name?: string;
    Creator?: string;
}
const Game: FC<GameProps> = ({ Name = "Game", Creator = "Unknown"}) => {
    const Url = Name.replace(/\s/g, '').toLowerCase()
    const fullscreen = () => {
        const win: any = window.open();
        const iframe: any = win.document.createElement('embed');
        const body: any = win.document.body;
        body.style.margin = "0";
        body.style.overflow = "hidden";
        body.style.backgroundColor = "Black";
        iframe.style.width = "100vw";
        iframe.style.height = "100vh";
        iframe.style.border = "none";
        iframe.src = "/embed/games/"+Url+"/index.html";
        win.document.body.appendChild(iframe);
    }
    return(
        <div id={styles.page}>
            <Header />
            <div id={styles.title} className="title">
                <p>{Name}</p>
            </div>
            <span id={styles.credits}>Game Made By: {Creator}</span>
            <span onClick={fullscreen} id={styles.fullscreen}>Fullscreen</span>
            <iframe id={styles.game} src={"/embed/games/"+Url+"/index.html"} />
        </div>
    );
    CloseHandler
}
export default Game;