import React from "react";
import Grid from "@material-ui/core/Grid";
import EmailIcon from '@material-ui/icons/Email';

export const Contact = () => {
  return (
    <div id="contact_section">
      <div className="contact_container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} className="contact_box">
            <div className="contact_text">
              <h1>Pick my <i>brain/cortex</i> and let's get <br /> started on your project</h1>
              <EmailIcon style={{ fontSize: 80 }} />
              <h3>dexcoder7@gmail.com</h3>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
