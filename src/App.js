import { Title } from './components/Title/Title'
import './App.css'
import { Items } from './components/Items/Items'
import { Comments } from './components/Comments/Comments'

const App = () => {
  return <div className='app'>
    <Title />
    <div className='main-blocks'>
      <Items />
      <Comments />
    </div>
  </div>
}

export default App
