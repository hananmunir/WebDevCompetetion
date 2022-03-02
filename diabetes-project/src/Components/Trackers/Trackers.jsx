import React from "react";
import "./Trackers.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getBloodSugarLogs,
  getBloodPressureLogs,
  getWeightLogs,
} from "../../actions/Tracker";

const TrackerButtons = ({ add }) => {
  const dispatch = useDispatch();
  const bloodSugar = () => {
    dispatch(getBloodSugarLogs());
  };
  const bloodPressure = () => {
    dispatch(getBloodPressureLogs());
  };
  const weight = () => {
    dispatch(getWeightLogs());
  };
  return (
    <>
      <Link
        style={{ width: "80%" }}
        className='link'
        to={add ? "/Tracker/bloodSugarTracker" : ""}
      >
        <button className='trackerButton' onClick={bloodSugar}>
          Blood Sugar
        </button>
      </Link>
      <Link
        style={{ width: "80%" }}
        className='link'
        to={add ? "/Tracker/bloodPressureTracker" : ""}
      >
        <button className='trackerButton' onClick={bloodPressure}>
          Blood Pressure
        </button>
      </Link>
      <Link
        style={{ width: "80%" }}
        className='link'
        to={add ? "/Tracker/weightTracker" : ""}
      >
        <button className='trackerButton' onClick={weight}>
          Weight
        </button>
      </Link>
    </>
  );
};
function Trackers() {
  return (
    <>
      <div className='trackerSection'>
        
        <div className='trackerContainer'>
          <h1 className='trackerTitle'>Track Your Vitals</h1>
          <div className='trackers'>
            <div className='trackerLogs'>
              <span className='trackerText'>Add Log</span>
              <TrackerButtons add />
            </div>
            <div className='buttonsContainer'>
              <span className='trackerText'>View Logs</span>
              <TrackerButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trackers;
