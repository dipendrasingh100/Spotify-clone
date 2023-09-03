import React from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import { useDataLayerValue } from '../DataLayer';
import axios from 'axios';

const PlayerControls = () => {
    const [{ token, playerState }, dispatch] = useDataLayerValue()

    //requires Premium
    const changeTrack = async (type) => {
        await axios.post(`https://api.spotify.com/v1/me/player/${type}`, {}, {
            headers: {
                Authorization: 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        })

        const { data } = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {}, {
            headers: {
                Authorization: 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        })

        dispatch({
            type: 'SET_PLAYING',
            currentlyPlaying: data.item
        });
    }

    const changeState = async () => {
        const state = playerState ? "pause" : "play"
        const { data } = await axios.put(`https://api.spotify.com/v1/me/player/${state}`, {}, {
            headers: {
                Authorization: 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        })
        dispatch({
            type: 'SET_PLAYER',
            currentlyPlaying: !playerState
        });
    }
    return (
        <div className="footer_center">
            <ShuffleIcon className='footer_green' />
            <SkipPreviousIcon className='footer_icon' onClick={() => changeTrack("previous")} />
            {playerState
                ? <PauseCircleOutlineIcon className='footer_icon' fontSize='large' onClick={changeState}/>
                : <PlayCircleOutlineIcon className='footer_icon' fontSize='large' onClick={changeState}/>
            }
            <SkipNextIcon className='footer_icon' onClick={() => changeTrack("next")} />
            <RepeatIcon className='footer_green' />
        </div>
    )
}

export default PlayerControls
