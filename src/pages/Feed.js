import { useEffect, useState } from "react";
import Post from "../components/feed/Post";
import { exampleArrayOfPosts } from "../dummydata";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-state";

function Feed(props) {
  const [posts, setPosts] = useState(exampleArrayOfPosts); //[{post}, {post2}]
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.setCurPage("Feed"));
  }, [dispatch]);

  function updatePost(e, post) {
    const postsCopy = [...posts]; //Make a copy of all the posts
    let postIndex; // This sets the index of the updated post in current array.
    const valueToUpdate = e.target.id; // The value we need to update (comments, likes, retweets)

    const postToUpdate = postsCopy.find((item, index) => {
      //Find the post we need to update in the copy of posts state.
      postIndex = index; //Set the index of the post we need to update
      return item.postId === post.postId; //Return the post we need to update, and it will be called postToUpdate
    });

    postToUpdate[valueToUpdate] = postToUpdate[valueToUpdate] + 1; //Incriment the value we need to update by 1
    postsCopy[postIndex] = postToUpdate; // Update the entire post object in the copy of posts state.
    return setPosts(postsCopy); // Update the entire posts state with a new posts array that contains the updated values
  }

  return (
    // <div className={classes.test}>
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.postId} post={post} updatePost={updatePost} />
        ))
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
}

export default Feed;
