import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';
export default function FormProductData() {
        const [formData, setFormData] = useState({
                name:"",
                img:"",
                cost:0
        })
        const sumbitForm=(e)=>{
                axios.post('http://localhost:5000/newProduct',formData)
        }
  return (
        <Form className="w-50 m-auto" >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Shoes Name</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setFormData({ ...formData, name:e.target.value })}} placeholder="Enter product name" />
            
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image url</Form.Label>
            <Form.Control type="text" onChange={(e)=>{setFormData({ ...formData, img:e.target.value })}}  placeholder="url" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cost</Form.Label>
            <Form.Control type="number" onChange={(e)=>{setFormData({ ...formData, cost:e.target.value })}}  placeholder="Eg: 4500" />
          </Form.Group>
          
          <Button variant="primary" onClick={sumbitForm} >
            Submit
          </Button>
          
        </Form>
  )
}