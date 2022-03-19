import './App.css';

import Header  from "./pages/Header";
import Tabs from './components/Tabs';
import Dropdown from './components/DropDown';
import Cardlist from './components/Cardlist';

function App() {

  return (
    <div className='body-container'>
  <div class="Pages">5</div>
			  <Header />
			 <Tabs />
			 <Dropdown />
			<Cardlist />
		{/* <div className='content-container'>
		</div>  */}
    </div>
  );
}

export default App;
