import React, { useState } from 'react';

import JsonArray from "./data";
import "./card.css";
import Card from './Card';
import CompCombo from './CompCombo';

function ShowCards() {
    
    let [jsonArrayData,setJsonData]=useState(JsonArray);
    function doLike()

    {
        alert("Liked");
    }
    function doLike2()
    {
        alert("Liked2");
    }

    function doLikeWithId(itemid)
    {
        alert("Liked "+itemid);
    }

   function doRenderCard(obj,index)
    {
        //return <Card path={obj.path} company={obj.company} price={obj.price} owner={obj.owner}></Card>
        return <Card key={index} {...obj} fx={doLike} fx2={doLike2} fxWithId={doLikeWithId}> {obj.details}</Card>
    }

    //------------Combos======
    function showSelComp(selComp)
    {
        // alert(selComp);
        if(selComp=="others")
        {
            setJsonData(JsonArray);    
            return;
        }
        let filteredJson=JsonArray.filter((obj)=>obj.company===selComp)
        setJsonData(filteredJson);

    }
  
  return (
    <div className='full-page'>
    <CompCombo  jsonData={JsonArray} onCompSel={showSelComp}></CompCombo>
    <div className='outer'>
           {
            /*jsonArrayData.map((obj,index)=>{
                    return <Card key={index}></Card>
            })*/
            
            //jsonArrayData.map((obj,index)=><Card key={index}></Card>)

            jsonArrayData.map(doRenderCard)
           }
    </div>
    </div>
  )
}

export default ShowCards;