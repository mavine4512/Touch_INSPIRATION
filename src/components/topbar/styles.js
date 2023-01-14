
export default{
topBar:{
    width: '100%',
    height:'50px',
    backgroundColor:'#fff',
    position: 'sticky',
    top: 0,
    zIndex: '999',
},
topbarWrapper:{
    height: '100%',
    padding:' 0px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
},
logo:{
    fontWeight: 'bold',
    fontSize:' 30px',
    color:`rgb(225, 165, 12)`,
    cursor: 'pointer',
},
tobarIconContainer:{
    position: 'relative',
    cursor: 'pointer',
    marginRight: '10px',
    color:'#555',
},
topRight:{
  display: 'flex',
},
topIconBadge:{
    position: 'absolute',
    top:'-5px',
    right: '5px',
    backgroundColor: 'red',
    color:'white',
    borderRadius:'54%',
    width: '15px',
    height: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
},
topAvatar:{
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    cursor: 'pointer',
}
}
