
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
      <Card Title="2048" Img="games/2048.png" Url="/games/2048/index.html" />
        <Card Title="Age of War" Img="games/ageofwar.png" Url="/games/ageofwar/index.html" />
        <Card Title="Bitlife" Img="games/bitlife.png" Url="/games/bitlife/index.html" />
        <Card Title="Bloxors" Img="games/bloxors.png" Url="/games/bloxors/index.html" />
        <Card Title="Cell Machine" Img="games/cellmachine.png" Url="/games/cellmachine/index.html" /><br />
        <Card Title="Cluster Rush" Img="games/clusterrush.png" Url="/games/clusterrush/index.html" />
        <Card Title="Cookie Clicker" Img="games/cookieclicker.png" Url="/games/cookieclicker/index.html" />
        <Card Title="Crossyroad" Img="games/crossyroad.png" Url="/games/crossyroad/index.html" />
        <Card Title="Dogeminer" Img="games/dogeminer.png" Url="/games/dogeminer/index.html" />
        <Card Title="Dogeminer 2" Img="games/dogeminer2.png" Url="/games/dogeminer2/index.html" /><br />
        <Card Title="Doodle Jump" Img="games/doodlejump.png" Url="/games/doodlejump/index.html" />
        <Card Title="Duck Life 4" Img="games/ducklife4.png" Url="/games/ducklife4/index.html" />
        <Card Title="Final Earth 2" Img="games/finalearth2.png" Url="/games/finalearth2/index.html" />
        <Card Title="Fruit Ninja" Img="games/fruitninja.png" Url="/games/fruitninja/index.html" />
        <Card Title="Geometry Dash" Img="games/geometrydash.png" Url="/games/geometrydash/index.html" /><br />
        <Card Title="Getting Over It" Img="games/gettingoverit.png" Url="/games/gettingoverit/index.html" />
        <Card Title="Gun Spin" Img="games/gunspin.png" Url="/games/gunspin/index.html" Target="_blank"/>
        <Card Title="Hextris" Img="games/hextris.png" Url="/games/hextris/index.html" Target="_blank"/>
        <Card Title="House of Hazards" Img="games/houseofhazards.png" Url="/games/houseofhazards/index.html" />
        <Card Title="Imposssible Quiz" Img="games/impossiblequiz.png" Url="/games/impossiblequiz/index.html" /><br />
        <Card Title="Impossible Quiz 2" Img="games/impossiblequiz2.png" Url="/games/impossiblequiz2/index.html" />
        <Card Title="Minesweeper" Img="games/minesweeper.png" Url="/games/minesweeper/index.html" />
        <Card Title="Moto X3M 2" Img="games/motox3m.png" Url="/games/motox3m/index.html" />
        <Card Title="OvO" Img="games/ovo.png" Url="/games/ovo/index.html" Target="_blank"/>
        <Card Title="Paper.io 2" Img="games/paperio2.png" Url="/games/paperio2/index.html" /><br />
        <Card Title="Slope" Img="games/slope.png" Url="/games/slope/index.html" />
        <Card Title="Stack" Img="games/stack.png" Url="/games/stack/index.html" />
        <Card Title="Superhot" Img="games/superhot.png" Url="/games/superhot/index.html" />
        <Card Title="Worlds Hardest Game" Img="games/worldshardestgame.png" Url="/games/worldshardestgame/index.html" />
        <Card Title="Worlds Hardest Game 2" Img="games/worldshardestgame2.png" Url="/games/worldshardestgame2/index.html" />
      </center>
      </div>
      <Footer />
    </div>
  );
}
