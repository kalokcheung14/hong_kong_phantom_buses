import './App.css';

function BusEtaTime(props) {
  return (
      <span>
        {props.real?
            <span className="Eta-time Eta-time-real">{props.minute}</span> :
            <span className="Eta-time Eta-time-expected">{props.minute}</span>
        }
        &nbsp;min
      </span>
  );
}

function BusEtaTimeList() {
  return (
      <span className="Eta-time-list">
        <BusEtaTime minute="2" real="true"/>
        <BusEtaTime minute="6"/>
        <BusEtaTime minute="10"/>
      </span>
  );
}

function BusEtaRow(props) {
  return (
      <div className="Row">
        <span className="route">{props.route}</span>
        <span className="stop">{props.stop}</span>
        <span className="dest">TO: {props.dest}</span>
        <BusEtaTimeList/>
      </div>
  );
}

function App() {
  let data = [
      {route: "278X", destEn: "TSUEN WAN (NINA TOWER)", stopNameEn: "KIN CHUEN STREET KWAI CHUNG"},
      {route: "235", destEn: "TSUEN WAN (CIRCULAR)", stopNameEn: "KIN CHUEN STREET KWAI CHUNG"},
      {route: "48X", destEn: "TSUEN WAN (BAYVIEW GARDEN)", stopNameEn: "KIN CHUEN STREET KWAI CHUNG"},
      {route: "290X", destEn: "TSUEN WAN WEST STATION", stopNameEn: "KIN CHUEN STREET KWAI CHUNG"},
      {route: "290", destEn: "TSUEN WAN WEST STATION", stopNameEn: "KIN CHUEN STREET KWAI CHUNG"},
      {route: "73X", destEn: "TSUEN WAN (NINA TOWER)", stopNameEn: "KIN CHUEN STREET KWAI CHUNG"}
  ];

  return (
    <div className="App">
      <div className="Header">Bus Found</div>
        {
          data.map(function(item, i){
            return <BusEtaRow route={item.route} stop={item.stopNameEn} dest={item.destEn}/>
          })
        }
    </div>
  );
}

export default App;
