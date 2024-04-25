import { useState, useEffect } from "react";
import axios from "axios";
import ProCard from "./cards";
// hooks: manipulate date in react js
function CardContainer() {
        const [product, setProduct] = useState([])

        async function fetchdata(){
                const response =await axios('http://localhost:5000/');
                setProduct(response.data)
        }
        useEffect(fetchdata,[])


        return (
                <div className="container d-flex flex-wrap gap-5 justify-content-center">
                {
                        product.map(v=>{
                                return <ProCard key={v.name} data={v}/>
                        })
                }
                        
                </div>
        )
}

export default CardContainer;