import React, { Component } from "react";
import Sidebar from "./Sidebar";
import MissionsInfoComponent from "./MissionInfo";

class Grid extends Component {
  constructor(props) {
    super(props);

    let missions;
    if (__isBrowser__) {
      delete window.__INITIAL_DATA__;
    } else {
      missions = this.props.staticContext.data;
    }
    this.state = {
      missions,
      loading: missions ? false : true,
      activeYear: "",
      launch_success: "",
      land_success: "",
    };

    this.fetchLaunches = this.fetchLaunches.bind(this);
  }
  componentDidMount() {
    const { state } = this.props.location;
    const { launch_success, land_success, activeYear } = this.state;
    if (state) {
      let keyValue = Object.keys(state);

      this.setState({ [keyValue[0]]: state[keyValue[0]] }, () => {
        const { launch_success, land_success, activeYear } = this.state;
        this.fetchLaunches(launch_success, land_success, activeYear);
      });
    }
    if (!this.state.missions && !state) {
      this.fetchLaunches(launch_success, land_success, activeYear);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { launch_success, land_success, activeYear } = nextState;
    if (nextState !== this.state) {
      if (
        launch_success !== this.state.launch_success ||
        land_success !== this.state.land_success ||
        activeYear !== this.state.activeYear
      ) {
        this.fetchLaunches(launch_success, land_success, activeYear);
        return true;
      }
      return true;
    }

    return false;
  }
  fetchLaunches(launch, land, year) {
    this.setState(() => ({
      loading: true,
    }));

    this.props.fetchInitialData(launch, land, year).then((missions) =>
      this.setState(() => ({
        missions,
        loading: false,
      }))
    );
  }

  _handleFilters = (type, value) => {
    this.setState({ [type]: this.state[type] !== value ? value : "" }, () => {
      const { history } = this.props;
      history.push("/spaceX");
    });
  };
  render() {
    const {
      loading,
      missions,
      activeYear,
      launch_success,
      land_success,
    } = this.state;
    return (
      <div className="bgGrey">
        <div className="container">
          <header>
            <h1 className="mainHeading">spaceX launch programs</h1>
          </header>
          <div className="mainWrapper">
            <Sidebar
              _handleFilters={this._handleFilters}
              activeYear={activeYear}
              launch_success={launch_success}
              land_success={land_success}
            />
            <div className="missionWrapper">
              <MissionsInfoComponent missions={missions} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
