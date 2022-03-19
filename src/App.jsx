import './App.css';

import Header  from "./pages/Header";
import Tabs from './components/Tabs';
import Dropdown from './components/DropDown';
import Cardlist from './components/Cardlist';

function App() {

  return (
    <div>
			<Header />
			<Tabs />
		<div className='content-container'>
			<Dropdown />
			<Cardlist />
		</div>
    </div>
  );
}

export default App;
