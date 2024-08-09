import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {

    const params =useParams()

    const [post, setPost] = useState({});

    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1 style={{display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'}}>You opened post: {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div style={{margin: '80px 35px 30px', 
                       padding: '10px', 
                       border: '3px solid black',
                       borderRadius: 10}}>
                        <h3 style={{margin: '10px 0', 
                            fontSize: 30, 
                            fontWeight: 900}}>{post.id}. {post.title}:</h3>
                        <div style={{fontSize: 30}}>"{post.body}"</div>
                  </div>
            }

            {isComLoading
                ? <Loader/>
                : <div style={{borderTop: '3px solid black'}}>
                    {comments.map(comm =>
                        <div style={{margin: 30, 
                             padding: '20px 10px', 
                             color: 'white', 
                             backgroundColor: 'teal', 
                             border: '3px solid black', 
                             borderRadius: 10}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                  </div>
            }
        </div>
    );
};

export default PostIdPage;