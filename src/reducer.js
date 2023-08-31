export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
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

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        case 'SET_ITEM':
            return {
                ...state,
                item: action.item,
            }

        default: return state
    }
}

export default reducer