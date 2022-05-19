import React from 'react'
import { Header } from './Header'
import { Todoitem } from './Todoitem'

const Todolist = ({ items, title}) => {
    return (
        <div>
            <Header title={title} />
            <Todoitem items={items}/>
        </div>
  )
}

export default Todolist

