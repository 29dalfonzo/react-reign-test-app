import {useEffect, useState} from 'react'
import time from '../assets/icon-time-.svg'
import heart from '../assets/empty-icon-favorite-2.svg'
import heartFull from '../assets/fulled-icon-favorite-3.svg'

const Card = ({data}) => {
	const [fav, setFav] = useState(false)

	const openinTab = (url) => {
		window.open(url, '_blank')
	}

	const getTimeDiff = (time) => {
		const date = new Date(time)
		const now = new Date()
		const diff = now - date
		const days = Math.floor(diff / (1000 * 60 * 60 * 24))
		const hours = Math.floor(diff / (1000 * 60 * 60))
		const minutes = Math.floor(diff / (1000 * 60))
		const seconds = Math.floor(diff / 1000)
		if (days > 0) {
			return `${days} days ago`
		} else if (hours > 0) {
			return `${hours} hours ago`
		} else if (minutes > 0) {
			return `${minutes} minutes ago`
		} else if (seconds > 0) {
			return `${seconds} seconds ago`
		}
	}


	const saveFavorite = () => {
		//save favs to local storage as arr
		//get favs from local storage
		const favs = JSON.parse(localStorage.getItem('favs')) || []
		// console.log('favs', favs)
		//check if fav is already in local storage
		let finded = favs.find((fav) => fav.objectID === data.objectID)
		if (finded) {
			//remove from favs
			const newFavs = favs.filter((fav) => fav.objectID !== data.objectID)
			// console.log('newFavs', newFavs)
			localStorage.setItem('favs', JSON.stringify(newFavs))
			setFav(false)
			return
		}
		//add to favs
		// console.log(favs,data)
		favs.push(data)
		// console.log(favs,data)
		localStorage.setItem('favs', JSON.stringify(favs))
		setFav(true)
	}

  const checkFav=()=>{
		//get favs from local storage to check if fav is already in local storage to set fav true
		const favs = JSON.parse(localStorage.getItem('favs')) || []
		let finded = favs.find((fav) => fav.objectID === data.objectID)
		// console.log(favs,finded)
		if (finded) {
			setFav(true)
		}
	}

	useEffect(() => {
		checkFav()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	return (
			<div className="card-container">
				<div className="card-time-detail" onClick={()=>openinTab(data.story_url)}	>
						<img src={time} alt=""/>
						<span>created {getTimeDiff(data.created_at)} by {data.author}</span>
				</div>
				<div className='card-detail'onClick={()=>openinTab(data.story_url)}	>
						{data.story_title}
				</div>
				<div className='card-fav'>
					<img src={`${fav?heartFull:heart}`} alt="fav-icon"
						onClick={()=>saveFavorite()}
					/>
				</div>
			</div>
			
	)
}

export default Card
