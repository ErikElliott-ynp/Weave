import { connect } from "react-redux";
// import { actions } from 'spotify_actions';
import SpotifyList from "./spotify_list";

const mSTP = state => {
  return {
    tracks: state.entities.spotifyTracks,
    errors: state.errors.spotify
  };
};

const mDTP = dispatch => {
    return {

    }
}


export default connect(mSTP)(SpotifyList);
