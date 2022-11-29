import React,{useState} from 'react'

const Basic1 = (props) => {
  const clickHandler = () => {
    console.log('clicked')
  }

const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => {setCount(prevCount=>prevCount+1); setCount(prevCount=>prevCount+1);} }>Count {count}</button>

      <h1>Hello { props.name }</h1>
      <h1>Hello React2</h1>
    </>
  )
}

export default Basic1
