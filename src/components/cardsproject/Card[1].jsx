import React from 'react'
import Tag from './Tag.jsx'
import Out from './Out.jsx'


function Card({Name,Stream,Year,Pic,fx,fx2,promoted}) {
  return (
    <div>
    
    <a class="p-6 max-w-xs border border-black-200 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col"
    href="#">
    <div class="border-2 ">
   {
        promoted=="true"?<Tag status={promoted}></Tag>:<Out></Out>
    
   }
    {
      //  promoted=="true"&&<Tag status={promoted}></Tag>
    
   }
   
    <img src={Pic} class="shadow rounded-lg overflow-hidden border h-sm" />
    </div>
    <div class="mt-8">
        <h4 class="font-bold text-xl">{Name}</h4>
        
        <p class="mt-2 text-gray-600">{Stream}
        </p>
        <div class="mt-5">
            <button type="button" onClick={()=>fx2(Name)} class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Like</button>
        </div>
    </div>
    </a>      
       
    </div>
  )
}

export default Card