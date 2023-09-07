import React from 'react'
import "../css/footer.css"
import { Grid } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import CurrentTrack from './CurrentTrack';
import PlayerControls from './PlayerControls';
import { useDataLayerValue } from '../DataLayer';
import axios from 'axios';

const Footer = () => {
    // const [{ token }] = useDataLayerValue()
    const token = window.sessionStorage.getItem("token")

    const setVolume = async (e) => {
        await axios.put("https://api.spotify.com/v1/me/player/volume", {}, {
            headers: {
                params: { volume_percent: e.target.value },
                Authorization: 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        })
    }
    return (
        <div className='footer'>
            <CurrentTrack />

            <PlayerControls />

            <div className="footer_right">
                <Grid container spacing={2} style={{ alignItems: "center" }}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        {/* <Slider aria-labelledby="continuous-slider" size="small" onMouseUp={setVolume} /> */}
                        <input type="range" onMouseUp={setVolume} className='vol-slider' />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
