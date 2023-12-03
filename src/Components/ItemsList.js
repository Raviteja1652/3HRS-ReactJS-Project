import React from "react";

const ItemsList = (props) => {
    return(
        <div>
            <ul>
                {props.ordersData.map(order => (
                    <>
                    <li key={order.id}>{order.price}-{order.item}-{order.table}</li>
                    <button>Delete Order</button>
                    </>
                ))}
                
                
            </ul>
            
        </div>
    )
};

export default ItemsList;