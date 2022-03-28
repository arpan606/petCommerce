import React, { useEffect, useState } from "react";
import "./Card.css";

import dog from "../LandingPage/images/dog.webp";


export default function Card(props) {
  return (
    <>
    <div className="card" key={props.id}>
     <img src={dog}/>
     <div style={{fontWeight:"500",fontSize:"20px"}}>{props.name}</div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"80%",marginTop:"15px",marginBottom:"15px"}}>
       <div>Location: {props.location}</div>
       <div>Weight:{props.weight}</div>
       <div>Breed:{props.breed}</div>
     </div>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"60%"}}>
       <div>Age:{props.age}</div>
       <div>Amount:{props.amount}</div>
    </div>
    </div>
    </>
  );
}
