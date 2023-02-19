import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Main from './Components/Main/Main'
import About from './pages/About/About'
import Burger from './pages/Burger/Burger'
import DinoPage from './pages/DinoPage/DinoPage'
import Github from './pages/Github/Github'
import Play from './pages/Play/Play'
import Shop from './pages/Shop/Shop'
import Start from './pages/Start/Start'
import TodoApp from './pages/TodoApp/TodoApp'
import store from './store'

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Main />} />
						<Route path='/dino' element={<DinoPage />} />
						<Route path='/dino/shop' element={<Shop />} />
						<Route path='/todo' element={<TodoApp />} />
						<Route path='/sapper' element={<Start />} />
						<Route path='/sapper/play' element={<Play />} />
						<Route path='/burger' element={<Burger />} />
						<Route path='/github' element={<Github />} />
						<Route path='/about' element={<About />} />
					</Route>
				</Routes>
			</Router>
		</Provider>
	)
}

export default App
