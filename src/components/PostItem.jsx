import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom"

function PostItem(props) {
    const router = useNavigate();
    return ( 
        <div className="poster">
        <div className="poster__content">
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>
                {props.post.body}
            </div>
        </div>
        <div className="poster__btn">
            <MyButton onClick={() => props.remove(props.post)} className="delete">Удалить</MyButton>
            <MyButton onClick={() => router(`${props.post.id}`)} className="delete">Открыть</MyButton>
        </div>
        </div>
    );
}

export default PostItem;