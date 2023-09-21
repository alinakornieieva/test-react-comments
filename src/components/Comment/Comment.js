import './Comment.css'

export const Comment = ({ item }) => {
    return <div className="comment">
        <div style={{ backgroundColor: item.color, marginRight: '10px' }} className="square"></div>
        <pre>{item.text}</pre>
    </div>
}