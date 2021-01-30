import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import image1 from "./images/image1.svg";
import image2 from "./images/image2.svg";
import image3 from "./images/image3.svg";

import "aos/dist/aos.css";
import Aos from "aos";

import useWebAnimations from "@wellyshen/use-web-animations";

export const Services = () => {
  const animateTiming = {
    duration: 2000,
    iterations: Infinity,
    easing: "ease-in-out",
    direction: "alternate",
  };

  const move1 = useWebAnimations({
    keyframes: {
      transform: ["translate(0,30px)"],
    },
    timing: animateTiming,
  });

  const move2 = useWebAnimations({
    keyframes: {
      transform: ["translate(0,30px)"],
    },
    timing: animateTiming,
  });

  const move3 = useWebAnimations({
    keyframes: {
      transform: ["translate(0,30px)"],
    },
    timing: animateTiming,
  });

  useEffect(() => {
    Aos.init({
        duration: 2000,
        once: true,
        easing:"ease-in-out",
    });
}, [])

  return (
    <div className="container">
      <div className="services_container">
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="service_img">
              <img src={image1} ref={move1.ref} alt=" " />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className="service_box">
            <div className="service_text">
              <h1>UX Writing</h1>
              <p>
                I develop clear and useful text in product interfaces to help
                users reach a specific goal, whether that's completing a form or
                tapping a button. This includes every type of content from
                on-screen help systems, user onboarding and in-app messages to
                push notifications and tooltips.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className="service_box">
            <div className="service_text">
              <h1>Website Copywriting</h1>
              <p>
                Your website is a dialogue with your audience. I capture the
                essence of your business and communicate it clearly. Carefully
                considered writing and SEO best practices allow me to craft the
                perfect user journey online. Let me draw the map that guides
                users every step of the way from discovery, to consideration, to
                conversion.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="service_img">
              <img src={image2} ref={move2.ref} alt=" " />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="service_img">
              <img src={image3} ref={move3.ref} alt=" " />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className="service_box">
            <div className="service_text">
              <h1>Content Writing</h1>
              <p>
                Give your business a competitive edge with powerful content that
                can be targeted to any segment of your audience. No matter how
                large or complex your project, my custom-built solutions
                including articles, eDMs, and case studies will help you
                implement a plan that maximizes your business’s online exposure.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
