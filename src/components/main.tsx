import React, { useState } from 'react'
import '../assets/css/style.css'
import Bin from '../assets/img/Bin.svg'
import CheckboxOff from '../assets/img/Checkbox_Off.svg'
import CheckboxOn from '../assets/img/Checkbox_On.svg'
import Add from '../assets/img/Adds.svg'

function App() {
    let [newID, setNewID] = useState(0);
    let [todoList,setTodoList] = useState([{'id': 0, 'name':'Andare al Supermercato', 'done': false}]);
    const [add, setAdd] = useState(false);
    const [newtodo, setNewtodo] = useState('');
    return (
        <div>
            <div className='todo-list'>
                {
                add ? 
                    '' : 
                    <div>
                        <div className='app-surface'>
                            <h1>TODO</h1>
                            <ul>
                                { todoItems() }
                            </ul>
                        </div>
                        <div className='add-button'>
                            <button onClick={visibleAdd}><img className='add' src={ Add } alt="add" /><span>Nuova Voce</span></button>
                        </div>
                    </div>
                }
                {
                add ? 
                    <div className='add-section'>
                        <div className='save'>
                            <input className='input' type="text" onChange={e => setNewtodo(e.target.value)}/>
                            <div className='add-button'>
                                <button onClick={addToArray}> <span>Salva</span></button>
                            </div>
                        </div> 
                    </div>
                : ''
                }
            </div>
        </div>
    );
    function todoItems(){
        return todoList.map((todo,index) => (
            <li key={todo.id}>
                <img className='bin' onClick={() => setTodoList(todoList.filter(a => a.id !== todo.id))} src={ Bin } alt="Bin" />
                <img className='checkbox' src={ changeImage(index) } onClick={(e) => changeStatus(index)} alt="" />
                <span className={`${todo.done ? 'show' : ''}`}>{todo.name}</span>
            </li>
        ));
    }
    function visibleAdd(){
        setAdd(!add);
    }
    function addToArray(){
        setNewtodo('');
        console.log(newID);
        setTodoList([...todoList,{'id': newID + 1, 'name':newtodo, 'done':false}]);
        setNewID(newID + 1);
        setAdd(!add);
    }
    function changeStatus(id: number){
        todoList[id].done = !todoList[id].done;
        setTodoList([...todoList]);
        console.log(todoList[id].done);
    }
    function changeImage(id: number){
        if(todoList[id].done){
            return CheckboxOn;
        }else{
            return CheckboxOff;
        }
    }
}

export default App;