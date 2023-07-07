import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import BookingsRow from "./BookingsRow";


const Bookings = () => {
    // step 01:
    // const {user} = useContext(AuthContext);
    //  ei user ta url a dynamically use koro...  const url =`http://localhost:5000/bookings?email=${user.email}`
    
    const [bookings , setBookings] = useState([]) ;
 const url =`http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setBookings(data)
        })
        
    },[]) ;

    const handledelete =(id)=>{
        const procced = confirm('Are you want to sure delete  it ??')
        if(procced){
            fetch(`http://localhost:5000/bookings/${id}` , {
                method:"DELETE" ,
                headers:{
                    'content-type':'application/json'
                }

            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                   alert('successfully delete')
                   const remaining = bookings.filter(booking => booking._id ==! id)
                   setBookings(remaining)
                }
            })


        }


    }

    // handle update data  by put 

    const handleUpdateBooking = id =>{
        fetch(`http://localhost:5000/bookings/${id}` , {
            method:"PUT" ,
            headers:{
                'content-type':'application/json'
            } ,
            body:JSON.stringify({status: "confirm"})
            })
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount >0){
                alert('update successfull')
                // update 
                const remaining = bookings.filter(booking => booking._id !== id )
                const latestUpdate = bookings.find(booking => booking._id  === id)
                latestUpdate.status = 'confirm'
                const newBooking = [latestUpdate , ...remaining]
                setBookings(newBooking)
            }
        })
    }
 
    return (
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
       {
        bookings.map(booking =><BookingsRow
        key={booking._id}
        booking={booking}
        handledelete ={handledelete}
        handleUpdateBooking ={ handleUpdateBooking}
        >

        </BookingsRow>)
       }
    
      </tbody>
    </Table>
    );
};

export default Bookings;