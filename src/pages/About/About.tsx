import cn from 'classnames'
import lText from '../../assets/l-text.svg'
import styles from './About.module.scss'

const text = `Nikolay Tretyakov
Frontend developer
Phone: +7 988 893 52 87
Email: max_razrabot4ik_@mail.ru
Rostov-on-Don	
Date of birth: Feb 20, 2003

Skills:

Knowledge: JavaScript , CSS , HTML , REACT , TYPESCRIPT , REDUX , REDUX-TOOLKIT , RTK QUERY , REACT QUERY;

Use: Node.js,EXPRESS,PHP,MYSQL,MONGO DB;

Worked on systems: Windows , Linux , MAC OS;

Also familiar with technologies such as: git , git-flow , docker , docker-compose, OOP , KISS, DRY, YAGNI , SOLID; 

I'm also interested in: BACKEND , VUE , ANGULAR`

const About = () => {
	return (
		<div className={cn(styles.wrapper, 'appearance')}>
			<div className={styles.header}>
				<img className={styles.img} src={lText} alt='text editor label' />
				About me.txt
			</div>
			<textarea className={styles.content} defaultValue={text}></textarea>
			<div className={styles.footer}>
				<div className={styles.cell}>Windows (CRLF)</div>
				<div className={styles.cell}>UTF-8</div>
			</div>
		</div>
	)
}

export default About
