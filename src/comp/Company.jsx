import React, { useEffect,useState } from 'react'

function Company() {
    var[items,setItems]=useState([])
        useEffect(()=>{
            getItems()

        },[])
    

    async function getItems(){
        const data = await fetch("https://fakestoreapi.com/products")
        const variable = await data.json()
        setItems(variable)
    }
  return (
    <div>
        {
            console.log(items)
        }
        {
            items.map((list=>(
                <div>
                    <h1>
                        {list.title}
                    </h1>
                    
                </div>
            )))
        }
    </div>
  )
}

export default Company