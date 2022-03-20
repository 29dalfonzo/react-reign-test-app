import {useEffect, useState} from 'react';
import './App.css';

import Header  from "./components/Header";
import Tabs from './components/Tabs';
import Dropdown from './components/DropDown';
import Cardlist from './components/Cardlist';
import FavsCardlist from './components/FavsCardlist';


function App() {
	const [selectedTab, setSelectedTab] = useState(true);
	const [selectedDropdown, setSelectedDropdown] = useState({
		name: 'Select your news',
		value:'',
		img: null
	});

	const handleTabChange = (tab) => {
		setSelectedTab(tab);
		// console.log(selectedTab)
	}

	const handleDropdownChange = (dropdown) => {
    setSelectedDropdown(dropdown);
    // console.log(dropdown)
    localStorage.setItem("selectedDropdown", JSON.stringify(dropdown));
  };

	useEffect(() => {
		const selectedDropdown = JSON.parse(localStorage.getItem('selectedDropdown'));
		if(selectedDropdown) {
			setSelectedDropdown(selectedDropdown);
		}
	}, [])

  return (
    <div className='body-container'>
		  <Header />
			<Tabs handleTabChange={handleTabChange} selectedTab={selectedTab} />
			 {selectedTab &&<Dropdown handleDropdownChange={handleDropdownChange} selectedDropdown={selectedDropdown} />}
			{selectedTab?
<Cardlist selectedDropdown={selectedDropdown.value} />
				:
				<FavsCardlist />
			}
		{/* <div className='content-container'>
		</div>  */}
    </div>
  );
}

export default App;
