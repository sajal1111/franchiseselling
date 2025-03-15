import React from 'react';
import "./card.css";

function Card({id,company:comp,owner,price,path,children,fx,fx2,fxWithId}) {

    function doCallLike2()
    {
        console.log("Lied2")
        fx2();
        //fx();
    }

    function doIndirect(id)
    {
            fxWithId(id);
    }
    return (
      <div className='box'>
         <center>
          <img src={path} width={100} height={100} alt="" />
         </center>
         <hr />
          <h3>{comp}</h3>
          <p>{price}</p>
          <p>{owner}</p>
          <p>Details: <br />
          {children}
          </p>
         
            <center>  
                {/* for single statement */}
                <input type="button" value="Like It" onClick={fx} />
                <input type="button" value="Like It" onClick={()=>fx()} />
                {/* For Multiple statements */}
                <input type="button" value="Like It 2" onClick={doCallLike2} />

                <input type="button" value="Like It with Send Id to Parent" onClick={()=>doIndirect(id)} />
                <br />
                <input type="button" value="Like It with Send Id to Parent" onClick={()=>fxWithId(id)} />

            
            </center>
  
      </div>
    )
  }
/*function Card(obj) {
  return (
    <div className='box'>
       <center>
        <img src={obj.path} width={100} height={100} alt="" />
       </center>
       <hr />
        <h3>{obj.company}</h3>
        <p>{obj.price}</p>
        <p>{obj.owner}</p>
        <p>Owner</p>
       
          <center>  <input type="button" value="Details" /></center>

    </div>
  )
}*/

export default Card