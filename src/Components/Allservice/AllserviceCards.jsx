import {Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

 
 const AllserviceCards = ({service}) => {
    const {_id , title,img,price} = service
    return (
     
   <Card  className="border-4 p-3">
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
         <p> Price : ${price} </p>
          </Card.Text>
        </Card.Body>
        <Link to={`book/${_id}`}>
           <Button>Book now</Button>
        </Link>
          
      </Card>
  
     

    );
 };
 
 export default AllserviceCards;

  