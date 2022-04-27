import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { todoContext } from '../../contexts/TodoContext';

const AddTodo = () => {
    const [inpValue, setInpValue] =useState('');
    const {addTask} = useContext(todoContext);
    function handleClick(){
        let newObj = {
            task: inpValue,
            status: false,
        };
        addTask(newObj)
        setInpValue('')
    }
    
    return (
        <div className='d-flex m-3'>
            <Form.Control 
            type='text' 
            placeholder='add todo' 
            className='w-25' 
            value={inpValue} 
            onChange={(e)=> setInpValue(e.target.value)}
            />
            <Button variant='warning' onClick={handleClick}>Add</Button>
        </div>
    );
};

export default AddTodo;