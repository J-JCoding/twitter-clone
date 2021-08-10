import React from 'react';
import { nasaImg, examplePost } from './../dummydata';

function UserFeed () {
    return (
        <div>
            {/* placeholder this should be it's own component */}
            <div className='page-header'>
                <img src={nasaImg} alt='user profile picture'/>
                <h2>Home</h2>
            </div>

            <div className='posts-container'>
                {/* List of posts will be displayed here. Maybe a posts component that is a list of post components?*/}
                {/* Example post component */}
                <div className='post'>
                    <div className='user-info'>
                        <img src={nasaImg} alt='user profile picture' />
                        <h3 className='username'>{examplePost.username}</h3>
                        <h3 className='user-handle'>{examplePost.userHandle}</h3>
                        <h3 className='post-time'>{examplePost.postTime}</h3>
                    </div>
                    <div className='post-content'>
                        <p>{examplePost.postContent}</p>
                    </div>
                </div>
            </div>


            {/* Mobile nav bar rendered here */}
            {/* Fake Nav - this should be it's own component */}
            <div className='mobile-nav'>
                <img alt='home-icon'/>
                <img alt='search-icon'/>
                <img alt='notifications-icon'/>
                <img alt='messages-icon'/>
            </div>
        </div>
    )
}

export default UserFeed;