import { useState } from 'react'
import { Title } from './components/Title/Title'
import { Items } from './components/Items/Items'
import { Comments } from './components/Comments/Comments'
import './App.css'

const App = () => {
  const [data, setData] = useState([{ id: 1, name: 'Name 1', comments: [{ id: 3456, color: '#ae3737', text: 'Commment 1' }, { id: 7890, color: '#003707', text: 'Comment 2' }] }])
  return <div className='app'>
    <Title />
    <div className='main-blocks'>
      <Items data={data} setData={setData} />
      <Comments />
    </div>
  </div>
}

export default App
