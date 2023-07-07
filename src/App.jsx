import { useEffect, useState } from "react";
import AllserviceCards from "./Components/Allservice/AllserviceCards";





const App = () => {
  const [services , setServices] = useState([])

  

  useEffect(( )=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data =>{
      console.log(data)
      setServices(data)
    })
  },[])

  return (
    <div className="p-5"  style={{display:'grid', gridTemplateColumns:"repeat(3,1fr)", gap:"20px"}}>
   { 
      services.map(service =><AllserviceCards
        key={service._id}
        service={service}
        >
  
        </AllserviceCards>)

   
    
   }

    </div>
  )
};

export default App;