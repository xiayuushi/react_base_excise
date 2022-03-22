import React from 'react'
import XxxHeader from './components/XxxHeader'
import XxxList from './components/XxxList'
import XxxFooter from './components/XxxFooter'
import './styles/app.css'

const App = () => {
  return (
    <section className="todoapp">
      <XxxHeader></XxxHeader>
      <XxxList></XxxList>
      <XxxFooter></XxxFooter>
    </section>
  )
}

export default App
