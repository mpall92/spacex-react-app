import React from 'react';
import  './LaunchItem.css';
import backgroundImage from '../assets/img/launch-home.png';
import { nth, monthsArray } from '../Utils/DateUtils';

const LaunchItem = (props) => {
  const date = new Date(props.launch_date_utc);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  console.log("launch props", props);
  return (
    <div className="launchItemContainer" key={props.flight_number}>
      <img src={backgroundImage} className="rocketImage" alt="spacex image"/>
      <div className="number_mission_name">{props.mission_name}&nbsp;{`#${props.flight_number}`}</div>
      <div>
        <p className="date"><b>Launch Date:</b>{`${day}${nth(day)} ${
          monthsArray[month]
        } ${year}`}</p>
        <div className="rocket">{props.rocket.rocket_name}</div>
      </div>
    </div>
  );
};

export default LaunchItem;
