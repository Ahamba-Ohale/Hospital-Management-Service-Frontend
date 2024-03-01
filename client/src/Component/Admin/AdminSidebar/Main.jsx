import "./Sidebar.css";

const Main = () => {
  return (
    <div className="main-body">
      <div className="header">
        <span className="search">
          <input type="text" placeholder="Search Patient" />
        </span>
        <div className="notify">
          <div className="bell"></div>
          <div className="img"></div>
          <h4>Patient name</h4>
        </div>
      </div>

      <div className="sub-header">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
      </div>

      <div className="body-main">
        <div className="main">
          <div className="top-main">Top Main</div>
          <div className="bottom-main">Bottom Main</div>
        </div>

        <div className="right-section">
          <div className="top-right">Top Right</div>
          <div className="bottom-right">Bottom Right</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
