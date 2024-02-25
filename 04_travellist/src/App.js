import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/Packing";
import Stats from "./Components/Stats";




function App() {
  const [items,setItems]= useState([]);
  function handleAddItems(item){  
    setItems((items)=>[...items,item])
  }
  function handleDelete(id){
    setItems(items=>items.filter(item=>item.id !==id))
  }
  function handletoggleitem(id){
    setItems((items)=>items.map((item)=>item.id===id ? {...item,packed: !item.packed}: item))
  }
  function deleteAll(){
    const confirm = window.confirm('Are you sure you want to delete all items')

    if(confirm)setItems([])
  }
  return (
    <>
      <Logo />
      <Form onAddItems = {handleAddItems}/>
      <PackingList items = {items} onDeleteItems = {handleDelete} onToggleitem = {handletoggleitem} deleteAll= {deleteAll} />
      <Stats  items={items}/>
    </>
  )

}





export default App;
