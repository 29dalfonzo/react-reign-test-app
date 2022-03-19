import {useEffect, useState} from 'react'
import '../styles/Cardlist.css'
import Card from './Card'
import Pages from './Pages'


const Cardlist = ({selectedDropdown}) => {
	const [page, setPage] = useState(1)
	const [hitsPerPage, setHitsPerPage] = useState(15)
	const [url, setUrl] = useState(`https://hn.algolia.com/api/v1/search_by_date?query=${selectedDropdown}&hitsPerPage=${hitsPerPage}&page=${page}`)

	const [data, setData] = useState([])


	const newUrl = () => {
		setUrl(`https://hn.algolia.com/api/v1/search_by_date?query=${selectedDropdown}&hitsPerPage=${hitsPerPage}&page=${page}`)
	}

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

	const filterData = (data) => {
		let filteredData = data.filter(item => item.author && item.story_title && item.story_url && item.created_at)
		// console.log(filteredData)
		//TODO: validate if filteredData.length == 8
		//if not, fetch more data and filter again
		//if yes, setData to filteredData
		// console.log(filteredData.length, filteredData.length>7)
		// if (filterData.length < 8) {
		// 	// console.log('fetch more data',hitsPerPage,8-filteredData.length)
		// 	setHitsPerPage(hitsPerPage + 8-filteredData.length)
		// 	// console.log(hitsPerPage)
		// } 
		setData(filteredData.slice(0, 8))
			
	}

	const handleCurrentpage= (i) => {
		// console.log(i)
		setPage(i)
		// console.log(page)
	}
	useEffect(() => {
		// console.log(url)
		newUrl()
		fetchData()
	}, [selectedDropdown, page, url])

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

export default Cardlist
