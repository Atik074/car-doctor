import { CloseButton } from "react-bootstrap";

const BookingsRow = ({booking ,handledelete , handleUpdateBooking}) => {
    const {_id , customerName , email , service ,date , price ,status } = booking

   

    return (
        <div>
         <tr>
            <th>
            <button onClick={()=>handledelete(_id)} className="btn btn-sm btn-circle">
                <CloseButton ></CloseButton>
                </button> 
            </th>
           <td>{customerName}</td>
           <td>{email}</td>
           <td>{service}</td>
           <td>{date}</td>
           <td>{price}</td>
           <th>
            {
                status === 'confirm' ? <span className="fs-4">Confirmed</span>
                :      
                <button onClick={()=> handleUpdateBooking(_id)} className="btn btn-ghost btn-xs">please Confrim</button>

                 }
      
           </th>
        </tr>
        </div>
    );
};

export default BookingsRow;