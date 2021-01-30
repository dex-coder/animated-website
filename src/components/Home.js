import React from "react";
import Grid from "@material-ui/core/Grid";
import useWebAnimations from "@wellyshen/use-web-animations";
import { Navbar } from "./Navbar";



export const Home = () => {
  const animateTiming = {
      duration: 2000,
      iterations: Infinity,
      easing: 'ease-in-out',
      direction: 'alternate'
  }

  const brain = useWebAnimations({
      keyframes:{
          transform: ["translate(0,40px)"]
      },
      timing: animateTiming
  });
  return (
    <div className="home_container">
      <Navbar />
      <Grid container className="header">
        <Grid item xs={12} sm={12} md={6} lg={5} className="home_text">
            <div className="home_text">
            <h1 className="cortex">CORTEX</h1>
            <h2 className="copy">COPYWRITER</h2>
            <p className="para">
              Enhance your communications with psychology-based copywriting and
              UX writing
            </p>
            </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={7} className="home_img">
             <div className="header_images">
              <img className="transform_img" src="http://salman-project4b.surge.sh/images/Intro_Featured_Image_Empty.svg?fbclid=IwAR1Y5hswrINQYRg71oEe7f5sBHok8uTD2N0NEdZzOqgXbU44ozpSJGIhZIE" alt=" " />
              <img className="brain_img" ref={brain.ref} src="http://salman-project4b.surge.sh/images/Intro_Brain.svg?fbclid=IwAR0s8O5k4Q1ceXFF40vZeXy9LvpROikQZLLLqnz3P3ajss64iJgMZ4MEUHE"  alt=" "/>
             </div>
        </Grid>
      </Grid>
    </div>
  );
};
