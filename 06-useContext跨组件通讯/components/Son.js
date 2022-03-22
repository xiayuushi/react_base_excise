import { Context } from '../App'
import { useContext } from 'react'

const Son = () => {
  const xxx = useContext(Context)
  console.log(xxx)
  return (
    <div style={{ border: '1px solid #0094ff' }}>
      <h2>当前是Son组件的内容: -- {xxx}</h2>
    </div>
  )
}

export default Son
