import {useEffect, useState} from 'react'
import Card from './Card'
import Pages from './Pages'
import'../styles/Cardlist.css'


const FavsCardList = () => {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1)

	const handleCurrentpage= (i) => {
		// console.log(i)
		setPage(i)
		// console.log(page)
	}

	const setFavs = (data) => {
		//check from local storage if there is any data
		let favs = JSON.parse(localStorage.getItem('favs'))
		if(favs){
			setData(favs)
		}

	}

	useEffect(() => {
		setFavs()
	}, [])

	return (
	<>
		<div className='list-container'>
		<div className='card-list'>
			{data.map(item => (
				<Card key={item.objectID} data={item} />
			))}

		</div>
	</div>
			<Pages page={page} handleCurrentpage={handleCurrentpage} />
			</>
	)
}

export default FavsCardList
