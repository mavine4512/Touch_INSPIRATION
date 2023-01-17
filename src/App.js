import React, { Component } from "react";
import RouteApp from "../src/components/routes";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { upDateItem } from "./Redux/reducer";
import { fetchUser } from "../src/network/index";
import Loader from "react-loader-spinner";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      color: "#00BFFF",
    };
  }

  componentDidMount() {
    this.getUserEndPoint();
  }

  getUserEndPoint = () => {
    fetchUser()
      .then((res) => res.json())
      .then((data) => {
        this.setState({ loading: true });
        this.props.upDateItem(data);
        this.setState({ loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20%",
            }}
          >
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={5000}
            />
          </div>
        ) : (
          <RouteApp />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.dataState.data,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      upDateItem,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
