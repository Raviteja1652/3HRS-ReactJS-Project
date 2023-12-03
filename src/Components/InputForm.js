import React, { useState } from "react";

const InputForm = (props) => {
    const [enteredID, setEnteredID] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredItem, setEnteredItem] = useState('');
    const [selectedTable, setSelectedTable] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        const orderData = {
            uniqueid: enteredID,
            price: enteredPrice,
            item: enteredItem,
            table: selectedTable
        };
        props.onSubmittingForm(orderData);
        props.selected(orderData.table)
        // console.log(orderData)
        // setEnteredID('');
        // setEnteredPrice('');
        // setEnteredItem('');
        localStorage.setItem(`${orderData.uniqueid}`, JSON.stringify(orderData))
    }

    const idChangeHandler = (e) => {
        setEnteredID(e.target.value)
    }
    const priceChangeHandler = (e) => {
        setEnteredPrice(e.target.value)
    }
    const itemChangeHandler = (e) => {
        setEnteredItem(e.target.value)
    }
    const tableChangeHandler = (e) => {
        setSelectedTable(e.target.value)
    }
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="uniqueID">Choose a unique ID: </label>
                    <input type="number" id="uniqueID" onChange={idChangeHandler}></input>
                </div><br></br>
                <div>
                    <label htmlFor="price">Choose Price: </label>
                    <input type="number" id="price" onChange={priceChangeHandler}></input>
                </div><br></br>
                <div>
                    <label htmlFor="item">Choose Item: </label>
                    <input type="text" id="item" onChange={itemChangeHandler}></input>
                </div><br></br>
                <div>
                    <label htmlFor="table">Choose a Table</label>
                    <select id="table" onChange={tableChangeHandler}>
                        <option value='Table1'>Table 1</option>
                        <option value='Table2'>Table 2</option>
                        <option value='Table3'>Table 3</option>
                    </select>
                </div><br></br>
                <button type="submit" onClick={submitHandler}>Confirm</button>
            </form>
        </div>
    )

};

export default InputForm;