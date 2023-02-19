import { useRef } from 'react'
import { GrAdd } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../reducers/todoSlice'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import TextArea from '../../UI/TextArea/TextArea'
import styles from './AddTodo.module.scss'

const TodoAdd = () => {
	const input = useRef<HTMLInputElement>(null)
	const textarea = useRef<HTMLTextAreaElement>(null)

	const dispatch = useDispatch()

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		if (!input.current!.value) return
		const todo = {
			id: Date.now(),
			text: input.current!.value.trim(),
			isCompleted: false,
			description: textarea.current!.value.trim(),
		}
		dispatch(addTodo({ todo }))
		input.current!.value = ''
		textarea.current!.value = ''
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<Input ref={input} placeholder='Заголовок' />
			<TextArea ref={textarea} placeholder='Описание' />
			<Button style={{ width: '100%' }}>
				<GrAdd />
			</Button>
		</form>
	)
}

export default TodoAdd
