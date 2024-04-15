import {Box} from "@mui/material";
import React from "react";




export default function Agentpage() {
     return(
        <Box className="papa"
          sx={{
            width:"100vh",
            position:"absolute",
            height:"100vh",
            backgroundColor:"#0D233D",
          }}
        >
            <Box className="rain" 
            sx={{
           
            width:"450px",
            height:"384px",
            borderRadius:"10px",
            backgroundColor:"#ffffff",
            marginLeft:"60px"
            
            }}


            >
                <h1>Create Agent</h1>
                <Box className="salt"
                   sx={{
                    display:"flex ",
                    
                   }}
                >
                    <p>First name</p>
                    <input  placeholder="First Name"/>
                    <p>Last Name</p>
                    <input  placeholder="Last Name" />

                </Box>


                <p>Enter Email Address</p>
                <input placeholder="Email Address" />

                <p>Role</p>
                <input  placeholder="Select Role" />

               <button>Create</button>
            </Box>
        </Box>
     )
    
}
