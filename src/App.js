import { useEffect, useState } from 'react'
import { Title } from './components/Title/Title'
import { Items } from './components/Items/Items'
import { Comments } from './components/Comments/Comments'
import './App.css'

const App = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || [{ id: 1, name: 'Name 1', comments: [{ id: 3456, color: '#ae3737', text: 'Commment 1' }, { id: 7890, color: '#003707', text: 'Comment 2' }] }])
  const [selected, setSelected] = useState(JSON.parse(localStorage.getItem('selected')) || data[0])
  useEffect(() => {
    setSelected(data.find((el) => el.id === selected.id) || data[0])
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])
  useEffect(() => {
    localStorage.setItem('selected', JSON.stringify(selected))
  }, [selected])
  return <div className='app'>
    <Title />
    <div className='main-blocks'>
      <Items data={data} setData={setData} selected={selected} setSelected={setSelected} />
      <Comments data={data} setData={setData} selected={selected} setSelected={setSelected} />
    </div>
  </div>
}

export default App
