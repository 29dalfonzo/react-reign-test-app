import {useState} from 'react';
import './App.css';

import Header  from "./pages/Header";
import Tabs from './components/Tabs';
import Dropdown from './components/DropDown';
import Cardlist from './components/Cardlist';

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
		// console.log(selectedDropdown)
	}

  return (
    <div className='body-container'>
			  <Header />
			 <Tabs handleTabChange={handleTabChange} selectedTab={selectedTab} />
			 <Dropdown handleDropdownChange={handleDropdownChange} selectedDropdown={selectedDropdown} />
			<Cardlist />
		{/* <div className='content-container'>
		</div>  */}
    </div>
  );
}

export default App;
