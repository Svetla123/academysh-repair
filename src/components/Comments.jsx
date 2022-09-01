import React from "react";

export default function Comments(props) {
    return (
        <section id="about">
            <div className="rowDefault" align="center">
                <div className="three columnsCustom">
                    <img
                        className="profile-pic"
                        src={props.comment.profilepic}
                        alt="Profile Pic"
                    />
                </div>
                <div
                    className="nine columnsCustom main-col borderCustom"
                    align="center"
                >
                    <p className="comment">"{props.comment.text}"</p>
                    <div className="rowDefault">
                        <div className="columnsCustom contact-details">
                            <p className="address author-comment">
                                <span>{props.comment.author}</span>,{" "}
                                <span>{props.comment.date}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
