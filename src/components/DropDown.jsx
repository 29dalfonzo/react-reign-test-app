import {useState} from 'react'
import '../styles/Dropdown.css'
import arrow from '../assets/arrow.png'
import angular from '../assets/angularIcon.png'
import react from '../assets/reactIcon.png'
import vue from '../assets/vueIcon.png'

const DropDown= ({handleDropdownChange,selectedDropdown}) => {
	const [show, setShow] = useState(false)
	// const [selected, setSelected] = useState({
	// 	name: 'Select your news',
	// 	icon: null
	// })
	const options=[
		{name:'Angular', value:'angular', img:angular},
		{name:'React', value:'react', img:react},
		{name:'Vue', value:'vue' , img:vue}
	]

	const onSelect = (e) => {
		console.log(e)
		handleDropdownChange(e)
		setShow(false)
	}

	return (
		<div className='dropdown-container'>
        <div className="dropdown">
				<div className='dropbtn' onClick={()=>setShow(!show)} >
					{selectedDropdown.img && <img src={selectedDropdown.img} alt={selectedDropdown.name} width="20" height="20"/>}
						{selectedDropdown.name}
					<img className='icon-arrow' src={arrow} alt="arrow" width="10" height="10"/>
				</div>

				  <div className={`dropdown-content ${show?'showMenu':''}`} onMouseLeave={()=>setShow(false)}>
						{options.map((option,index) => (
						<div onClick={()=>onSelect(option)} key={index} >
						<img src={option.img} width="20" height="20" alt={option.name} />
								{option.name}
						</div>
						))}
            </div>
        </div>
				</div>
	)
}

export default DropDown
