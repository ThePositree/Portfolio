import cn from 'classnames'
import lBurger from '../../assets/l-burger.svg'
import lDino from '../../assets/l-dino.svg'
import lGitSearch from '../../assets/l-git.svg'
import lSapper from '../../assets/l-sapper.svg'
import lText from '../../assets/l-text.svg'
import lTodo from '../../assets/l-todo.svg'
import Label from '../Label/Label'
import styles from './Main.module.scss'

interface ILabel {
	linkTo: string
	img: string
	text: string
	propClass?: string
}

const Main = () => {
	const labels: ILabel[] = [
		{
			linkTo: '/dino',
			img: lDino,
			text: 'Dino game',
		},
		{
			linkTo: '/sapper',
			img: lSapper,
			text: 'Mine-Sweeper',
		},
		{
			linkTo: '/burger',
			img: lBurger,
			text: 'Burger shop',
		},
		{
			linkTo: '/todo',
			img: lTodo,
			text: 'Todo app',
		},
		{
			linkTo: '/github',
			img: lGitSearch,
			text: 'Github Search',
		},
		{
			linkTo: '/about',
			img: lText,
			text: 'About me.txt',
			propClass: styles.about,
		},
	]

	return (
		<>
			<div className={cn(styles.labels, 'appearance')}>
				{labels.map(label => (
					<Label
						img={label.img}
						text={label.text}
						linkTo={label.linkTo}
						key={label.linkTo}
						propClass={label?.propClass}
					/>
				))}
			</div>
		</>
	)
}

export default Main
