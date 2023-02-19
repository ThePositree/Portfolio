import cn from 'classnames'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Label.module.scss'

interface IProps {
	linkTo?: string
	img: string
	text: string
	propClass?: string
}

const Label: FC<IProps> = ({ linkTo, img, text, propClass }) => {
	const navigate = useNavigate()
	const handleDbClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (linkTo) navigate(linkTo)
	}
	const handleTouch = (e: React.TouchEvent<HTMLButtonElement>) => {
		if (linkTo) navigate(linkTo)
	}

	return (
		<button
			onDoubleClick={handleDbClick}
			onTouchStart={handleTouch}
			className={cn(styles.label, propClass)}
		>
			<img className={styles['label-img']} src={img} alt={text} />
			<span className={styles['label-text']}>{text}</span>
		</button>
	)
}

export default Label
