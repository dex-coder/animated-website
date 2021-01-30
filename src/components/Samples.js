import React from "react";
import Grid from "@material-ui/core/Grid";
import card1 from "./images/cardimage1.jpg";
import card2 from "./images/cardimage2.jpg";
import card3 from "./images/cardimage3.jpg";

export const Samples = () => {
  return (
    <div id="sample_section">
      <div className="sample_container">
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3} className="sample_box">
              <img src={card1} alt="" />
            <div className="sample_text">
              <h1>Conversation Design</h1>
              <p>
                I designed a chatbot personality and scripts to convert complex
                mattress fitting data into simple dialogue for a chatbot that
                guides customers in choosing the right mattress for their weight
                range
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={3} className="sample_box">
              <img src={card2} alt="" />
            <div className="sample_text">
              <h1>Conversation Design</h1>
              <p>
                I designed a chatbot personality and scripts to convert complex
                mattress fitting data into simple dialogue for a chatbot that
                guides customers in choosing the right mattress for their weight
                range
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={3} className="sample_box">
              <img src={card3} alt="" />
            <div className="sample_text">
              <h1>Conversation Design</h1>
              <p>
                I designed a chatbot personality and scripts to convert complex
                mattress fitting data into simple dialogue for a chatbot that
                guides customers in choosing the right mattress for their weight
                range
              </p>
            </div>
          </Grid>

        </Grid>
      </div>
    </div>
  );
};
