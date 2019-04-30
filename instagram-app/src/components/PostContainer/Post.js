import React from 'react';
import PostHeader from './PostHeader';

const Post = props => {
    return (
        <div className="post">
            <PostHeader post={props.post} />
            <img className="featured" src={props.post.imageUrl} alt="" />
        </div>
    );
};

export default Post;