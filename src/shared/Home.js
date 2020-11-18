import React, { Component } from "react";
import Sidebar from "./Sidebar";
import MissionsInfoComponent from "./MissionInfo";

class Home extends Component {
  constructor(props) {
    super(props);

    let missions;
    if (__isBrowser__) {
      missions = window.__INITIAL_DATA__;
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

    this.fetchRepos = this.fetchRepos.bind(this);
  }
  componentDidMount() {
    if (!this.state.missions) {
      this.fetchRepos(this.props.match.params.id);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos(this.props.match.params.id);
    }
  }
  fetchRepos(lang) {
    this.setState(() => ({
      loading: true,
    }));

    this.props.fetchInitialData(lang).then((repos) =>
      this.setState(() => ({
        missions,
        loading: false,
      }))
    );
  }

  _handleFilters = (type, value) => {
    const { history } = this.props;
    history.push({ pathname: "/spaceX", state: { [type]: value } });
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

export default Home;
