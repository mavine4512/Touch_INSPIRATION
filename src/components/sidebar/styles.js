export default {
  sidebar: {
    flex: 1,
    backgroundColor: "#f1f1f4",
    height: `calc(100vh - 50px)`,
    position: "sticky",
    top: "50px",
  },
  sidebarWarapper: {
    padding: "20px",
    color: "#555",
  },
  sidebarMenu: {
    marginBottom: "10px",
  },

  sidebarTitle: {
    fontSize: "13px",
    color: `rgb(79, 79, 79)`,
  },
  sidebarList: {
    listStyleType: "none",
    padding: "5px",
  },
  sidebarListItem: {
    padding: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
  },
  active: {
    backgroundColor: "#bdbdcb",
    textDecoration: "none",
    alignItems: "center",
    borderRadius: "10px",
    padding: "5px",
    cursor: "pointer",
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },

  sidebarIcon: {
    marginRight: "5px",
    fontSize: "20px",
    "&:hover": {
      fontSize: "30px",
    },
  },
};
