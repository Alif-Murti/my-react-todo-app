import React from "react";
import Todolist from "./Todolist"

function App() {

  const items = [
    {
      id: 1,
      text: 'Membuang sampah',
      completed: false
    },
    {
      id: 2,
      text: 'Membuat roti',
      completed: false
    },
    {
      id: 3,
      text: 'Belajar React',
      completed: false
    }
  ];

 
  const title = 'Things to do';
  
  return (
    <div className="container">
     
        <div>
        <div className="row">
          
            <Todolist items={items} title={title }/>
      </div>  
        </div>
      
      
    </div>
  )
}

export default App;
