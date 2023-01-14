export default{
  featured:{
    width: '100%',
    display: 'flex',
    justifyContent:' space-between',
},

featuredItem:{
    flex: 1,
    margin:' 0px 20px',
    padding:'30px',
    borderRadius: '10px',
    cursor: 'pointer',
    WebkitBoxShadow: `0px 0px 15px -10px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0)`,
    boxShadow: `0px 0px 15px -10px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0)`,
},

featuredTitle:{
    fontSize: '20px',
},

featuredMoneyContainer:{
   margin:'10px 0px',
   display: 'flex',
   alignItems: 'center',
},

featuredMoney:{
   fontSize: '25px',
   fontWeight: 600,
},

featuredMoneyRate:{
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
},

featuredIconPositive:{
    fontSize: '14px',
    marginLeft: '5px',
    color: 'green',
},

featuredIconNegative:{
    fontSize: '14px',
    marginLeft: '5px',
    color: 'red',
},

featureSub:{
    fontSize: '15px',
    color: 'gray',
}

}