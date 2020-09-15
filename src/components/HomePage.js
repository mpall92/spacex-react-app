import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  './homePage.css';
import LaunchItem from './LaunchItem';
import { init, fetchData } from '../Store/Actions/Actions';


const HomePage = () => {
  const dispatch = useDispatch();
  const [stateLaunches, updateStateLaunches] = useState([]);
  const [filteredStateLauches, updateFilteredStateLauches] = useState([]);
  const [yearsLaunches, updateYearsLauches] = useState([]);
  const apiLaunches = useSelector((state) => state.reducer.launches);
  const status = useSelector((state) => state.reducer.status);

  useEffect(() => {
    const tempYears = apiLaunches.map((a) => a.launch_year);
    const tempArray = [...new Set(tempYears)];
    updateYearsLauches(tempArray);
    updateStateLaunches(apiLaunches);
    updateFilteredStateLauches(apiLaunches);
  }, [apiLaunches]);

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  const filterByYear = (year) => {
    const tempFilterYear = stateLaunches.filter(
      (launch) => launch.launch_year === year,
    );
    updateFilteredStateLauches(tempFilterYear);
  };

  return (
    <div className="homePage">
      <div className="leftContainer">
        <h5>Filters</h5>
        <p>Launch Year</p>
        <hr className="hr"></hr>
      <div className="filterAndSortOptions">
      {yearsLaunches.map(year => (
                  <button className="filterByYear" onClick={(a)=>filterByYear(a.target.value)} key={year} value={year}>
                    {year}
                  </button>
                ))}
          </div>
      </div>
      <div className="rightContainer">
        <div className="launchesList">
          {status === 'Loading Data' ? (
            <div>Loading Data</div>
          ) : (
            filteredStateLauches.map((a) => (
              <LaunchItem key={a.flight_number} {...a} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
