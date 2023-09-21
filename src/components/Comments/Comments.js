import { useState } from "react"
import { Comment } from "../Comment/Comment"
import './Comments.css'

export const Comments = ({ data, setData, selected }) => {
    const [color, setColor] = useState('#000000')
    const [text, setText] = useState('')
    const submitForm = (e) => {
        e.preventDefault()
        setData(data.map((item) =>
            item.id === selected.id ? { ...item, comments: [...item.comments, { id: Date.now(), text, color }] } : item
        ))
        setText('')
        setColor('#000000')
    }
    return <div className="block comments">
        <h1>Comments {selected && `#${selected.id}`}</h1>
        {selected?.comments.map((item) => <Comment item={item} key={item.id} />)}
        <form onSubmit={submitForm}>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <textarea required value={text} onChange={(e) => setText(e.target.value)} placeholder="Type comment here..." name="comment" id="comment" cols={30}></textarea>
            <button type="submit">Add New</button>
        </form>
    </div>
}