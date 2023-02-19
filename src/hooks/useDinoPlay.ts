import { useEffect, useState } from 'react'
import { IUseDinoPlayParam, IUseDinoPlayReturnValue } from '../models/models'
import { addMoney } from '../reducers/shopSlice'
import { useAppDispatch } from './reduxHooks'

export const useDinoPlay: (
	param: IUseDinoPlayParam
) => IUseDinoPlayReturnValue = param => {
	const { runner, cactus, styles, currentRunnerId, gameField } = param
	const [isGameStart, setIsGameStart] = useState(false)
	const [isGameOver, setIsGameOver] = useState(false)
	const [gameScore, setGameScore] = useState(0)
	const [lastGameScore, setLastGameScore] = useState(0)
	const [bestGameScore, setBestGameScore] = useState(0)
	const [playSpeed, setPlaySpeed] = useState(1)
	const dispatch = useAppDispatch()

	if (isGameStart) {
		setTimeout(() => {
			setGameScore(gameScore + 1)
		}, 80)
	}

	useEffect(() => {
		let bestGameScoreStorage = +localStorage.getItem('bestScore')!
		if (bestGameScoreStorage === null) {
			localStorage.setItem('bestScore', String(bestGameScore))
			bestGameScoreStorage = +localStorage.getItem('bestScore')!
		}
		if (lastGameScore > bestGameScore) {
			localStorage.setItem('bestScore', String(lastGameScore))
			bestGameScoreStorage = +localStorage.getItem('bestScore')!
		}
		setBestGameScore(bestGameScoreStorage)
	}, [bestGameScore, lastGameScore])

	useEffect(() => {
		const interval = setInterval(() => {
			if (playSpeed === 1) {
				if (gameScore >= 215) setPlaySpeed(2)
			}
			if (playSpeed === 2) {
				if (gameScore >= 500) setPlaySpeed(3)
			}
			const runnerPositionTop = runner.current!.offsetTop
			const cactusPositionLeft = cactus.current!.offsetLeft
			const positionForGameOver = [50, 115, 200, 110]
			if (
				cactusPositionLeft < positionForGameOver[currentRunnerId - 1] &&
				cactusPositionLeft > 0 &&
				runnerPositionTop >= 250
			) {
				setIsGameStart(false)
				setIsGameOver(true)
				setLastGameScore(gameScore + 1)
				dispatch(addMoney(gameScore + 1))
			}
		}, 10)

		function functionalJump() {
			if (!isGameStart) {
				setIsGameStart(true)
				return
			}

			if (runner.current!.classList[1]) return

			if (currentRunnerId === 3) {
				runner.current!.classList.add(styles['runner-3-active'])
			} else {
				runner.current!.classList.add(styles['runner-active'])
			}

			if (currentRunnerId === 3) {
				setTimeout(() => {
					runner.current!.classList.remove(styles['runner-3-active'])
				}, 1000)
			} else {
				setTimeout(() => {
					runner.current!.classList.remove(styles['runner-active'])
				}, 700)
			}
		}

		function jumpKeyBoard(e: KeyboardEvent) {
			if (isGameOver) return

			if (e.key !== ' ') return
			functionalJump()
		}

		function jumpTouch(e: TouchEvent) {
			if (isGameOver) return

			functionalJump()
		}

		const refGameField = gameField.current

		document.addEventListener('keydown', jumpKeyBoard)
		refGameField!.addEventListener('touchstart', jumpTouch)

		return () => {
			clearInterval(interval)
			document.removeEventListener('keydown', jumpKeyBoard)
			refGameField!.removeEventListener('touchstart', jumpTouch)
		}
	})

	const replay = () => {
		setGameScore(0)
		setPlaySpeed(1)
		setIsGameOver(false)
	}

	return {
		isGameStart,
		isGameOver,
		gameScore,
		bestGameScore,
		lastGameScore,
		playSpeed,
		replay,
	}
}
