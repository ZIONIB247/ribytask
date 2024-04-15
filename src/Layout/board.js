 import {Box} from "@mui/material";
 import React from "react";
 import Nav1 from "./images/notification-2-line 1.png";
import Nav2 from "./images/question-answer-line 2.png";
import Nav3 from "./images/Group 126.png";
import Graph from "./images/graph.png";
import GraphC from "./images/graph Cont.png";
import Pic1 from "./images/card1.png";
import Pic2 from "./images/card2.png";
import Pic3 from "./images/card3.png";
import Pic4 from "./images/card4.png";



 export default function Board() {
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

                <img src={Nav3} alt="pix" />
                <img src={Nav2} alt="pix" />
                <img  src={Nav1} alt="pix" />


              <Box className="analyticsWrapper"
              >

              <h1>Analytics</h1>
               
           
            <Box className ="analyticsCard"
            sx={{
            
            }}
            >
            <Box className="Card"
            sx={{
            // width:"326px",
            // height:"104px",
            // borderRadius:"10px",
            // border:"0.5px",
            // backgroundColor:"#fff"
            }}

            >
               
               <img  src={Pic1} />

            </Box>
            <Box className="Card"
            sx={{
            // width:"326px",
            // height:"104px",
            // borderRadius:"10px",
            // border:"0.5px",
            // backgroundColor:"#fff"
            }}
            >
              <img
                
                src={Pic2}
                alt=""

               />


            </Box>
            <Box className="Card"
            sx={{
            // width:"326px",
            // height:"104px",
            // borderRadius:"10px",
            // border:"0.5px",
            // backgroundColor:"#fff"
            }}

            >
               <img
                src={Pic3}
                alt=""
               
               />

            </Box>
            <Box className="Card"
            sx={{
            // width:"326px",
            // height:"104px",
            // borderRadius:"10px",
            // border:"0.5px",
            // backgroundColor:"#fff"

            }}
            >
                <img
                   src={Pic4}
                   alt=""


                />

            </Box>
             
            </Box>
            <Box className="graphCont"
            >
              <Box
               sx={{
                width:"552px",
                height:"408px"


               }}
              >
                <img
                src={Graph}
                alt="" 
                />

              </Box>
              <Box
              sx={{
                width:"400px",
                height:"256px",
                borderRadius:"10px"
              }}
              >
                <img
                src={GraphC}
                alt="" 
                />
              </Box>
            </Box>
            </Box>
           
        </Box>
    );
    
 }