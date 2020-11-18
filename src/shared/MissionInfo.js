import React from "react";
import { Link } from "react-router-dom";

const MissionInfo = ({ missions, loading }) => {
  const maxTitleLength = 10;
  return (
    <>
      {missions && missions.length && !loading ? (
        missions.map((data) => {
          let missionTitle =
            data.mission_name.length > maxTitleLength
              ? `${data.mission_name.substring(0, maxTitleLength)}...`
              : data.mission_name;
          return (
            <div className="column" key={data.flight_number}>
              <div className="card">
                <div className="cardImage">
                  <img
                    src="https://cdn.arstechnica.net/wp-content/uploads/2018/07/Rocket-Report-Intro-3-800x450.jpg"
                    alt="rocket images"
                  />
                </div>
                <div className="cardContent">
                  <Link to="#" className="cardTitle">
                    {`${missionTitle} #${data.flight_number}`}
                  </Link>
                  <ul className="contentList">
                    <li>
                      <span className="title">Mission Ids </span>
                      <ul>
                        {data.mission_id.map((mission) => (
                          <li key={mission}>
                            <span className="content">{mission}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <span className="title">Launch Year </span>
                      <span className="content">{data.launch_year}</span>
                    </li>
                    <li>
                      <span className="title">successful Launch </span>
                      <span className="content">{`${data.launch_success}`}</span>
                    </li>
                    <li>
                      <span className="title">successful Landing </span>
                      <span className="content">
                        {`${data["rocket"]["first_stage"]["cores"][0].land_success}`}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })
      ) : !loading && missions && missions.length == 0 ? (
        <h3 className="emptyMission">No missions found</h3>
      ) : (
        <h3 className="emptyMission">Loading...</h3>
      )}
    </>
  );
};

export default MissionInfo;
