import cn from 'classnames'
import { useState } from 'react'
import dinoGif from '../../assets/dino.gif'
import {
	default as dinoImg,
	default as dogImg,
	default as pikachuImg,
	default as tigerImg,
} from '../../assets/dino.png'
import dogGif from '../../assets/dog.gif'
import pikachuGif from '../../assets/pikachy.gif'
import tigerGif from '../../assets/tiger.gif'
import CardRunner from '../../Components/CardRunner/CardRunner'
import Header from '../../Components/Header/Header'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { ICardRunner } from '../../models/models'
import { buyItem, selectRunner } from '../../reducers/shopSlice'
import styles from './Shop.module.scss'

const Shop = () => {
	const purchasedItems = useAppSelector(state => state.shop.purchasedItems)
	const money = useAppSelector(state => state.shop.money)
	const currentRunner = useAppSelector(state => state.shop.currentRunner)
	const dispatch = useAppDispatch()

	const listCardsRunner: ICardRunner[] = [
		{
			id: 1,
			img: dinoImg,
			gif: dinoGif,
			price: 0,
			width: 100,
			isPurchased: true,
			isActive: currentRunner === 1,
		},
		{
			id: 2,
			img: dogImg,
			gif: dogGif,
			price: 1000,
			width: 100,
			isPurchased: purchasedItems.includes(2),
			isActive: currentRunner === 2,
		},
		{
			id: 3,
			img: tigerImg,
			gif: tigerGif,
			price: 1000,
			width: 100,
			isPurchased: purchasedItems.includes(3),
			isActive: currentRunner === 3,
		},
		{
			id: 4,
			img: pikachuImg,
			gif: pikachuGif,
			price: 1000,
			width: 100,
			isPurchased: purchasedItems.includes(4),
			isActive: currentRunner === 4,
		},
	]

	for (const item of listCardsRunner) {
		if (item.isPurchased) item.price = 0
	}

	const [listsItems, setListsItems] = useState({
		listCardsRunner,
	})

	const clickBuy = ({ id, price }: ICardRunner) => {
		if (money < price) return
		setListsItems(prev => {
			const newArray = prev.listCardsRunner.map(item => {
				item.isActive = false
				if (item.id !== id) return item
				item.price = 0
				item.isPurchased = true
				item.isActive = true
				return item
			})
			return { listCardsRunner: newArray }
		})
		dispatch(buyItem({ id, price }))
		dispatch(selectRunner(id))
	}

	return (
		<>
			<Header />
			<div className={cn(styles['inner-cards'], 'appearance')}>
				{listsItems.listCardsRunner.map(item => (
					<CardRunner key={item.id} cardRunner={item} clickBuy={clickBuy} />
				))}
			</div>
		</>
	)
}

export default Shop
