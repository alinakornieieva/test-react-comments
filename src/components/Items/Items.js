import { useState } from 'react'
import { Item } from '../Item/Item'
import './Items.css'

export const Items = ({ data, setData, selected, setSelected }) => {
    const [name, setName] = useState('')
    const enterName = (e) => {
        e.preventDefault()
        setData([...data, { id: Date.now(), name, comments: [] }])
        setName('')
    }
    return <div className="block items">
        <h1>Items</h1>
        <form onSubmit={enterName}>
            <input value={name} required placeholder='Type name here...'
                onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" />
            <button type='submit'>Add New</button>
        </form>
        {data?.map((item) => <Item item={item} key={item.id} data={data} setData={setData}
            selected={selected} setSelected={setSelected} />)}
    </div>
}