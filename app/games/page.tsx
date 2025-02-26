import Header from '../modules/Header/Header';
import Card from '../modules/Card/Card';
import '../modules/imports.css';
import Footer from '../modules/Footer/Footer';
import React from 'react';
import CloseHandler from '../closeHandler';
export default function Games() {
  CloseHandler
  return (
    <div>
      <Header />
      <h1 className="pageTitle">Games</h1>
      <center>
        <Card Title="2048" Img="games/2048.png" Url="/games/2048/index.html" Target="_blank"/>
        <Card Title="Age of War" Img="games/ageofwar.png" Url="/games/ageofwar/index.html" Target="_blank"/>
        <Card Title="Bitlife" Img="games/bitlife.png" Url="/games/bitlife/index.html" Target="_blank"/>
        <Card Title="Bloxors" Img="games/bloxors.png" Url="/games/bloxors/index.html" Target="_blank"/>
        <Card Title="Cell Machine" Img="games/cellmachine.png" Url="/games/cellmachine/index.html" Target="_blank"/><br />
        <Card Title="Cluster Rush" Img="games/clusterrush.png" Url="/games/clusterrush/index.html" Target="_blank"/>
        <Card Title="Cookie Clicker" Img="games/cookieclicker.png" Url="/games/cookieclicker/index.html" Target="_blank"/>
        <Card Title="Crossyroad" Img="games/crossyroad.png" Url="/games/crossyroad/index.html" Target="_blank"/>
        <Card Title="Dogeminer" Img="games/dogeminer.png" Url="/games/dogeminer/index.html" Target="_blank"/>
        <Card Title="Dogeminer 2" Img="games/dogeminer2.png" Url="/games/dogeminer2/index.html" Target="_blank"/><br />
        <Card Title="Doodle Jump" Img="games/doodlejump.png" Url="/games/doodlejump/index.html" Target="_blank"/>
        <Card Title="Duck Life 4" Img="games/ducklife4.png" Url="/games/ducklife4/index.html" Target="_blank"/>
        <Card Title="Final Earth 2" Img="games/finalearth2.png" Url="/games/finalearth2/index.html" Target="_blank"/>
        <Card Title="Fruit Ninja" Img="games/fruitninja.png" Url="/games/fruitninja/index.html" Target="_blank"/>
        <Card Title="Geometry Dash" Img="games/geometrydash.png" Url="/games/geometrydash/index.html" Target="_blank"/><br />
        <Card Title="Getting Over It" Img="games/gettingoverit.png" Url="/games/gettingoverit/index.html" Target="_blank"/>
        <Card Title="Gun Spin" Img="games/gunspin.png" Url="/games/gunspin/index.html" Target="_blank"/>
        <Card Title="Hextris" Img="games/hextris.png" Url="/games/hextris/index.html" Target="_blank"/>
        <Card Title="House of Hazards" Img="games/houseofhazards.png" Url="/games/houseofhazards/index.html" Target="_blank"/>
        <Card Title="Imposssible Quiz" Img="games/impossiblequiz.png" Url="/games/impossiblequiz/index.html" Target="_blank"/><br />
        <Card Title="Impossible Quiz 2" Img="games/impossiblequiz2.png" Url="/games/impossiblequiz2/index.html" Target="_blank"/>
        <Card Title="Minesweeper" Img="games/minesweeper.png" Url="/games/minesweeper/index.html" Target="_blank"/>
        <Card Title="Moto X3M 2" Img="games/motox3m.png" Url="/games/motox3m/index.html" Target="_blank"/>
        <Card Title="OvO" Img="games/ovo.png" Url="/games/ovo/index.html" Target="_blank"/>
        <Card Title="Paper.io 2" Img="games/paperio2.png" Url="/games/paperio2/index.html" Target="_blank"/><br />
        <Card Title="Slope" Img="games/slope.png" Url="/games/slope/index.html" Target="_blank"/>
        <Card Title="Stack" Img="games/stack.png" Url="/games/stack/index.html" Target="_blank"/>
        <Card Title="Superhot" Img="games/superhot.png" Url="/games/superhot/index.html" Target="_blank"/>
        <Card Title="Worlds Hardest Game" Img="games/worldshardestgame.png" Url="/games/worldshardestgame/index.html" Target="_blank"/>
        <Card Title="Worlds Hardest Game 2" Img="games/worldshardestgame2.png" Url="/games/worldshardestgame2/index.html" Target="_blank"/>
      </center>
      <p>Test</p>
      <Footer />
    </div>
  );
}
