import { useLoaderData } from "react-router-dom";

const BookService = () => {
    const service = useLoaderData()
    const {title , price, img } = service

    const handleBookService =(event) =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value 
        const number = form.number.value 
        const date= form.date.value 
        const price = form.price.value 
        const booking ={
              name ,
             title,
             img,
            number : number ,
            date : date ,
            price : price , }
        console.log(booking)

        fetch('http://localhost:5000/bookings' , {
            method: 'POST',
            headers:{
                'content-type':'application/json' },

            body:JSON.stringify(booking)

         })
         .then(res => res.json())
         .then(data =>{
           console.log(data)
           if(data.insertedId){
            alert('successully added in mongo')
           }
         })


    }


    return (
        <div className="bg-secondary p-5 m-5 rounded">
        <h2 className="text-info">Book Service: {title}</h2> 
  
       <form onSubmit={handleBookService}>
          <div className="d-flex gap-5 text-white fs-5">
      <div className="form-group w-50 mb-3">
        <label >First Name</label>
       <input type="name" name="name"  className="form-control mb-3" id="exampleInputEmail1"   aria-describedby="emailHelp" placeholder="First Name"/>
       <label>Phone Number</label>
      <input type="number" name="number" className="form-control" id="exampleInputPassword1" placeholder="Your Phone"/>
       </div>
    
     <div className="form-group w-50 mb-3">
         <label>Date</label>
      <input type="date" name="date" className="form-control" id="exampleInputPassword1" placeholder="date"/>
      <label>Due amount</label>
       <input type="text" name="price"  defaultValue={'$' + price}  className="form-control mb-3" id="exampleInputEmail1"   aria-describedby="emailHelp" placeholder="Last Name"/>
      
      </div>
  </div>
    
   
      <input className="bg-danger text-white border-0 p-2 w-100 fs-4 rounded" type="submit" value="order confirm" />
      </form>
  
          </div>
    );
};

export default BookService;