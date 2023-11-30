
import React, { useEffect, useState } from 'react'
export default function Resturant() {
  
    let [resturants,setResturants]=useState([]);
  const getResturants=async()=>{
      let reponse=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
      let data= await reponse.json();
      setResturants(data.recipes);
  }
  useEffect(()=>{
       getResturants();
  },[])

  let [potato,setPotato]=useState([]);
const getPotato=async()=>{
    let repon=await fetch("https://forkify-api.herokuapp.com/api/search?q=potato");
    let dat= await repon.json();
    setPotato(dat.recipes);
}
useEffect(()=>{
     getPotato();
},[])
let [tomato,setTomato]=useState([]);
const getTomato=async()=>{
    let repo=await fetch("https://forkify-api.herokuapp.com/api/search?q=tomato");
    let datee= await repo.json();
    setTomato(datee.recipes);
}
useEffect(()=>{
     getTomato();
},[])
return(
  <div className='row'>
    <h1 className='text-center bg-danger'>THIS IS PIZZA</h1>
      {
          resturants.map((ele)=>{
              return <div className='col-md-4' key={ele.id}>
                  <h2>{ele.title}</h2>
                  <img src={ele.image_url} className='img'/>
              </div>
          })
      }
      <h1 className='text-center bg-danger '>THIS IS Potato</h1>
    {
        potato.map((ele)=>{
            return <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='img'/>
            </div>
        })
    }

<h1 className='text-center bg-danger '>THIS IS tomato</h1>
    {
        tomato.map((ele)=>{
            return <div className='col-md-4' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='img'/>
            </div>
        })
    }
  </div>
  )


}



