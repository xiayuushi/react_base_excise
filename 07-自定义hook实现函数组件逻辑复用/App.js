import { useMouse, useScroll } from './utils/XxxHooks'

const App = () => {
  const { x, y } = useMouse()
  const { scrollLeft, scrollTop } = useScroll()
  return (
    <div style={{ width: 2000, height: 2000 }}>
      <h1>
        鼠标的位置：x:{x}-y:{y}
      </h1>
      <h1>
        鼠标滚动位置：left:{scrollLeft} - top:{scrollTop}
      </h1>
    </div>
  )
}

export default App
