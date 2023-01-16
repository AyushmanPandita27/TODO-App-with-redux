import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, clearTodo } from "../actions/action";
import '../App.css';
const Todo = ()=>
{
    const [data, setData]= useState("");
    const handler = (e)=>{
        const st = e.target.value;
        setData(st);
    }
const dispatch = useDispatch();
const item = useSelector((event)=>event.TodoReducer.list);

    return(
        <div className="App">
  <div className='child-div'></div>
      <figure>
      <figcaption>todo app</figcaption>
      </figure>

<div className='add-items'>
  <input type='text' placeholder='Add Items...' onChange={handler} value={data}/>
  
  <button className='fa fa-plus add-btn' onClick={()=>dispatch(addTodo(data), setData(''))}> click to add </button>
</div>

<div className='show-items'>
{item.map((itr)=>{
return(
    <div className='eachItem-div' key ={itr.id}>
       <h3>{itr.data}</h3>
    <button className='fa fa-plus add-btn' onClick={()=>dispatch(deleteTodo(itr.id))}> delete </button>
        </div>
);
})}

  
</div>
<div className='fa'>
<button  onClick={()=>dispatch(clearTodo())}> clear All </button>
</div>
        </div>
    );
}

export default Todo