import React from 'react'
import "./card.css";
function CompCombo({jsonData,onCompSel}) 
{
    //alert(JSON.stringify(jsonData))
    let allComp=jsonData.map((obj)=>obj.company);
    let uniqueComp=[...new Set(allComp),"others"];
    //alert(uniqueComp);

  return (
   
    <div className='combo'>
           <select onChange={(event)=>onCompSel(event.target.value)}>
              Companies  <option value="none">Select</option>
              {
                uniqueComp.map((str,ind)=> <option key={ind} value={str}>{str}</option>)
              }

            </select> 
    </div>

  )
}

export default CompCombo;