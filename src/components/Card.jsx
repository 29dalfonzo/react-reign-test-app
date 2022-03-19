import {useState} from 'react'
import time from '../assets/icon-time-.svg'
import heart from '../assets/empty-icon-favorite-2.svg'
import heartFull from '../assets/fulled-icon-favorite-3.svg'

const Card = ({data}) => {
	const [fav, setFav] = useState(false)

	const openinTab = (url) => {
		window.open(url, '_blank')
	}


	return (
			<div className="card-container">
				<div className="card-time-detail" onClick={()=>openinTab(data.story_url)}	>
						<img src={time} alt=""/>
						<span>created {data.created_at} by {data.author}</span>
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
