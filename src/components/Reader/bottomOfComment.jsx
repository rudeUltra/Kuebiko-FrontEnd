import React from "react";
// import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BottomOfComment() {
    return (
        <div className="action d-flex justify-content-between mt-2 align-items-center">
            <div className="reply px-4">
                <small>Remove</small>
                <span className="dots" />
                <small>Reply</small>
                <span className="dots" />
                <small>Translate</small>
            </div>
            <div className="icons align-items-center">
                {/* <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faCheckCircle} /> */}
                <i className="fa fa-star text-warning" />
                <i className="fa fa-check-circle-o check-icon" />
            </div>
        </div>
    );
}

// 