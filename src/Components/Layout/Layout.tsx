import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

const Layout = () => {
	return (
		<>
			<div className={styles.container}>
				<Outlet />
				<Footer />
			</div>
		</>
	)
}

export default Layout
