import React, { useState } from "react";
import { Grid, AppBar, Typography, Toolbar, Paper } from "@material-ui/core";
import './utils.css'
import VideoDetail from "./components/VideoDetail";


export default () => {

  return (

    <React.Fragment>
      <div style={{overflow: 'hidden', minHeight: '100vh'}}>
        <Grid style={{ justifyContent: "center" }} container spacing={10}>
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={8}>
                <VideoDetail />
              </Grid>
              <Grid item xs={4}>
                lontong
          </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );


}
