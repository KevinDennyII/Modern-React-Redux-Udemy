import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video}
        />
    });

    //provps.video will be the array of different records
    return <div className="ui middle aligned divided list">{renderedList}</div>;
};

export default VideoList;
