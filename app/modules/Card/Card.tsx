import Link from 'next/link';
import styles from './Card.module.css'
import Image from 'next/image';
import React, { FC } from 'react';
type CardProps = {
    Title?: string;
    Img?: string;
    Target?: string;
    Url?: string;
}
const Card: FC<CardProps> = ({ Img, Title, Url, Target }) => {
    return(
        <Link target={Target} className={styles.card+' link'} href={'' + Url}>
            <Image alt={Title + " Image"} className={styles.cardImg} src={"/img/" + Img} width={100} height={150}/>
            <p className={styles.cardTitle}>{Title}</p>
        </Link>
    );
}
export default Card;
