import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { upDateItem } from "../../Redux/reducer";
import styles from "./styles.js";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

function UserList(props) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (props.data) {
      setUsers(props.data[0]);
    }
  }, []);

  function editUser(user) {
    navigate("/user/" + user.id, { state: { data: user } });
  }

  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "User Name",
      width: 190,
    },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "occupation",
      headerName: "Occupation",
      width: 190,
    },
    {
      field: "bio",
      headerName: "Bio",
      width: 220,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div style={styles.actionItems}>
            <button
              onClick={() => editUser(params.row)}
              style={styles.userListEdit}
            >
              Edit
            </button>
            <DeleteOutline
              style={styles.userListDelete}
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  function UsersAdapter(employees) {
    return employees.map((employee) => ({
      id: employee._id,
      name: employee.name,
      email: employee.email,
      occupation: employee.occupation,
      bio: employee.bio,
    }));
  }
  const refinedUsers = UsersAdapter(users);

  return (
    <div style={styles.userList}>
      {refinedUsers < 1 ? (
        <div style={styles.loaderDiv}>
          <h3>Loading ...</h3>
        </div>
      ) : (
        <DataGrid
          rows={refinedUsers}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[3]}
          checkboxSelection
          disableSelectionOnClick
        />
      )}
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
