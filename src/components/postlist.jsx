import React from "react";
import PostItem from "./postitem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                No posts found!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                  >
                    <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;