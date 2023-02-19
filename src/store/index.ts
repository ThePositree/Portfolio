import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit'
import shopSlice from '../reducers/shopSlice'
import todosSlice from '../reducers/todoSlice'

const authMiddleware: Middleware<{}, RootState> = store => next => action => {
	const result = next(action)
	if (action.type?.startsWith('todos/')) {
		const todos = store.getState().todos.todos
		localStorage.setItem('todos', JSON.stringify(todos))
	}
	return result
}

const rootReducer = combineReducers({
	shop: shopSlice,
	todos: todosSlice,
})

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(authMiddleware),
})

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
