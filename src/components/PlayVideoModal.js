import {Modal} from 'react-bootstrap';
import React, { PropTypes } from 'react';
import YouTube from 'react-youtube';

const PlayVideoModal = ({show, videoId, onHide, videoTitle}) => {
    return (
        <Modal show={show} onHide={onHide} bsSize="large">
            <Modal.Header closeButton>
                <Modal.Title>{videoTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <YouTube className="youtube-player" videoId={videoId} />  
            </Modal.Body>   
        </Modal>
    )
}

PlayVideoModal.propTypes = {
    videoTitle: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    videoId: PropTypes.string.isRequired,
    onHide: PropTypes.func.isRequired
}

export default PlayVideoModal;