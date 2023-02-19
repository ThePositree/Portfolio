import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'

interface props extends React.DOMAttributes<HTMLButtonElement> {
	style?: React.CSSProperties
}

const Button: FC<PropsWithChildren<props>> = ({ children, ...props }) => {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	)
}

export default Button
