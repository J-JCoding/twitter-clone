import React, { useState } from 'react';
import "./Post.css";
import pfp from "../../img/test-pfp.jpg";
import { examplePost } from '../../dummydata';
import { Link } from 'react-router-dom';

function Post (props) {
    const {username, userHandle, postTime, postContent} = examplePost;

    const [postInteraction, setPostinteraction] = useState({
        comments: [],
        retweets: 0,
        favorites: 0
    })

    const updatePostInteractionCount = (e) => {
        console.log(e);
    }

    return (
        <div className='post-container'>
            <div className='pfp-container'>
                <img src={pfp} alt='user profile' />
            </div>

            <div className='post-content'>
                <p className='user-post-info'>{username} {userHandle} - {postTime}</p>
                <p className='post-text'>{postContent}</p>
            
                <div className='post-interaction'>
                    <p onClick={(e) => updatePostInteractionCount} className='post-icon'><i class="far fa-comment"></i></p>
                    <p onClick={(e) => updatePostInteractionCount} className='post-icon'><i class="fas fa-retweet"></i></p>
                    <p onClick={(e) => updatePostInteractionCount} className='post-icon'><i class="far fa-heart"></i></p>
                    <p className='post-icon'><i class="far fa-arrow-alt-circle-up"></i></p>
                </div>
            </div>
        </div>
    )
}

export default Post;