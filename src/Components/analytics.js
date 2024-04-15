import{Box} from "@mui/material"
import React from "react"
import Riby from "./images/Riby_logo 1.png"
import Pix1 from "./images/Group 1.png"
import Pix2 from "./images/user-2-line .png"
import Pix3 from "./images/Group 3.png"
import Pix4 from "./images/question-answer-line 1.png"


export default function Analytics() {
    
    return(
     <Box>


        
       
        <Box  className="jon"
        sx={{
            borderRight:"0.5px",
            width:"240px",
            height:"720px",
            backgroundColor:"#ffffff"
        }}
        >


          
<Box className="nav"
              sx={{
                
                width:"1260px",
                height:"64px",
                marginLeft:"240px",
                border:"1px",
                backgroundColor:"#f1f1f1",
                marginRight:"80px",
           
            

              }}

            >
                <img src={Nav3} alt="pix" />
                <img src={Nav2} alt="pix" />
                <img className="img1" src={Nav1} alt="pix" />

            </Box>
           


            <img className="run" 
         src={Riby}
         alt="pix"
         />
        
          <p><img src={Pix1} alt="pix"/>Tickets</p>
          <p><img src={Pix2} alt="pix"/>Agents</p> 
          <p>  <img src={Pix3} alt="pix"/>Analytics</p>
          <p>  <img src={Pix4} alt="pix"/>Chats</p>


          <Box className="body1"
             

                >
                    <h1>Analytics</h1>
                    <Box className="box" sx={{
                        width:"226px",
                        height:"104px",
                        borderRadius:"10px",
                        border:"0.5px",
                        backgroundColor:"#f1f1f1"

                    }}
                    

                    >
                        <p>Total Agents</p>
                        <span>5</span>
                    </Box>
                    <Box  className= "box1"
                         sx={{
                         width:"226px",
                         height:"104px",
                         borderRadius:"10px",
                         border:"0.5px",
                         backgroundColor:"#f1f1f1"
 
                    }}
                    >
                        <p>Total Open Tickets</p>
                        <span>2</span>
                    </Box>
                    <Box></Box>
                    <Box></Box>

                </Box>



        </Box>
           
            <Box>
               
                <Box>
                    <Box></Box>
                    <Box></Box>    
                </Box>
            </Box>

    </Box>

    );
}