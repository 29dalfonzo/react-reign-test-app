import {useEffect, useState} from 'react'
import Card from './Card'
import Pages from './Pages'
import'../styles/Cardlist.css'


const FavsCardList = () => {
	const [allFavs, setAllFavs] = useState([])
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1)
	const [currentPage, setCurrentPage] = useState(1)

	const handleCurrentpage= (i) => {
		// console.log(i)
		setPage(i)
		setCurrentPage(i)
		if(i>1 && i!==undefined){
			// console.log(i,currentPage)
		setData(allFavs.slice((i-1)*8,i*8))
			// console.log(data)
		}
		if (currentPage===1){
			setData(allFavs.slice(0,8))
			// console.log(data)
		}
	}

	const setFavs = () => {
		//check from local storage if there is any data
		let favs = JSON.parse(localStorage.getItem('favs'))
		if(favs){
			//check .length of favs to split into pages of 8
			// let pages = Math.ceil(favs.length/8)
			// console.log(pages)
			// //set pages into array
			// let pagesArray = []
			// for(let i = 1; i <= pages; i++){
			// 	pagesArray.push(i)
			// }
			// //set totalPages
			// console.log(pagesArray)
			// setTotalPages(pagesArray)
			setAllFavs(favs)
			setData(favs.slice(0, 8))
		}

	}

	useEffect(() => {
		setFavs()
	// eslint-disable-next-line react-hooks/exhaustive-deps
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
