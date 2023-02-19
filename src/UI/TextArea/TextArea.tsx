import { forwardRef } from 'react'
import styles from './TextArea.module.scss'

type TextAreaProps = React.HTMLProps<HTMLTextAreaElement>

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(props, ref) => {
		return (
			<textarea ref={ref} className={styles.textarea} {...props}></textarea>
		)
	}
)

export default TextArea
