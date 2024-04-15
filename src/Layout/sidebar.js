import {Box} from "@mui/material";
import React from "react";
import Riby from "./images/Riby_logo 1.png";
import Pix1 from "./images/Group 1.png";
import Pix2 from "./images/user-2-line .png";
import Pix3 from "./images/Group 3.png";
import Pix4 from "./images/question-answer-line 1.png";


export default function Sidebar() {
     
    return(


          
          
    


        

        <Box className="jon"
        sx={{
            position:"absolute",
            borderRight:"0.5px",
            width:"240px",
            height:"720px",
            backgroundColor:"#ffffff",
        }}

        >

        <img  
         src={Riby}
         alt="pix"
         />


          <p><img src={Pix1} alt="pix"/>Tickets</p>
          <p><img src={Pix2} alt="pix"/>Agents</p> 
          <p>  <img src={Pix3} alt="pix"/>Analytics</p>
          <p>  <img src={Pix4} alt="pix"/>Chats</p>

        
            <Box>
           
            


            </Box>
        </Box>
    );
    
}