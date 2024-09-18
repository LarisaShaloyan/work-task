import logo from './logo.svg';
import './App.css';
import NavLogo from "./pages/navLogo/navLogo";
import Header from "./pages/header/Header";
import SectionAbout from "./pages/main/sectionAbout";
import Footer from "./pages/footer/Footer";
import Item from "./pages/Item/Item";
import Smart_Wall_Section from "./pages/smartWallSection/Smart_Wall_Section";
import {IoIosArrowRoundForward} from "react-icons/io";
import React from "react";
import SmartWall from "./pages/smartWallSection/Smart-Wall";
import SmartWallSectionTwo from "./pages/smartWallSection/Smart_wall_section_Two";

function App() {
  return (
    <div className="App">
    <NavLogo />
      <Header/>
      <Smart_Wall_Section />
      <SmartWall>
        < Smart_Wall_Section  src={"https://i.pinimg.com/originals/00/b7/0f/00b70fb0a5a2515794a4868477ac5052.gif" }/>
        <SmartWallSectionTwo>
          <h2 className="smart"> <b>Ervaar in korte tijd </b><span className={"green"}>diepe ontspanning</span> met <span className={"green"}> DreamEase™!</span></h2>
          <p>
            Heb je last van slapeloze nachten en constante hoofdpijn?


            Ontdek de kracht van DreamEase™.

            Speciaal ontworpen om je binnen enkele dagen diepe ontspanning en
            verlichting van migraine te bieden. Dankzij onze geavanceerde technologie verrijkt met rustgevende
            geluidsgolven, zeg maar dag tegen slapeloze nachten en verwelkom elke ochtend een verfrist gevoel.


            Gun jezelf het geschenk van vredige nachten en energieke ochtenden met DreamEase™.</p>
          <button className="cta-button">Bestel nu & bespaar 50% <IoIosArrowRoundForward/></button>
        </SmartWallSectionTwo>
      </SmartWall>
      <SmartWall>
        <SmartWallSectionTwo>
          <h2 className="smart"><span className={"green"}> Ervaar</span> het aan en zeg<span className={"green"}> migraine vaarwel! </span></h2>
          <p>
            Naarmate het leven vordert, kunnen de uitdagingen van slapeloze nachten en aanhoudende migraine ons welzijn
            en dagelijks functioneren beïnvloeden.


            DreamEase™ biedt de oplossing met zijn revolutionaire technologie die niet alleen je slaapkwaliteit
            verbetert, maar ook migraine effectief aanpakt. Binnen slechts een paar dagen ervaar je minder hoofdpijn en
            een verbeterde slaap.


            Herwin comfort en controle over je leven met elke nacht.
          </p>
          <button className="cta-button">Bestel nu & bespaar 50% <IoIosArrowRoundForward/></button>
        </SmartWallSectionTwo>
        <Smart_Wall_Section  src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/200px-Rotating_earth_%28large%29.gif"}/>

      </SmartWall>
    <SectionAbout />
      <Item />
      <Footer />

    </div>
  );
}

export default App;
