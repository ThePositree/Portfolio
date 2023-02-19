import cn from 'classnames'
import { FC } from 'react'
import AddTodo from '../../Components/AddTodo/AddTodo'
import TodoList from '../../Components/TodoList/TodoList'
import { useAppSelector } from '../../hooks/reduxHooks'
import styles from './TodoApp.module.scss'

const TodoApp: FC = () => {
	const todoList = useAppSelector(state => state.todos.todos)

	const foundTodos = useAppSelector(state => state.todos.foundTodos)

	return (
		<div className={cn(styles.app, 'appearance')}>
			<AddTodo />
			{todoList.length ? (
				<TodoList todoList={todoList} foundTodos={foundTodos} />
			) : (
				''
			)}
		</div>
	)
}

export default TodoApp
