import React, { useState } from 'react';
import InputForm from './Components/InputForm';
import ItemsList from './Components/ItemsList';
import ItemListTwo from './Components/ItemListTwo';
import ItemListThree from './Components/ItemListThree';

function App() {
  const [orderList, setOrderList] = useState([]);
  const [tableValue, setTableValue] = useState('');

  const reqSelected = (selectedTable) => {
    setTableValue(selectedTable)
  }

  const addOrdersHandler = (orderData) => {
    setOrderList((prevOrders) => {
      return [...prevOrders, {
        uniqueid: orderData.uniqueid,
        price: orderData.price,
        item: orderData.item,
        table: orderData.table,
        id: Math.random().toString()
      }]
    })
  }

  return (
    <div>
      <InputForm selected={reqSelected} onSubmittingForm={addOrdersHandler}></InputForm>
      <h3>ORDERS</h3>
      <h4>Table 1</h4>
      {tableValue === 'Table1' && <ItemsList ordersData={orderList}></ItemsList>}
      <h4>Table 2</h4>
      {tableValue === 'Table2' && <ItemListTwo ordersData={orderList}></ItemListTwo>}
      <h4>Table 3</h4>
      {tableValue === 'Table3' && <ItemListThree ordersData={orderList}></ItemListThree>}
    </div>
  );
}

export default App;
