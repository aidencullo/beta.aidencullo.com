import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
    document.documentElement.setAttribute('data-theme', 'light');


  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App