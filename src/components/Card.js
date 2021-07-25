import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import AudioPlayer from './AudioPlayer';
import blankImage from '../img/blank.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 155,
    border: 'black',
    borderStyle: 'solid',
  },

  media: {
    height: 10,
    border: 'blue',
  },

  input: {
    borderColor: 'black',
    borderRadius: 5,
    width: '130px',
    display: 'inline',
    margin: '10px 0px 10px 10px',
    textAlign: 'center',
    opacity: '10'
  },

  image: {
    position: 'relative',
    backgroundColor: 'white',
    textAlign: 'center',
    display: 'inline-block',
    margin: '10px',
    border: 'solid'
  },

  number: {
    display: 'inline', 
    border: 'solid',
    borderRadius: '50%',
    margin: '0px 0px 0px 10px',
    padding: '3px 5px 3px 5px', 
    fontSize: '24px'
  },

  player: {

  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  const [backgroundColor, setBackgroundColor] = useState('white')
  const [answer, setAnswer] = useState(0)

  function handleInputChange(event, answer) {
    let value = event.target.value.toUpperCase()
    let answerStatus = 0

    if(value === '') answerStatus = 0
    else if (value === answer) answerStatus = 1 
    else answerStatus = -1

    setAnswer(answerStatus)
  }

  useEffect(() => {
    let finalColor = ''

    if(answer === 0) finalColor = 'white'
    else if(answer === 1 ) finalColor = 'green'
    else finalColor = 'red'

    setBackgroundColor(finalColor)
  }, [answer])

  return (
    <Card className={classes.root}>
      <CardActionArea style={{backgroundColor: backgroundColor}}>
        <CardMedia
          className={classes.media}
          style={{backgroundColor: backgroundColor}}
        />
        <span className={classes.number}>
          {props.number.toString().length === 1 ? `0${props.number.toString()}` : props.number}
          </span>

        <div className={classes.image}>
          {answer === 1 ? <img src={`${process.env.PUBLIC_URL}/assets/images/${props.image}`} alt='corretImage' width='130px' height='auto' /> 
                        : <img src={blankImage} alt='blankImage' width='130px' height='auto'/>}          
        </div>                

        <div>
          <AudioPlayer className={classes.player} audio={`${process.env.PUBLIC_URL}/assets/audio/${props.audio}`}/>
        </div>
          
        <input 
            className={classes.input} 
            onChange={(e) => handleInputChange(e, props.answer)} 
        />  


      </CardActionArea>

    </Card>
  );
}