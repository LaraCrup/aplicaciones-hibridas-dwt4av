import React from "react";

function ProductContainer(props){
    return(
        <div className="productContainer">
            {props.children}
        </div>
    )

}

export default ProductContainer;