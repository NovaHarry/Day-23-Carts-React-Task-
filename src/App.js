import './App.css';
import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const data = [
    {
      productName: "Fancy Product",
      price: "$40.00 - $80.00",
    },
    {
      productName: "Special Item",
      rating: "5 stars",
      strikeprice:"$20.00",
      rating:"bi-star-fill staricons",
      offerPrice: "$18.00",
      sale:"Sale"
    },
    {
      productName: "Sale Item",
      strikeprice: "$50.00",
      offerPrice: "$25.00",
      sale:"Sale"
    },
    {
      productName: "Popular Item",
      price: "$40.00",
      rating:"bi-star-fill staricons",
    },
    {
      productName: "Sale Item",
      strikeprice: "$50.00",
      offerPrice: "$25.00",
      rating: "No stars",
      sale:"Sale"
    },
    {
      productName: "Fancy Item",
      price: "$120.00 - $280.00",
      rating: "No stars",
    },
    {
      productName: "Special Item",
      strikeprice: "$20.00",
      offerPrice: "$18.00",
      rating:"bi-star-fill staricons",
      sale:"Sale"
    },
    {
      productName: "Popular Item",
      price: "$40.00",
      rating:"bi-star-fill staricons",
    },
  ];

  const [count, setCount] = useState(0)
  return (
    <div className="container">
      <div className="cart-value">
      <Button className='cartIcon button'>
      <i className="bi-cart-fill me-1"></i>
        <span>
          <Badge bg="dark" className="cartBadge rounded-pill">{count}</Badge>
        </span>
      </Button>
      </div>
      <div className='subdiv'>
          {data.map((prod, idx)=><Carts
            idx={idx}
            prod={prod}
            count = {count}
            setCount= {setCount}
          />)}
      </div>
    </div>
  );
}

export default App;

function Carts({prod,idx,count,setCount}){

  const [show , setShow] = useState(false);

  const [price , setStrike] = useState(false);

  function addToCart(){
    setShow(!show)
    setCount(count + 1)
  }

  function removeFromCart(){
    setShow(!show)
    setCount(count - 1)
  }
  return(
    <Card key = {idx} style={{ width: "18rem" }}>
      <div className="salebadge">{prod.sale}</div>
        <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
        <Card.Body>
          <Card.Title className='Title'>{prod.productName}</Card.Title>
          <Card.Text><i className={prod.rating}></i>
          <i className={prod.rating}></i>
          <i className={prod.rating}></i>
          <i className={prod.rating}></i>
          <i className={prod.rating}></i></Card.Text>
          <div className="price">
          <Card.Text><strike>{prod.strikeprice}</strike></Card.Text>
          <Card.Text>{prod.price}</Card.Text>
          <Card.Text>{prod.offerPrice}</Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className='footer'>
          {!show ? <Button className='button'
          onClick={addToCart}>Add item</Button> : ""}
          
          {show ? <Button className='button'
          onClick={removeFromCart}>Remove item</Button> : ""}      
          </Card.Footer>
      </Card>
  )
}
