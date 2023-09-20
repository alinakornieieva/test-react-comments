import { useState } from 'react'
import './Items.css'

export const Items = ({ data, setData }) => {
    const [name, setName] = useState('')
    const enterName = (e) => {
        e.preventDefault()
        setData((prev) => [...prev, { id: Date.now(), name, comments: [] }])
        setName('')
    }
    const deleteItem = (id) => {
        setData((prev) => prev.filter((item) => item.id !== id))
    }
    return <div className="block items">
        <h1>Items</h1>
        <form onSubmit={enterName}>
            <input value={name} required
                onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" />
            <button type='submit'>Add New</button>
        </form>
        {data?.map((item) => <div key={item.id} className='item active-item'>
            <span>{item.name}</span>
            <div>
                <span className='amount'>{item.comments.length}</span>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
        </div>)}
    </div>
}