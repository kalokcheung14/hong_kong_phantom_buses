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

function BusEtaTimeList(props) {
  return (
      <span className="Eta-time-list">
        {
            props.eta.map(function (item) {
                return <BusEtaTime minute={item.time}/>
            })
        }
      </span>
  );
}

function BusEtaRow(props) {
  return (
      <div className="Row">
        <span className="route">{props.route}</span>
        <span className="stop">{props.stop}</span>
        <span className="dest">TO: {props.dest}</span>
        <BusEtaTimeList eta={props.eta}/>
      </div>
  );
}

function App() {
    let data = [
      {
          route: "278X",
          destEn: "TSUEN WAN (NINA TOWER)",
          stopNameEn: "KIN CHUEN STREET KWAI CHUNG",
          etaDetails: [
              {
                  time: 2,
                  remarkEn: "",
                  remarkTc: ""
              },
              {
                  time: 8,
                  remarkEn: "",
                  remarkTc: ""
              },
              {
                  time: 20,
                  remarkEn: "",
                  remarkTc: ""
              }
          ]
      },
      {
          route: "235",
          destEn: "TSUEN WAN (CIRCULAR)",
          stopNameEn: "KIN CHUEN STREET KWAI CHUNG",
          etaDetails: [
              {
                  time: 2,
                  remarkEn: "",
                  remarkTc: ""
              },
              {
                  time: 8,
                  remarkEn: "",
                  remarkTc: ""
              },
              {
                  time: 20,
                  remarkEn: "",
                  remarkTc: ""
              }
          ]
      },
      {
          route: "48X",
          destEn: "TSUEN WAN (BAYVIEW GARDEN)",
          stopNameEn: "KIN CHUEN STREET KWAI CHUNG",
          etaDetails: [
              {
                  time: 2,
                  remarkEn: "",
                  remarkTc: ""
              },
              {
                  time: 8,
                  remarkEn: "",
                  remarkTc: ""
              },
              {
                  time: 20,
                  remarkEn: "",
                  remarkTc: ""
              }
          ]
      },
      {
          route: "290X",
          destEn: "TSUEN WAN WEST STATION",
          stopNameEn: "KIN CHUEN STREET KWAI CHUNG",
          etaDetails: [
              {
                  time: 2,
                  remarkEn: "",
                  remarkTc: ""
              },
              {
                  time: 8,
                  remarkEn: "",
                  remarkTc: ""
              },
              {
                  time: 20,
                  remarkEn: "",
                  remarkTc: ""
              }
          ]
      },
      {
          route: "290",
          destEn: "TSUEN WAN WEST STATION",
          stopNameEn: "KIN CHUEN STREET KWAI CHUNG",
          etaDetails: [
              {
                  time: 2,
                  remarkEn: "",
                  remarkTc: ""
              },
              {
                  time: 8,
                  remarkEn: "",
                  remarkTc: ""
              },
              {
                  time: 20,
                  remarkEn: "",
                  remarkTc: ""
              }
          ]
      },
      {
          route: "73X",
          destEn: "TSUEN WAN (NINA TOWER)",
          stopNameEn: "KIN CHUEN STREET KWAI CHUNG",
          etaDetails: [
              {
                  time: 2,
                  remarkEn: "",
                  remarkTc: ""
              },
              {
                  time: 8,
                  remarkEn: "",
                  remarkTc: ""
              },
              {
                  time: 20,
                  remarkEn: "",
                  remarkTc: ""
              }
          ]
      }
  ];

    let result;

    if (data.length > 0) {
        result = data.map(function(item, i){
            return <BusEtaRow route={item.route} stop={item.stopNameEn} dest={item.destEn} eta={item.etaDetails}/>
        })
    } else {
        result = <div className="ErrorBox">No ETA available</div>;
    }

  return (
    <div className="App">
      <div className="Header">Bus Found</div>
        {result}
    </div>
  );
}

export default App;
