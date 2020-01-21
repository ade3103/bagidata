import React from "react";
import Linkify from 'react-linkify';

import { Paper, Container, Typography, Grid, Avatar, Button } from "@material-ui/core";

export default () => {

  return (
    <React.Fragment>

      {/* Title */}
      <div>
        <h2 style={{ marginTop: '2.5%', fontWeight: '500' }}>
          Building a microservice with Node and React: Dynamic Routing pt.1
        </h2>
      </div>

      {/* Views  */}
      <Grid style={{ justifyContent: "center" }} spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={6} style={{ color: '#606C98' }}>
              603 x ditonton • 29 Mar 2018
            </Grid>

          </Grid>
        </Grid>
      </Grid>

      <hr style={{ borderColor: 'rgba(236, 240, 241, 0.2)' }} />


      {/* Desc */}

      <Grid style={{ justifyContent: "center" }} spacing={10}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={1} style={{ color: '#606C98' }}>
              <Avatar>H</Avatar>
            </Grid>
            <Grid item xs={8}>
              <h4 style={{ margin: 0, marginTop: '0.25%' }}>Aquent Gymnastium</h4>
              <h5 style={{ margin: 0, marginTop: '0.5%', fontWeight: '100' }}>733 subscriber</h5>
            </Grid>
            <Grid item xs={3} style={{ color: '#606C98', }}>
              <Button variant="contained" style={{ backgroundColor: '#CC0000', float: 'right', color: '#fff' }}>SUBSCRIBE</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


      {/* Desc */}

      <Grid style={{ justifyContent: "center", marginTop: '5%'}} spacing={10}>
        <Grid item xs={12}>
          <Grid container style={{ justifyContent: "center" }}>
           
            <Grid item xs={10}>
              <Linkify>
                Today we continued
              the microservice project! We worked on adding dynamic
              routing to the project, using a combination of react-router and express.
              -- Watch live at https://www.twitch.tv/irreverentmike
            </Linkify>
            </Grid>
           
          </Grid>
        </Grid>
      </Grid>

      <hr style={{ borderColor: 'rgba(236, 240, 241, 0.2)' }} />


    </React.Fragment>
  );
}
