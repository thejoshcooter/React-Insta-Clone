import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader';
import Post from './Post';

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.posts.map(post => {
                return <div><PostHeader /><Post /></div>
            })};
        </div>
    );
};

export default PostContainer;