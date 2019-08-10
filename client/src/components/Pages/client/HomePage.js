import React from "react";
import Header from "../../Header"
import CocomposteCestQuoi from "./PartieCocomposteCestQuoi"
import "./HomePage.css"
const onClickScrollDown = () => {
  window.scrollTo({top : window.innerHeight*1.02 ,behavior:"smooth"})
}

const HomePage = () => {
  return<div >
   <div className="positon-relative">
     <div className="container-fluid hens-background"  style={{height:"101vh" }}>
 
     </div  >
     <div className="btn scroll-down-link" onClick={onClickScrollDown} >
       C'est Parti !
       <img className="egg" src="https://svgsilh.com/svg_v2/2181491.svg" style={{height : "30px"}} alt="" />
       <br/>
       <img className="arrow"src="https://labsud.org/wp-content/uploads/2017/07/down-arrow.png" style={{height :"20px" , width : "50px"}} alt=""/>
       </div>
       </div>
<div className="col-md-6 col-10 cocomposte-slogan">
 <h1>Cocomposte </h1> promeut la réduction des déchets et le bien être animal par l'installation de poulaillers urbains et propose des oeufs frais aux habitants en échange de leurs déchets alimentaires compostables
  </div>

<div className="myNavbar">
< Header />
</div>
<div className="container bg-success" style={{height:"60vh"}}>
  <CocomposteCestQuoi/>
</div>
<div className="container bg-primary" style={{height:"40vh"}}>
  partie photos
</div>
  </div>;}
export default HomePage;


