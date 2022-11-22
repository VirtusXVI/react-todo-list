import React from 'react';
import '../assets/css/style.css'
import Bin from '../assets/img/Bin.svg'
import Checkbox from '../assets/img/Checkbox_Off.svg'

function App() {
    let todoList = [{'name': 'Andare al Supermercato'},{'name': 'Andare a Casa'}];
    let add: boolean = false;
    return (
        <div className='app-surface'>
            <div className='todo-list'>
                <div>
                    <h1>TODO LIST</h1>
                    <ul>
                        { todoItems() }
                    </ul>
                </div>
                <div className='add-button'>
                    <button onClick={visibleAdd}>ADD</button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
    function todoItems(){
        const listItems = todoList.map((d) => 
        <li key={d.name}>
            <img className='bin' src={ Bin } alt="Bin" />
            <img className='checkbox' src={ Checkbox } alt="Checkbox" />
            {d.name}
        </li>);
        return listItems;
    }
    function visibleAdd(){
        add = !add;
    }
}

export default App;
