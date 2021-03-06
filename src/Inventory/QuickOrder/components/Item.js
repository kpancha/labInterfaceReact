import React from 'react'

function Item(props) {
    return (
        <div className = "input">
            <h3 className = "label">Item</h3>
            <select 
                id = "item"
                name = "item_id" 
                value = {props.item_id}
                onChange = {props.handleChange}
            >
                {props.items.map(item => (
                    <option 
                        key = {item.value} 
                        value = {item.value}
                    >
                        {item.display}
                    </option>))}
            </select>
        </div>
    )


}

export default Item