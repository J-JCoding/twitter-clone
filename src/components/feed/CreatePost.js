import React, { useState } from 'react';
import pfp from "../../img/test-pfp.jpg";
import classes from "./CreatePost.module.css";

import { NavLink } from 'react-router-dom';

function CreatePost(props) {
    const [postContent, setContent] = useState({
        postContent: '',
        charCount: 0,
    })

    const [isPosting, setIsPosting] = useState(false);

    //Acess post store / add posts and dummy data to state to actually add post to store when one is created

    function handleChange(e) {
        setContent({...postContent, postContent: e.target.value, charCount: e.target.value.length})

        if(e.target.value) {
            setIsPosting(true);
        } else {
            setIsPosting(false);
        }
    }

    function submitPost() {
        console.log(postContent);
    }

    return (
        <div className={classes['create-post-container']}>
            <div className={classes['create-post-nav']}>
                <p><NavLink to="/main/feed"><i className="fas fa-arrow-left"></i></NavLink></p>
                <button onClick={submitPost} className={classes[(isPosting ? 'active' : 'inactive')]}>Tweet</button>
            </div>

            <div>
                <div className={classes['test']}>
                    <div className={classes['pfp-container']}>
                        <img src={ pfp } alt='user profile' />
                    </div>
                    
                    <div className={classes['text-area-container']}>
                        <textarea placeholder="What's happening?" value={postContent.postContent} onChange={handleChange} maxLength='280' rows='7' cols='25' className={classes['text-area']} id='text-area'/>
                    </div>

                    <div className={classes['icon-container']}>
                        <p><i className="far fa-image"></i></p>
                        <p><i className="fas fa-film"></i></p>
                        <p><i className="far fa-chart-bar"></i></p>
                        <p><i className="far fa-calendar"></i></p>
                        <p className={classes['char-counter']}>{postContent.charCount} / 280</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;