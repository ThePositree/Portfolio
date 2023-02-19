import { forwardRef } from 'react'
import styles from './Input.module.scss'
type InputProps = React.HTMLProps<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <input ref={ref} className={styles.input} type='text' {...props} />
})

export default Input
