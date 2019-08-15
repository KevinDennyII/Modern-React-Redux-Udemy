import React from 'react';

const VideoDetail = ({ video }) => {
    // null check for video
    if (!video) {
        return <div>Loading...</div>;
    }

    return <div>{video.snippet.title}</div>;
};

export default VideoDetail;

