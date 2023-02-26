import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetching from '../hooks/useFetching';
import PostServices from "../API/PosrServices";
import MyLoader from "../components/UI/loader/MyLoader";

function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostServices.getById(id);
        setPost(response.data)
    })

    const [fetchCommentById, isCommentLoading, errorComment] = useFetching( async (id) => {
        const response = await PostServices.getCommentsById(id);
        setComments(response.data)
    })


    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentById(params.id)
    }, [])

    return (
        <div>
            <h1>Вы попали на страницу поста {params.id}</h1>
            {
                isLoading 
                ? <MyLoader/>
                :<div>{post.id}. {post.title}</div>   
            }
            <h1>Комментарии</h1>
            {
                isCommentLoading
                ? <MyLoader/>
                : <div>
                    {
                        comments.map(comm =>
                                <div key={comm.id} style={{marginTop: '15px'}}>
                                    <h5>{comm.email}</h5>
                                    <div>{comm.body}</div>
                                </div>
                            )
                    }
                </div>
            }
        </div>
    );
}

export default PostIdPage;