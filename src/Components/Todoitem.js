import React from 'react'

export const Todoitem = (props) => {
  return (
      <div>
         {props.items.map((listItems, key) => {
                return (
            <div className={`todo-list  ${key}`} >
          <ul className="list-group list-group-flush">
                <li className="list-group-item"></li>
                {`Nomer Kegiatan: ${listItems.id} `}
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={listItems.completed } id="todo-item-check-3" />
                    <label className="form-check-label" htmlFor="todo-item-check-3">{listItems.text }</label>
                    <label className="form-check-label" htmlFor="todo-item-check-3"></label>
              </div>
          </ul>
        </div>
                )
            }) }   
    </div>
  )
}
