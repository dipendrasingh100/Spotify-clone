export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    selectedPlaylistId: '7dECtXgujDWnSAa67gZ5wd',
    selectedPlaylist: null,
    currentlyPlaying: null,
    playerState: false,
    // token: 'BQBGXsAPYhrp9v5J0j8F7bCul2P3BawfNl55GHQrbiJ603Ms0T5X5AU8-7-SDBZB9kmPeIAVLqxUWGEmmQo9JoyUk8lPUEPnzZFy9SRQ5O7XQfNfsCSYa450v3YKfXNBbf2RJIegfIj_iTL_0g57955ZJ6sA2duwpUNMz-POSkw8gC8VC7FNKmiQOvcIIhWQDGhHlQasHaBqPpiK'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case "SET_PLAYLIST":
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist
            }
        case "SET_PLAYLIST_ID":
            return {
                ...state,
                selectedPlaylistId: action.selectedPlaylistId
            }
        case "SET_PLAYING":
            return {
                ...state,
                currentlyPlaying: action.currentlyPlaying
            }
        case "SET_PLAYER":
            return {
                ...state,
                playerState: action.playerState
            }

        default: return state
    }
}

export default reducer