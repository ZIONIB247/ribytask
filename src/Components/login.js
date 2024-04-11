import {Box} from "@mui/material";
import React from "react";
import Logo from "./images/ribylogo.png";
import input from "@mui/material"
import button from"@mui/material"




export default  function Login() {

  return(
    <Box
      sx={{
        backgroundColor:"#0D233D",
        height:"100vh"
      }}
    >
        <Box
        sx={{
         marginLeft:"700px",
    
        
        

        }}
        >
        <img 
        src={Logo}
            alt=""
        />
        </Box>
        <Box
          sx={{
            alignItems:"center",
            backgroundColor:"#ffffff",
            width:"352px",
            height:"384px",
            marginTop:"168px",
            marginLeft:"594px",
            borderRadius:"10px"

          }}
        >

         <h3 className="hero"> Sign in</h3>
         <p className="sun">Email Address</p>
         <input className="loop"  placeholder="email address" name="email address"
         />
         <p className="sun">Password</p>
         <input className="loop" placeholder="password" name="password"
          />
           
          <h2 className="june"><button>Sign In</button></h2>

          <p className="may">forgot password?</p>
         

        </Box>
       
    </Box>
  )

  
    
}