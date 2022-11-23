import React, { useState } from 'react'
import '../assets/css/style.css'
import Bin from '../assets/img/Bin.svg'
import CheckboxOff from '../assets/img/Checkbox_Off.svg'
import CheckboxOn from '../assets/img/Checkbox_On.svg'

function App() {
    let [show, setShow] = useState(false)
    let [newID, setNewID] = useState(1);
    let [todoList,setTodoList] = useState([{'id': 1, 'name':'Andare al Supermercato'}]);
    const [add, setAdd] = useState(false);
    const [newtodo, setNewtodo] = useState('');
    return (
        <div className='app-surface'>
            <div className='todo-list'>
                {
                add ? 
                    '' : 
                    <div>
                        <h1>TODO LIST</h1>
                        <ul>
                            { todoItems() }
                        </ul>
                        <div className='add-button'>
                            <button onClick={visibleAdd}>ADD</button>
                        </div>
                    </div>
                }
                {
                add ? 
                    <div>
                        <input type="text" onChange={e => setNewtodo(e.target.value)}/>
                        <div className='add-button'>
                            <button onClick={addToArray}>ADD</button>
                        </div>
                    </div> 
                : ''
                }
            </div>
        </div>
    );
    function todoItems(){
        return todoList.map(todo => (
            <li key={todo.id}>
                <img className='bin' onClick={() => setTodoList(todoList.filter(a => a.id !== todo.id))} src={ Bin } alt="Bin" />
                <img className='checkbox' onClick={() => setShow(!show)} src={ CheckboxOff } alt="Checkbox" />
                <span className={ show ? 'show' : '' }>{todo.name}</span>
            </li>
        ));
    }
    function visibleAdd(){
        setAdd(!add);
    }
    function addToArray(){
        setNewtodo('');
        console.log(newID);
        setTodoList([...todoList,{'id': newID + 1, 'name':newtodo}]);
        setNewID(newID + 1);
        setAdd(!add);
    }
}

export default App;