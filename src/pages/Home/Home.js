import React, { useEffect, useState } from "react";
import styles from "./styles.js";
import FeacturedInfo from "../../components/featuredInfo/featuredInfo";
import Chart from "../../components/chart/Chart.js";
import { UserData } from "../../components/dummyData.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { upDateItem } from "../../Redux/reducer";
import WidgetsSm from "../../components/widgetsSm/WidgetsSm";
import WidgetsLs from "../../components/widgetsLs/WidgetsLs";

function Home(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (props.data) {
      setUsers(props.data[0]);
    }
  }, []);

  const data = users;

  function getData(num) {
    if (!data) return;

    return data.slice(0, num);
  }

  return (
    <div style={styles.home}>
      <FeacturedInfo data={users} />
      <Chart
        data={UserData}
        title="Performents Analytics"
        grid
        dataKey="Performents rate"
      />
      <div style={styles.homeWidgets}>
        <WidgetsSm data={getData(5)} />
        <WidgetsLs data={getData(5)} />
      </div>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
