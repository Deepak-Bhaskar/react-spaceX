import React from "react";
import { render } from "react-dom";

const SideBarComponent = ({
  _handleFilters,
  activeYear,
  land_success,
  launch_success,
}) => (
  <aside className="sidebar">
    <h2>Filters</h2>
    <div className="sidebarContent">
      <div className="sidebarTitle">Launch Year</div>
      <ul className="sidebarList">
        <li>
          <span
            onClick={() => _handleFilters("activeYear", 2006)}
            className={activeYear === 2006 ? "active" : ""}
          >
            2006
          </span>
          <span
            onClick={() => _handleFilters("activeYear", 2007)}
            className={activeYear === 2007 ? "active" : ""}
          >
            2007
          </span>
        </li>
        <li>
          <span
            onClick={() => _handleFilters("activeYear", 2008)}
            className={activeYear === 2008 ? "active" : ""}
          >
            2008
          </span>
          <span
            onClick={() => _handleFilters("activeYear", 2009)}
            className={activeYear === 2009 ? "active" : ""}
          >
            2009
          </span>
        </li>
        <li>
          <span
            onClick={() => _handleFilters("activeYear", 2010)}
            className={activeYear === 2010 ? "active" : ""}
          >
            2010
          </span>
          <span
            onClick={() => _handleFilters("activeYear", 2011)}
            className={activeYear === 2011 ? "active" : ""}
          >
            2011
          </span>
        </li>
        <li>
          <span
            onClick={() => _handleFilters("activeYear", 2012)}
            className={activeYear === 2012 ? "active" : ""}
          >
            2012
          </span>
          <span
            onClick={() => _handleFilters("activeYear", 2013)}
            className={activeYear === 2013 ? "active" : ""}
          >
            2013
          </span>
        </li>
        <li>
          <span
            onClick={() => _handleFilters("activeYear", 2014)}
            className={activeYear === 2014 ? "active" : ""}
          >
            2014
          </span>
          <span
            onClick={() => _handleFilters("activeYear", 2015)}
            className={activeYear === 2015 ? "active" : ""}
          >
            2015
          </span>
        </li>
        <li>
          <span
            onClick={() => _handleFilters("activeYear", 2016)}
            className={activeYear === 2016 ? "active" : ""}
          >
            2016
          </span>
          <span
            onClick={() => _handleFilters("activeYear", 2017)}
            className={activeYear === 2017 ? "active" : ""}
          >
            2017
          </span>
        </li>
        <li>
          <span
            onClick={() => _handleFilters("activeYear", 2018)}
            className={activeYear === 2018 ? "active" : ""}
          >
            2018
          </span>
          <span
            onClick={() => _handleFilters("activeYear", 2019)}
            className={activeYear === 2019 ? "active" : ""}
          >
            2019
          </span>
        </li>
        <li>
          <span
            onClick={() => _handleFilters("activeYear", 2020)}
            className={activeYear === 2020 ? "active" : ""}
          >
            2020
          </span>
        </li>
      </ul>
      <div className="sidebarTitle">Successful Launch</div>
      <ul className="sidebarList">
        <li>
          <span
            onClick={() => _handleFilters("launch_success", true)}
            className={launch_success === true ? "active" : ""}
          >
            True
          </span>
          <span
            onClick={() => _handleFilters("launch_success", false)}
            className={launch_success === false ? "active" : ""}
          >
            False
          </span>
        </li>
      </ul>
      <div className="sidebarTitle">Successful Landing</div>
      <ul className="sidebarList">
        <li>
          <span
            onClick={() => _handleFilters("land_success", true)}
            className={land_success === true ? "active" : ""}
          >
            True
          </span>
          <span
            onClick={() => _handleFilters("land_success", null)}
            className={land_success === null ? "active" : ""}
          >
            False
          </span>
        </li>
      </ul>
    </div>
  </aside>
);

export default SideBarComponent;
