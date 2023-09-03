import React from 'react'
import "../css/footer.css"
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import CurrentTrack from './CurrentTrack';
import PlayerControls from './PlayerControls';

const Footer = () => {
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
                        <Slider aria-labelledby="continuous-slider" size="small" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
