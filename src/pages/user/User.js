import React, { useState } from "react";
import styles from "./styles.js";
import { useLocation, useNavigate } from "react-router-dom";

export default function user(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state.data;
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [occupation, setOccupation] = useState(data.occupation);
  const [bio, setBio] = useState(data.bio);

  const editUserDetails = (data) => {
    fetch(`https://touchinspiration-0ada.restdb.io/rest/sample/` + data.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": "63be7360969f06502871ad7f",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        navigate("/");
        window.location.reload();
      })
      .catch((err) => console.log("error Editing User", err));
  };
  const id = data.id;
  const udatedEmployee = { id, name, email, occupation, bio };
  const handleSubmit = (e) => {
    e.preventDefault();
    editUserDetails(udatedEmployee);
  };

  return (
    <div style={styles.user}>
      <div style={styles.userTitleContainer}>
        <h1 style={styles.userTitle}>Edit User</h1>
      </div>
      <div style={styles.userContainer}>
        <div style={styles.userShow}>
          <form onSubmit={handleSubmit} style={styles.userUpdateForm}>
            <div style={styles.userUpdateLeft}>
              <div style={styles.userUpdateItem}>
                <label style={styles.userLabelItem}>Full Name</label>
                <input
                  type={"text"}
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={styles.userUpdateInput}
                />
              </div>
              <div style={styles.userUpdateItem}>
                <label style={styles.userLabelItem}>Email</label>
                <input
                  type={"text"}
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.userUpdateInput}
                />
              </div>
              <div style={styles.userUpdateItem}>
                <label style={styles.userLabelItem}>Occupation</label>
                <input
                  type={"text"}
                  value={occupation}
                  name="occupation"
                  onChange={(e) => setOccupation(e.target.value)}
                  required
                  style={styles.userUpdateInput}
                />
              </div>
              <div style={styles.userUpdateItem}>
                <label style={styles.userLabelItem}>Bio</label>
                <input
                  type={"text"}
                  value={bio}
                  name="bio"
                  onChange={(e) => setBio(e.target.value)}
                  required
                  style={styles.userUpdateInput}
                />
              </div>
            </div>
            <div style={styles.userUpdateRight}>
              <button style={styles.userAddbutton}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
