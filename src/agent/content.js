 import {Box} from "@mui/material";
 import React from "react";
 import Nav1 from "./images/notification-2-line 1.png";
 import Nav2 from "./images/question-answer-line 2.png";
 import Nav3 from "./images/Group 126.png";
 import List from "./images/list.png";




  export default function Content() {
     return(
         <Box className="nav top"
          
        sx={{

            position:"absolute",
                width:"1260px",
                height:"64px",
                marginLeft:"240px",
                border:"1px",
                backgroundColor:"#fff",
                marginRight:"80px",
        }}

         >
            <img 
            src={Nav3}
            alt="pix"
            />
            <img
              src={Nav2}
              alt="pix"
             />
            <img
             src={Nav1}
             alt="pix" 
             />
             
             <Box className="jude"
             >
            
            <Box className="job"
            >
            <h2>Agents</h2>
              <span> <input     placeholder="Search for Agents"    /> <button> Create Agent</button></span>

            </Box>
            <Box className="noah"
            >
                <img
                  src={List}
                  alt="" 
                />

            </Box>

            </Box>
         </Box>
     );
    
  }