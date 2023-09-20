import { useState } from 'react'
import './Items.css'

export const Items = () => {
    const [name, setName] = useState('')
    const enterName = (e) => {
        e.preventDefault()
        console.log(name)
    }
    return <div className="block items">
        <h1>Items</h1>
        <form onSubmit={enterName}>
            <input value={name} required
                onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" />
            <button type='submit'>Add New</button>
        </form>
        <div className='item active-item'>
            <span>name 1</span>
            <div>
                <span className='amount'>3</span>
                <button>Delete</button>
            </div>
        </div>
        <div className='item'>
            <span>name 1</span>
            <div>
                <span className='amount'>3</span>
                <button>Delete</button>
            </div>
        </div>
    </div>
}