import React, { useContext, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from 'react-router-dom';
import { todoContext } from '../../contexts/TodoContext';

const TodoList = () => {
    const {todos, getTodos, changeStatus, deleteTask, editTodo} =useContext(todoContext);
    // console.log(todos);


    useEffect(()=>{
    getTodos()
    }, [])   
    return (
        <div>
           {todos.map((item)=>(
               <Card border='primary' style={{width: '18rem'}} key={item.id}>
                <CardHeader className='d-flex justify-content-between align-itmes-center'>
                    <input type="checkbox" checked={item.status} onChange={()=>changeStatus(item.id)}/>
                    <span className={item.status? 'completed':''}>{item.task}</span>

                    <div>
                        <Button variant='danger' size='sm' onClick={()=> deleteTask(item.id)}>DELETE</Button>
                        <Link to="/edit">
                        <Button variant='warning' size='sm' onClick={()=> editTodo(item.id)}>EDIT</Button>
                        </Link>
                    </div>
                </CardHeader>
               </Card>
           ))}
        </div>
    );
};

export default TodoList;