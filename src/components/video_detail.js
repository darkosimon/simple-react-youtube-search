import React from 'react';
import AddComment from './comments/add_comment';
import CommentsList from './comments/comments_list';

const VideoDetail = ({video, onAddComment, comments}) => {

    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https:/www.youtube.com/embed/${videoId}`;

    return (
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe src={url} className='embed-responsive-item'></iframe>
            </div>
            <div className='details'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
            <div>
                <AddComment onAddComment={onAddComment} />
                <CommentsList commentList={comments} />
            </div>
        </div>
    );
};

export default VideoDetail;