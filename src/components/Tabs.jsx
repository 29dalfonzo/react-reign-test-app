import '../styles/Tabs.css'

const Tabs = ({handleTabChange, selectedTab}) => {

	return (
    <div className="tabContainer">
      <div className="container">
        <div
          className={`${selectedTab ? "rectangle selected" : "rectangle"}`}
          onClick={() => handleTabChange(true)}
        >
          All
        </div>
        <div
          className={`${!selectedTab ? "rectangle selected" : "rectangle"}`}
          onClick={() => handleTabChange(false)}
        >
          My Faves
        </div>
      </div>
    </div>
  );
}

export default Tabs
