import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { upDateItem } from "../../Redux/reducer";
import styles from "./styles.js";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

function UserList(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (props.data) {
      setUsers(props.data[0]);
    }
  }, []);

  //   const handleDelete = (id) => {
  //     setUsers(data.filter((item) => item.id !== id));
  //   };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User Name",
      width: 190,
    },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "bio",
      headerName: "Bio",
      width: 220,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      width: 190,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/user/" + params.row._id}>
              <button style={styles.userListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              style={styles.userListDelete}
              //   onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  //   console.log(users);
  return (
    <div style={styles.userList}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[3]}
        checkboxSelection
        disableSelectionOnClick
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
