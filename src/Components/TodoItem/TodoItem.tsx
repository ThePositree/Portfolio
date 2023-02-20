import cn from 'classnames'
import { FC, useRef, useState } from 'react'
import { AiFillDelete, AiOutlineCheck } from 'react-icons/ai'
import { MdEdit } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { ITodo } from '../../models/models'
import {
	changeCompleteTodo,
	editTodo,
	removeTodo,
} from '../../reducers/todoSlice'
import Button from '../../UI/Button/Button'
import CheckBox from '../../UI/CheckBox/CheckBox'
import Input from '../../UI/Input/Input'
import TextArea from '../../UI/TextArea/TextArea'
import styles from './TodoItem.module.scss'

interface ITodoItem {
	todo: ITodo
}

const TodoItem: FC<ITodoItem> = ({ todo }) => {
	const dispatch = useAppDispatch()

	const [edit, setEdit] = useState<boolean>(false)

	const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false)

	const { text, isCompleted, id: idTodo, description } = todo

	const editInput = useRef<HTMLInputElement>(null)
	const editTextArea = useRef<HTMLTextAreaElement>(null)

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		setEdit(false)
		setIsOpenDesc(false)
		const newText = editInput.current!.value.trim()
		const newDesc = editTextArea.current!.value.trim()
		if (newText) dispatch(editTodo({ idTodo, newText, newDesc }))
	}

	const changeChecked: React.ChangeEventHandler<HTMLInputElement> = () => {
		dispatch(changeCompleteTodo({ idTodo }))
	}

	const clickRemoveTodo: React.MouseEventHandler<HTMLButtonElement> = () => {
		dispatch(removeTodo({ idTodo }))
	}

	const toggleDesc: React.MouseEventHandler<HTMLLIElement> = e => {
		if (todo.description) setIsOpenDesc(!isOpenDesc)
	}

	const clickEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
		setEdit(!edit)
		setIsOpenDesc(!isOpenDesc)
	}

	return (
		<li className={cn({ [styles.openDesc]: isOpenDesc })} onClick={toggleDesc}>
			<div className={styles.wrapper}>
				<div
					className={cn(styles.inner, styles.inner1, {
						[styles.editInner]: edit,
					})}
					onClick={e => e.stopPropagation()}
				>
					<CheckBox checked={isCompleted} onChange={changeChecked} />
					{edit ? (
						<form onSubmit={handleSubmit} className={styles.form}>
							<Input defaultValue={todo.text} ref={editInput} />
							<Button>
								<AiOutlineCheck color='#afafaf' />
							</Button>
						</form>
					) : (
						<span className={styles.title}>{text}</span>
					)}
				</div>
				<div
					className={cn(styles.inner, styles.inner2)}
					onClick={e => e.stopPropagation()}
				>
					<Button onClick={clickEdit}>
						{edit ? <RxCross2 color='#afafaf' /> : <MdEdit color='#afafaf' />}
					</Button>
					<Button onClick={clickRemoveTodo}>
						<AiFillDelete color='#afafaf' />
					</Button>
				</div>
			</div>
			{isOpenDesc && (
				<div
					className={cn(styles.descriptionWrapper, {
						[styles.noPadding]: edit,
					})}
					onClick={e => e.stopPropagation()}
				>
					{edit ? (
						<form onSubmit={handleSubmit} className={styles.form}>
							<TextArea defaultValue={todo.description} ref={editTextArea} />
						</form>
					) : (
						<p className={styles.desc}>{description}</p>
					)}
				</div>
			)}
		</li>
	)
}

export default TodoItem
