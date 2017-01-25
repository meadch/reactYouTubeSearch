import React, { PropTypes } from 'react';
import { 
    ListGroupItem, 
    Button,
    Row,
    Col
 } from 'react-bootstrap';

const VideoListItem = ({title, videoUrl, thumbnail, openModal, videoId}) => {
    const handleClick = () => {
        openModal(videoId, title);
    }
    return (
        <Row className='video-item-row'>
            <Col 
                className='column'
                xs={12}
                sm={8} 
                md={6}
                mdOffset={2} 
                >
                <ListGroupItem header={title} onClick={handleClick}>
                    <a href={ videoUrl }>{ videoUrl }</a>
                </ListGroupItem>
            </Col>
            <Col 
                className='column'
                xsHidden
                sm={4} 
                md={3} >
                <Button bsSize="large" bsStyle="primary" onClick={handleClick}>
                    Watch
                </Button>
            </ Col>
        </Row>
    )
}

VideoListItem.propTypes = {
    title: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    videoId: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired
}

export default VideoListItem;