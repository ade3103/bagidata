import React, {useState}from "react";
import uuid from 'react-uuid'
import { Paper, Typography } from "@material-ui/core";
import Desc from './Titledesc'
import Input from './InputForm'
import Comment from './Comment'


export default  () => {
  const [komentar, setkomentar] = useState([
    // {
    //   'id': 'ABC123',
    //   'nama': 'Ricky Ariansyah',
    //   'initial': 'RA',
    //   'komentar': 'Meluncur'
    // }
  ])


  const inputcomment = (value) => {
    const data = {
      'id': uuid(),
      'nama': 'Ricky Ariansyah',
      'initial': 'RA',
      'komentar': value
    }
    const testres = [...komentar, data]

    setkomentar(testres)
  }

  


  const handledelete = (id) => {
    alert(id)
   

    const arr = komentar.filter(function(el){
      return el.id !== id;
    });

    setkomentar(arr)

  }

  
  

const videoSrc = `https://www.youtube.com/embed/Hd9iLXCLGgQ`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: '450px', minHeight: '450px' }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>

      <Desc/>
      
      <Input
      inputcomment={inputcomment}
      />

      {
        komentar ? 
        komentar.map((data, index) => {
          return(
            <Comment value={data} index={index} handledelete={handledelete}/>
          )
        })
        : ''
      }
      
    </React.Fragment>
  );
}
