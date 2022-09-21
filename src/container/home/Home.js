import React, { lazy, Suspense, useState } from 'react'
import Footer from '../../components/footer/Footer';
import FormGroup from '../../components/form-group/FormGroup';
import Header from '../../components/header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/button/Button';
import { List } from '../../components/list/List';
import ViewTodo from '../../components/view-todo/ViewTodo';


export default function Home(props) {
  const [todoTitle, setTodoTitle] = useState(null);
  const [todos, setTodos] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null)

  const addTodo = () => {
    if(todoTitle==null || todoTitle=='') {
      alert('Enter todo title then hit the save button!');
      return 0;
    }
    setTodos([...todos, {id: 'todo'+Math.random(), title: todoTitle}]);
    setTodoTitle('');
  }

  const deleteItem = id => {
    setTodos(todos.filter(item=> item.id!=id));
  }
  const viewTodo = id => {
    setSelectedItem(()=> todos.find(item => item.id === id), console.log(selectedItem));
  }

  const handleKeyPress =(e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  }

  return (
    <>
        <Header />
        <main>
            <h2>
                main content
            </h2>
            <FormGroup onKeyUp={handleKeyPress} name="todoInput" placeholder="Enter todo text" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value) } />
            
            <Button onClick={()=>addTodo()}>Add todo</Button>

            <hr />

            <div style={{ overflow: 'hidden', paddingLeft: '10px'}}>
              <div style={{width: '500px', float: 'left'}}>
               
                <List type="ol" close viewItem selectedItem={selectedItem} deleteItem={(id)=>deleteItem(id)} viewTodo={(id)=>viewTodo(id)} items={todos} />
              </div>
              <div style={{width: '500px', float: 'left'}}>
                {selectedItem?<button onClick={()=>setSelectedItem(null)}>close todo</button>:''}
                {selectedItem?<ViewTodo todo={selectedItem} />:''}
              </div>
            </div>
            
        </main>

        <Footer />
    </>
  )
}
