import * as SpotifyAPIUtil from "../util/spotify_api_util";

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_SPOTIFY_ERRORS = "RECEIVE_SPOTIFY_ERRORS";
export const CLEAR_TRACKS = "CLEAR_TRACKS";


const receiveTracks = tracks => {
  return {
    type: RECEIVE_TRACKS,
    tracks: tracks.data.tracks
  };
};

const receiveTrack = track => {
  return {
    type: RECEIVE_TRACK,
    track
  };
};

export const clearTracks = () => {
  return {
    type: CLEAR_TRACKS
  };
};

const receiveSpotifyErrors = errors => {
  return {
    type: RECEIVE_SPOTIFY_ERRORS,
    errors
  };
};


export const fetchSpotifyTrack = queryString => dispatch => {
  return SpotifyAPIUtil.fetchSpotifyTrack(queryString).then(track =>
    dispatch(receiveTrack(track))
  );
}; 
