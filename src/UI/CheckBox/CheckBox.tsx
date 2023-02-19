import { FC } from 'react'
import styles from './CheckBox.module.scss'
type ICheckBox = React.HTMLProps<HTMLInputElement>

const CheckBox: FC<ICheckBox> = props => {
	return (
		<label>
			<input className={styles.input} type='checkbox' {...props} />
			<div className={styles.checkbox}></div>
		</label>
	)
}

export default CheckBox
