import React, { useState } from "react";

import { Paper, Container, Typography, Grid, TextField, Button } from "@material-ui/core";

export default ({inputcomment}) => {
  const [visible, setVisible] = useState(false)
  const [comment, setcomment] = useState('')

  const handleVisible = () => {
    setVisible(true)
  }

  const handleinput = (e) => {
    setcomment(e.target.value)
  }

  const handlesubmit = () => {
    inputcomment(comment)
    setVisible(false)
    setcomment('')
  }


  return (
    <React.Fragment>
      <div style={{ marginTop: '3%', marginBottom: '5%' }}>
        <form noValidate autoComplete="off" >
          <TextField
            id="standard-multiline-static"
            label="Komentar"
            multiline
            style={{ width: '100%' }}
            rows="2"
            value={comment}
            onFocus={handleVisible}
            onChange={e => handleinput(e)}
          />

          {
            visible == true ?
              <div style={{ float: 'right' }}>
                <Button variant="contained" style={{ marginTop: '10px', marginRight: '10px' }}>Batal</Button>
                <Button variant="contained" onClick={handlesubmit} style={{ marginTop: '10px' }} disabled={comment ? false : true } color="primary">Komentar</Button>
              </div>

              : ''
          }
        </form>
      </div>
    </React.Fragment>
  );
}
