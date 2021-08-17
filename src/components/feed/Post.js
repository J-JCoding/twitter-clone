import React, { useState, useReducer } from 'react';
import classes from "./Post.module.css";
import pfp from "../../img/test-pfp.jpg";
import { examplePost } from '../../dummydata';
import { Link } from 'react-router-dom';

const interactionReducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_LIKES":
            return {...state, likes: state.likes + 1}
        case "UPDATE_RETWEETS":
            return {...state, retweets: state.retweets + 1}
        default:
            return state;
    }
}

function Post (props) {
    const {username, userHandle, postTime, postContent} = examplePost;

    const [postInteraction, dispatch] = useReducer(interactionReducer,{
        comments: [],
        retweets: 0,
        likes: 0
    })

    return (
        <div className={classes['post-container']}>
            <div className={classes['pfp-container']}>
                <img src={pfp} alt='user profile' />
            </div>

            <div className={classes['post-content']}>

                <div>
                    <p className={classes['user-post-info']}>{username} <span className={classes['user-post-handle']}>{userHandle} - {postTime}</span></p>
                </div>

                <div>
                    <p>{postContent}</p>
                </div>
            
                <div className={classes['post-interaction']}>
                    <p className={classes['post-icon']}><i id='comment' className="far fa-comment"></i></p>
                    <p className={classes['post-icon']}><i id='retweets' className="fas fa-retweet" onClick={() => dispatch({type: "UPDATE_RETWEETS"})}></i> {postInteraction.retweets}</p>
                    <p className={classes['post-icon']}><i id='likes' className="far fa-heart" onClick={() => dispatch({type: "UPDATE_LIKES"})}></i> {postInteraction.likes}</p>
                    <p className={classes['post-icon']}><i className="far fa-arrow-alt-circle-up"></i></p>
                </div>

            </div>
        </div>
    )
}

export default Post;