import * as YoutubeAPIUtil from "../util/youtube_api_util";

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_YOUTUBE_ERRORS = "RECEIVE_YOUTUBE_ERRORS";

export const receiveVideos = videos => {
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
}

export const receiveVideo = video => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
}

export const receiveYoutubeErrors = errors => {
    return {
        type: RECEIVE_YOUTUBE_ERRORS,
        errors
    }
}

export const fetchYoutubeMostPopular = () => dispatch => {
    return YoutubeAPIUtil.youtubeMostPopular()
        .then( videos => dispatch(receiveVideos(videos)),
        errors => dispatch(receiveYoutubeErrors(errors))
        )
}