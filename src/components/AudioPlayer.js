import React from 'react';
import { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PlayButton from '@material-ui/icons/PlayArrowRounded';
import StopButton from '@material-ui/icons/StopRounded';

const useStyles = makeStyles({
    play: {
        color: 'black',
        fontSize: '40px',
        display: 'relative',
        position: 'absolute'
    },

    stop: {
        color: 'black',
        fontSize: '35px',
        display: 'relative',
        position: 'absolute'
    },

    button: {
        textAlign: 'center',
        alignContent: 'center',
        display: 'inline',
        marginLeft: '40%'
    }
})

export default function AudioPlayer(props) {
    const classes = useStyles();

    //States
    //const [isPlaying, setIsPlaying] = useState(false)

    //References
    const audioPlayer = useRef()

    function togglePlayPause() {
        //const playingStatus = isPlaying
        const audioPlayers = document.querySelectorAll('audio')
        
        //if(!playingStatus) {
            for(let i = 0; i < audioPlayers.length; i++) {
                if(!audioPlayers[i].paused) audioPlayers[i].load()
            }

            audioPlayer.current.play() 
        //}

        // else {
        //     audioPlayer.current.pause()
        //     audioPlayer.current.load()
        // }

        //setIsPlaying(!playingStatus)
    }
  
    return (
        <div className={classes.button}>
            <audio ref={audioPlayer} src={props.audio}/>
            <IconButton>   
                <PlayButton className={classes.play} onClick={togglePlayPause}/> 
            </IconButton>
        </div>
    )
}