import React, { PropTypes } from 'react';
import VideoListItem from './VideoListItem';
import { ListGroup } from 'react-bootstrap';

const SearchResults = ({videos, openModal}) => {
    const videoList = videos.map((video)=>{
        return <VideoListItem 
                    key={video.id} 
                    videoId={video.id}
                    title={video.title} 
                    videoUrl={video.link}
                    thumbnail={video.thumbnail}
                    openModal={openModal}
                    />
    });

    return (
        <ListGroup>
            {videoList}
        </ListGroup>
    )
}

SearchResults.propTypes = {
    videos: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired
}

export default SearchResults;