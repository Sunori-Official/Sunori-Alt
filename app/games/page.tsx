
'use client'

import styles from './games.module.css';
import Header from '../modules/Header/Header';
import Footer from '../modules/Footer/Footer';
import Card from '../modules/Card/Card';
import CloseHandler from '../closeHandler';
export default function Games() {
  CloseHandler
  return (
    <div>
      <Header />
      <h1 className="title">Games</h1>
      <div id={styles.games}>
      <center>
        <Card Title="2048" Img="games/2048.png" Url="/g/2048/" />
        <Card Title="Age of War" Img="games/ageofwar.png" Url="/g/ageofwar/" />
        <Card Title="Bitlife" Img="games/bitlife.png" Url="/g/bitlife/" />
        <Card Title="Bloxorz" Img="games/bloxorz.png" Url="/g/bloxorz/" />
        <Card Title="Cell Machine" Img="games/cellmachine.png" Url="/g/cellmachine/" />
        <Card Title="Cluster Rush" Img="games/clusterrush.png" Url="/g/clusterrush/" />
        <Card Title="Cookie Clicker" Img="games/cookieclicker.png" Url="/g/cookieclicker/" />
        <Card Title="Crossyroad" Img="games/crossyroad.png" Url="/g/crossyroad/" />
        <Card Title="Dogeminer" Img="games/dogeminer.png" Url="/g/dogeminer/" />
        <Card Title="Dogeminer 2" Img="games/dogeminer2.png" Url="/g/dogeminer2/" />
        <Card Title="Doodle Jump" Img="games/doodlejump.png" Url="/g/doodlejump/" />
        <Card Title="Duck Life" Img="games/ducklife.png" Url="/g/ducklife/" />
        <Card Title="Duck Life 2" Img="games/ducklife2.png" Url="/g/ducklife2/" />
        <Card Title="Duck Life 3" Img="games/ducklife3.png" Url="/g/ducklife3/" />
        <Card Title="Duck Life 4" Img="games/ducklife4.png" Url="/g/ducklife4/" />
        <Card Title="Eaglercraft" Img="games/eaglercraft.png" Url="/g/eaglercraft/" />
        <Card Title="Final Earth 2" Img="games/finalearth2.png" Url="/g/finalearth2/" />
        <Card Title="Fruit Ninja" Img="games/fruitninja.png" Url="/g/fruitninja/" />
        <Card Title="Geometry Dash" Img="games/geometrydash.png" Url="/g/geometrydash/" />
        <Card Title="Getting Over It" Img="games/gettingoverit.png" Url="/g/gettingoverit/" />
        <Card Title="Gun Spin" Img="games/gunspin.png" Url="/g/gunspin/" />
        <Card Title="Hextris" Img="games/hextris.png" Url="/g/hextris/" />
        <Card Title="House of Hazards" Img="games/houseofhazards.png" Url="/g/houseofhazards/" />
        <Card Title="Imposssible Quiz" Img="games/impossiblequiz.png" Url="/g/impossiblequiz/" />
        <Card Title="Impossible Quiz 2" Img="games/impossiblequiz2.png" Url="/g/impossiblequiz2/" />
        <Card Title="Minesweeper" Img="games/minesweeper.png" Url="/g/minesweeper/" />
        <Card Title="Moto X3M 2" Img="games/motox3m2.png" Url="/g/motox3m2/" />
        <Card Title="OvO" Img="games/ovo.png" Url="/g/ovo/" />
        <Card Title="Paper.io 2" Img="games/paperio2.png" Url="/g/paperio2/" />
        <Card Title="Polytrack" Img="games/polytrack.png" Url="/g/polytrack/" />
        <Card Title="Slope" Img="games/slope.png" Url="/g/slope/" />
        <Card Title="Stack" Img="games/stack.png" Url="/g/stack/" />
        <Card Title="Superhot" Img="games/superhot.png" Url="/g/superhot/" />
        <Card Title="Worlds Hardest Game" Img="games/worldshardestgame.png" Url="/g/worldshardestgame/" />
        <Card Title="Worlds Hardest Game 2" Img="games/worldshardestgame2.png" Url="/g/worldshardestgame2/" />
      </center>
      </div>
      <Footer />
    </div>
  );
}
