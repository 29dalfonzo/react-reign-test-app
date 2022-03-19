
import { useState } from 'react'
import '../styles/Pages.css'


const Pages = () => {
	const [button,setButton]= useState([1,2,3,4,5,6,7,8,9])
	const [current,setcurrent]= useState(1)

	const handlePage =(i)=>{
	  if(i===current) return
		if (i<1) return
			if(i>button[button.length-1]){
			// console.log('es mayor')
			 remakePages(i,true)
			return
			}
			if(i<button[0]){
			// console.log('es menr')
			 remakePages(i,false)
			return
			}
			else setcurrent(i)
	}

	const remakePages = (i,more)=>{
		// take out the second element an add a new one (i+1) in button.length-2
		if (more) {
		let newButton = button.slice(1,button.length)
		newButton.push(i)
		setButton(newButton)
		setcurrent(i)
		} else {
		let newButton = button.slice(0,button.length-1)
		newButton.unshift(i)
		setButton(newButton)
		setcurrent(i)
			
		}

	}

	return (
		<div className='Pages'>
			
	<div  className='Buttons'>
		<button className='btn' onClick={()=>handlePage(current-1)}>
			{`<`}	
		</button>
{button.map((item,i) => {
	return (
		<button 
		className={`btn ${item===current?'selected':''}`} key={i}
		onClick={()=>handlePage(item)}>
			{item}
		</button>
			
		)
	})}
		<button className='btn'onClick={()=>handlePage(current+1)}>
			{`>`}	
		</button>
				</div>
		</div>
	)
}

export default Pages
