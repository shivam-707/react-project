import './App.css'
import Form from './form.jsx';
import Counter from './Counter.jsx'
import LikeButton from './LikeButton.jsx'

function App() {
  return (
    <>
      <Counter />
      <h3>States in React</h3>
      <LikeButton />
      <div>
        <Form />
      </div>
    </>
  )
}

export default App
