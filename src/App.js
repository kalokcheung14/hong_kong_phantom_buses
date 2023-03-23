import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './Store';
import { useEffect } from "react";
import getEta from './Api';
import logo from './logo.svg';
import { languageToggled, LANGUAGE_EN } from './LangSlice';

function BusEtaTime(props) {
  const defaultTimeClass = "Eta-time";
  let timeClass;

  if (props.isScheduled) {
    timeClass = defaultTimeClass + " Eta-time-expected";
  } else {
    timeClass = defaultTimeClass + " Eta-time-real";
  }


  // Display an ETA item of a bus route
  return (
      <div className="Eta-time-row">
        <div className={(props.index == 0)?"Eta-time-first":""}>
            {props.isScheduled?
                <span className={timeClass}>{props.minute}</span> :
                <span className={timeClass}>{props.minute}</span>
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
                return <BusEtaTime key={i} index={i} minute={item.time} remark={item.remarkEn} isScheduled={item.isScheduled}/>
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
    const data = useSelector(state => state.eta.data);
    const loading = useSelector(state => state.eta.loading);
    const language = useSelector(state => state.lang.language);
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

    const toggleLanguage = () => {
      dispatch(languageToggled());
    };

  return (
    <div className="App">
      <div>
        <div className="Header">
          Bus Found
         <button onClick={toggleLanguage} className="Lang-toggle">{language == LANGUAGE_EN? "中文":"English"}</button>
        </div>
      </div>

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
