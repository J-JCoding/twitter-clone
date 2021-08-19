import React, { useState } from 'react';
import pfp from "../../img/test-pfp.jpg";
import classes from "./CreatePost.module.css";

function CreatePost(props) {
    const [postContent, setContent] = useState({
        postContent: ''
    })

    function handleChange(e) {
        setContent({...postContent, postContent: e.target.value})
    }

    return (
        <div className={classes['create-post-container']}>
            <div className={classes['test']}>
                <div className={classes['pfp-container']}>
                    <img src={ pfp } alt='user profile' />
                </div>
                
                <div className={classes['text-area-container']}>
                    <textarea placeholder="What's happening?" value={postContent.postContent} onChange={handleChange} maxLength='140' rows='7' cols='25' className={classes['text-area']} id='text-area'/>
                </div>

                <div className={classes['icon-container']}>
                    <p><i class="far fa-image"></i></p>
                    <p><i class="fas fa-film"></i></p>
                    <p><i class="far fa-chart-bar"></i></p>
                    <p><i class="far fa-calendar"></i></p>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;