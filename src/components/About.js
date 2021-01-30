import React from "react";
import Grid from "@material-ui/core/Grid";
import profile from "./images/profile.svg";

export const About = () => {
  return (
    <div id="about_section">
      <div className="about_container">
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="about_img">
              <img src={profile} alt=" " />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className="about_box">
            <div className="about_text">
              <h1>About</h1>
              <p>
                My copywriting and UX writing draws on abilities developed in
                the psychological sciences.
              </p>
              <p>
                Expertise in visual perception, behavioral motivation, and
                decision-making allows me to engineer words that convert
                customers and guide users.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
