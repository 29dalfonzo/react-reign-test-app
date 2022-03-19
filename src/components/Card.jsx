import {useState} from 'react'
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
						onClick={()=>setFav(!fav)}
					/>
				</div>
			</div>
			
	)
}

export default Card
