import React, { useEffect, useState } from "react";
import {useParams,Link} from "react-router-dom";
import axios from "axios";

import "./explore.css";
import search from "./Images/search2.png";
import filterImage from "./Images/filter.webp";
import ascending from "./Images/ascending.webp";
import descending from "./Images/descending.webp";

import Card from "./Card.js";


export default function Explore() {
  const {userId}=useParams();


  const [filter,setFilter]=useState(false);
  const [dogData,setDogData]=useState([]);
  const [searchValue,setSearchValue]=useState('');
  const [searchData,setSearchData]=useState([]);


  const getCardData= async ()=>{
    await axios.post("http://localhost:8000/dog/getdogs")
         .then((data) => {
          setDogData(data.data);
        });
  };

{/*
  const handleSearch=async ()=>{
   await fetch('http://localhost:8000/search',{
   method: 'POST',
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
   search:searchValue
   })
 })
 .then((response)=>response.json())
 .then((json)=>{
     console.log("helllo");
     setSearchData(json);
     console.log(json);
 });

  };

*/}

  useEffect(()=>{
  getCardData();
  });

  return (
    <div className="explore">
      <div className="exploreArea">

        <div className="searchArea">
          <img src={search}/>
          <input placeholder="Search your favourite dog" onChange={(event)=>{handleSearch(event);setSearchValue(event.target.value)}} value={searchValue} />
          <div style={{height:"20px",width:"20px",marginLeft:"5%"}} onClick={()=>{setFilter(true)}}><img src={filterImage} /></div>
        </div>

        {userId.length>1  && <div className="logout"><Link to="/"><div >Logut</div></Link></div>}

        <div className="dogsCard">
           {dogData && dogData.map((d)=>(
             <Card id={d._id} name={d.name} location={d.location} weight={d.weight} breed={d.breed} age={d.age}  amount={d.amount} />
           ))}
        </div>

        { filter &&  <div className="filterboxA">

           <div className="filterboxB">
                <div className="filterClose" onClick={()=>{setFilter(false)}}>X</div>
                <div style={{display:"flex",flexDirection:"row",width:"80%",justifyContent:"space-around"}}>
                   <div>Amount</div>
                   <img src={ascending} style={{width:"20px",height:"20px"}}/>
                   <img src={descending} style={{width:"20px",height:"20px"}}/>
                </div>
                <button className="filterSubmit">Set</button>
           </div>

        </div>}



      </div>
    </div>
  );
}
