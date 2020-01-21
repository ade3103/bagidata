import React from "react";
import Linkify from 'react-linkify';
import { Paper, Container, Typography, Grid, TextField, Avatar, Button, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';


export default ({ value, index, handledelete}) => {

  return (
    <React.Fragment>
      <div style={{ marginTop: '2%' }}>
        <Grid style={{ justifyContent: "center" }} spacing={10}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={1} style={{ color: '#606C98' }}>
                <Avatar>{value.initial}</Avatar>
              </Grid>
              <Grid item xs={8}>
                <h4 style={{ margin: 0, marginTop: '0.25%', marginBottom: '0.5%' }}>{value.nama}</h4>
                <Linkify>
                  {value.komentar}
                </Linkify>
              </Grid>
              <Grid item xs={3} style={{ color: '#606C98'}}>
                <IconButton aria-label="delete" style={{float: 'right'}} onClick={() => handledelete(value.id)}> 
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </div>
      <hr style={{ borderColor: 'rgba(236, 240, 241, 0.2)' }} />
    </React.Fragment>
  );
}
