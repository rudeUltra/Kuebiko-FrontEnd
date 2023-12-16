import React from "react";
import BottomOfComment from "./bottomOfComment";


export default function Comment({ image, userName, content, dateOfComment }) {
    return (
        <div className="card p-2 mt-2">
            <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                    <img src={image} width="30" className="user-img rounded-circle mr-2" alt="ImageOrPic" />
                    <span>
                        <small className="font-weight-bold text-primary"> {userName} </small>
                        <small className="font-weight-bold">{content} </small>
                    </span>
                </div>
                <small> {dateOfComment} </small>
            </div>
            <BottomOfComment />
        </div>
    );
}