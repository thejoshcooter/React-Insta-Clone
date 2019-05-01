import React from 'react';
import './CommentSection.css'

const CommentSection = props => {
    return (
        <div className="comment-section">
            <ul>
            <li><i className="far fa-heart" /></li>
            <li><i className="fas fa-comment" /></li>
            </ul>

            <span>{props.post.likes} likes</span>

            {props.post.comments.map(index => {
                return <div className="comment"><span>{index.username}</span><p>{index.text}</p></div>
            })}
        </div>
    );
};

export default CommentSection;