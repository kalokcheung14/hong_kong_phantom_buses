import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './Store';
import { useEffect } from "react";
import getEta from './Api';
import logo from './logo.svg';

function BusEtaTime(props) {
    // Display an ETA item of a bus route
  return (
      <div className="Eta-time-row">
        <div>
            {props.real?
                <span className="Eta-time Eta-time-real">{props.minute}</span> :
                <span className="Eta-time Eta-time-expected">{props.minute}</span>
            }
            &nbsp;min
        </div>
          <div className="Eta-time-remark">{props.remark? <span>({props.remark})</span> : <span></span>}</div>
      </div>
  );
}

function BusEtaTimeList(props) {
    // Display a list of ETA of a bus route
  return (
      <span className="Eta-time-list">
        {
            props.eta.map(function (item, i) {
                return <BusEtaTime key={i} minute={item.time} remark={item.remarkEn}/>
            })
        }
      </span>
  );
}

function BusEtaRow(props) {
    // Display a row of route ETA
  return (
      <div className="Row">
        <span className="route">{props.route}</span>
        <span className="stop">{props.stop}</span>
        <span className="dest">TO: {props.dest}</span>
        <BusEtaTimeList eta={props.eta}/>
      </div>
  );
}

function Main() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const loading = useSelector(state => state.loading);
    let result;

    // Display loading screen if data is being loaded
    if (!loading) {
        // Display Bus ETA by passing the arguments into BusEtaRows if data is not empty, otherwise display a message.
        if (data.length > 0) {
            result = data.map(function (item, i) {
                return <BusEtaRow key={i} route={item.route} stop={item.stopNameEn} dest={item.destEn}
                                  eta={item.etaDetails}/>
            })
        } else {
            result = <div className="ErrorBox">No ETA available</div>;
        }
    } else {
        result = <div className="ErrorBox"><img className="App-logo" src={logo} alt=""/></div>;
    }

    // Fetch data inside useEffect, pass dispatch dependency
    useEffect(function () {
        console.log("useEffect");
        // Get ETA data from API
        const timeout = setTimeout(() => {
            dispatch(getEta())
        }, 1000);

        return () => clearTimeout(timeout);
    }, [dispatch]);

  return (
    <div className="App">
      <div className="Header">Bus Found</div>
        {result}
    </div>
  );
}

function App() {
    // Provide store to pass state data into UI components
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
}

export default App;
