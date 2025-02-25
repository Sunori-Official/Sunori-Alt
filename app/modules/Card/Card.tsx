import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';
type CardProps = {
    Title: string;
    Img: string;
    Target: string;
    Url: string;
}
const Card: FC<CardProps> = ({ Img, Title, Url, Target }) => {
    return(
        <Link target={Target} className='card' href={Url}>
            <Image alt={Title + " Image"} className='cardImg' src={"/img/" + Img} width={100} height={150}/>
            <p className='cardTitle'>{Title}</p>
        </Link>
    );
}
export default Card;
