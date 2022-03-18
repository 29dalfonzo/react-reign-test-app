import { useState } from 'react'
import '../styles/Tabs.css'

const Tabs = () => {
	const [selected, setSelected] = useState('')

	return (
		<div className='container'>
			<div className={`${selected?"rectangle selected":'rectangle'}`}
			onClick={()=>setSelected(true)}>
				All
			</div>
			<div className={`${!selected?"rectangle selected":'rectangle'}`}
			onClick={()=>setSelected(false)}>
			My Faves
			</div>
		</div>
	)
}

export default Tabs