import { Consumer } from '../App'

const Son = () => {
  return (
    <Consumer>
      {(val) => (
        <div style={{ border: '1px solid #0094ff' }}>
          <h2>当前是Son组件的内容: -- {val}</h2>
        </div>
      )}
    </Consumer>
  )
}

export default Son
