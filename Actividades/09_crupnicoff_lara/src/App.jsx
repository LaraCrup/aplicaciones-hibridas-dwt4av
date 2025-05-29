import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoApp from './components/TodoApp'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

function App() {
  return (
    <>
      <div className="AppContainer">
        <Header />
        <TodoApp>
          <TodoList lista="Supermercado">
            <TodoItem item="Bananas" />
            <TodoItem item="Huevos" />
            <TodoItem item="Leche" />
          </TodoList>
          <TodoList lista="Tareas">
            <TodoItem item="Aprender React" />
            <TodoItem item="Parcial 2 AH" />
            <TodoItem item="Ir al supermercado" />
          </TodoList>
        </TodoApp>
        <Footer />
      </div>
    </>
  )
}

export default App
