import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from './../models/models'
const todosStorage = localStorage.getItem('todos')

const todosArray: ITodo[] =
	todosStorage === null ? [] : JSON.parse(todosStorage)

interface stateTodos {
	todos: ITodo[]
	foundTodos: ITodo[]
}

const initialState: stateTodos = {
	todos: todosArray,
	foundTodos: [],
}
export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, { payload }: PayloadAction<{ todo: ITodo }>) => {
			const { todo } = payload

			state.todos.push(todo)
		},
		removeTodo: (state, { payload }: PayloadAction<{ idTodo: number }>) => {
			const { idTodo } = payload
			state.todos = state.todos.filter(item => item.id !== idTodo)
			if (state.foundTodos)
				state.foundTodos = state.foundTodos.filter(item => item.id !== idTodo)
		},
		changeCompleteTodo: (
			state,
			{ payload }: PayloadAction<{ idTodo: number }>
		) => {
			const { idTodo } = payload
			state.todos = state.todos.map(item => {
				if (item.id === idTodo) item.isCompleted = !item.isCompleted
				return item
			})
			if (state.foundTodos)
				state.foundTodos = state.foundTodos.map(item => {
					if (item.id === idTodo) item.isCompleted = !item.isCompleted
					return item
				})
		},
		editTodo: (
			state,
			{
				payload,
			}: PayloadAction<{ idTodo: number; newText: string; newDesc: string }>
		) => {
			const { idTodo, newText, newDesc } = payload
			const map: (item: ITodo) => ITodo = item => {
				if (item.id === idTodo) {
					item.text = newText
					item.description = newDesc
				}
				return item
			}
			state.todos = state.todos.map(map)
			if (state.foundTodos) state.foundTodos = state.foundTodos.map(map)
		},
		searchTodo: (state, { payload }: PayloadAction<{ textTodo: string }>) => {
			const { textTodo } = payload
			if (!String(textTodo)) {
				state.foundTodos = []
				return state
			}
			state.foundTodos = state.todos.filter(item => {
				const inputValue = String(textTodo)
				return new RegExp(inputValue, 'gi').test(item.text)
			})
		},
	},
})

export const { addTodo, removeTodo, changeCompleteTodo, editTodo, searchTodo } =
	todosSlice.actions

export default todosSlice.reducer
