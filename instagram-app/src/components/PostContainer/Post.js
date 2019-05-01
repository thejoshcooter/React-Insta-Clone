import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div className="post">
            <PostHeader post={props.post} />
            <img className="featured" src={props.post.imageUrl} alt="" />
            <CommentSection post={props.post} />
        </div>
    );
};

export default Post;