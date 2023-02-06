import React, { createContext, useState } from 'react';
import Category from './Components/Category/Category';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';

export const CategoryContext = createContext();

const App = () => {

    const [category, setCategory] = useState("Laptop");
    return (
        <CategoryContext.Provider value={[category,setCategory]}>
            <p>Count value : {category}</p>

            <Header></Header>
            <Home></Home>
            <Shipment></Shipment>
            <Category></Category>
            
        </CategoryContext.Provider>
    );
};

export default App;