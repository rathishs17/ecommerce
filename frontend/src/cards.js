import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProCard({ data }) {
  const deleteProduct = (name) => {
     axios.delete(`http://localhost:5000/deleteProduct/${name}`)
     .then(()=>{console.log('deleted');})
     .catch(()=>{console.log('Could not delete it');})
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" height="300px" src={data.img} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <div>
          <Button variant="primary" className="me-4">Add to Cart : {data.cost}</Button>
          <Button variant="danger" onClick={() => deleteProduct(data.name)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProCard;