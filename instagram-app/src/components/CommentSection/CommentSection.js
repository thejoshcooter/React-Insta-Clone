import React from 'react';
import './CommentSection.css'
import moment from 'moment';

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

            <span className="timestamp">{props.post.timestamp}</span>

            <CommentField />
        </div>
    );
};



const CommentField = () => {
    return (
        <div className="comment-field">
            <textarea type="text" placeholder="add a comment..." />
            <button>Post</button>
        </div>
    );
};

export default CommentSection;