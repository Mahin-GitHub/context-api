import React from 'react';

const CategoryDetail = (props) => {

    const {name,category} = props.product;
    
    return (
        <div>
            <h4>This is your Details</h4>
            <h4>Selelct Product : {name}</h4>
            <h4>Select Category : {category}</h4>
            
        </div>
    );
};

export default CategoryDetail;