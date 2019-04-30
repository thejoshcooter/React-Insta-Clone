import React from 'react';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img src={props.post.thumbnailUrl} alt={props.post.username} />
            <h2>{props.post.username}</h2>
        </div>
    );
};

export default PostHeader;