import './Item.css'

export const Item = ({ item, data, setData, selected, setSelected }) => {
    const deleteItem = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const clickOnItem = (id) => {
        setSelected(data.find((el) => el.id === id))
    }
    return <div onClick={() => clickOnItem(item.id)} className={`item ${selected?.id === item.id && 'active-item'}`}>
        <span>{item.name}</span>
        <div>
            <span className='amount'>{item.comments.length}</span>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
    </div>
}