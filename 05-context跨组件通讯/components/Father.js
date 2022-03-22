import Son from './Son'

const Father = () => {
  return (
    <div style={{ border: '1px solid #f00', padding: 100 }}>
      <h1>当前是Father组件的内容</h1>
      <Son></Son>
    </div>
  )
}

export default Father
