import {useEffect, useState} from 'react'
import '../styles/Cardlist.css'
import Card from './Card'
import Pages from './Pages'


const Cardlist = () => {
	const [page, setPage] = useState(1)
	const [hitsPerPage, setHitsPerPage] = useState(15)

	let url = `https://hn.algolia.com/api/v1/search_by_date?query=&hitsPerPage=${hitsPerPage}&page=${page}`
	const [data, setData] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		try{
		const response = await fetch(url)
		const json = await response.json()
		// console.log(json)
		filterData(json.hits)
		}catch(e){
			console.error(e)
		}
	}


	const filterData = async(data) => {
		let filteredData = data.filter(item => item.author && item.story_title && item.story_url && item.created_at)
		console.log(filteredData)
		//TODO: validate if filteredData.length == 8
		//if not, fetch more data and filter again
		//if yes, setData to filteredData
			setData(filteredData.slice(0,8))
			
	}

	return (
	<>
		<div className='list-container'>
		<div className='card-list'>
			{data.map(item => (
				<Card key={item.objectID} data={item} />
			))}

		</div>
	</div>
			<Pages />
			</>
	)
}

export default Cardlist
