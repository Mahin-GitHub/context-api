import React, { useContext, useEffect, useState } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { CategoryContext } from './../../App';


const allProducts = [
    {name:'Lenovo', category:'Laptop'},
    {name:'Asus', category:'Laptop'},
    {name:'Dell', category:'Laptop'},
    {name:'Samsung', category:'Mobile'},
    {name:'Nokia', category:'Mobile'},
    {name:'Symphoney', category:'Mobile'},
    {name:'Nikon', category:'Camera'},
    {name:'Canon', category:'Camera'},
    {name:'Sony', category:'Camera'},
]

const Category = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        console.log({category});
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);
        
    },[category])
    return (
        <div>
            <h2>Select Your Category : {category}</h2>
            {
                products.map(pd =><CategoryDetail product = {pd}></CategoryDetail>)
            }

            
        </div>
    );
};

export default Category;