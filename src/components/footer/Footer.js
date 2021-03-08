import React from "react";
import { Grid } from "@material-ui/core";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiberManualRecordSharp } from "@material-ui/icons";
import { RiDiscordFill } from "react-icons/ri";
import { IoMdPaperPlane } from "react-icons/io";
import Discord from "../../Assets/discord.png";
import Paper from "../../Assets/paper.png";
import M from "../../Assets/M.png";
import Twitter from "../../Assets/twitter.png";
function Footer() {
  return (
    <div>
      <Grid
        container
        xs={12}
        direction="column"
        justify="center"
        className='footer'
        style={{ backgroundColor: "#0C1A2E", height: "150px" }}
      >
        <Grid item xs={24}>
          {/* <AiFillTwitterCircle color="purple" />
          <RiDiscordFill color="purple" />
          <IoMdPaperPlane color="purple" /> */}
          <img src={Discord} />

          <img src={Paper} />
          <img src={M} />
          <img src={Twitter} />
        </Grid>

        <div className="flex-center">
          <div className="footer-divider" />
        </div>

        <Grid item xs={24}>
          <p style={{ color: "white" }}> Copyright Bscience 2021</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
