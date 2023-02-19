import { FC, useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { ITodo } from '../../models/models'
import { searchTodo } from '../../reducers/todoSlice'
import Input from '../../UI/Input/Input'
import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoList.module.scss'

interface ITodoList {
	todoList: ITodo[]
	foundTodos: ITodo[]
}

const TodoList: FC<ITodoList> = ({ todoList, foundTodos }) => {
	const dispatch = useAppDispatch()
	const [notFound, setNotFound] = useState(false)
	const [valueInput, setValueInput] = useState('')

	useEffect(() => {
		if (!foundTodos.length && valueInput) {
			setNotFound(true)
		} else {
			setNotFound(false)
		}
	}, [valueInput, foundTodos.length])

	const search: React.ChangeEventHandler<HTMLInputElement> = e => {
		setValueInput(e.target.value)
		dispatch(searchTodo({ textTodo: e.target.value }))
	}

	const render: () => React.ReactNode = () => {
		if (notFound) return 'Не найдено'
		if (foundTodos.length) {
			return foundTodos.map(todo => <TodoItem todo={todo} key={todo.id} />)
		} else {
			return todoList.map(todo => <TodoItem todo={todo} key={todo.id} />)
		}
	}

	return (
		<ul className={styles.ul}>
			<div className={styles.search}>
				<Input
					style={{ maxWidth: '100%', backgroundColor: '#afafaf' }}
					onChange={search}
					value={valueInput}
				/>
				<AiOutlineSearch className={styles.icon} />
			</div>
			{render()}
		</ul>
	)
}

export default TodoList
