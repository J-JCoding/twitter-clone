import React from "react";
import classes from "./Post.module.css";

// const interactionReducer = (state, action) => {
//     switch(action.type) {
//         case "UPDATE_LIKES":
//             return {...state, likes: state.likes + 1}
//         case "UPDATE_RETWEETS":
//             return {...state, retweets: state.retweets + 1}
//         default:
//             return state;
//     }
// }

// const [postInteraction, dispatch] = useReducer(interactionReducer,{
//     comments: 0,
//     retweets: 0,
//     likes: 0
// })  onClick = dispatch({type: "UPDATE_RETWEETS"})

function Post (props) {
    const {username, userHandle, postTime, postContent, comments, retweets, likes, pfp} = props.post;
    const updatePost = props.updatePost;

    function handlePostUpdate(e) {
        updatePost(e, props.post);
    }

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
                    <p className={classes['post-icon']}><i id='comments' className="far fa-comment" onClick={handlePostUpdate}></i> {comments}</p>
                    <p className={classes['post-icon']}><i id='retweets' className="fas fa-retweet" onClick={handlePostUpdate}></i> {retweets}</p>
                    <p className={classes['post-icon']}><i id='likes' className="far fa-heart" onClick={handlePostUpdate}></i> {likes}</p>
                    <p className={classes['post-icon']}><i className="far fa-arrow-alt-circle-up"></i></p>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
