import './index.css'
import Header from './Header'
import Items from './Items'

function App(props) {
  const hooks = [
    {
      id: 'e1',
      title: 'ReactDOM',
      stage: 'basic',
    },
    {
      id: 'e2',
      title: 'React HOOKS',
      stage: 'Inter',
    },
    {
      id: 'e3',
      title: 'Testing',
      stage: 'Advanced',
    },
  ]

  return (
    <div>
      <Header advanced="et döner" />
      <Items items={hooks} />
    </div>
  )
}

export default App
