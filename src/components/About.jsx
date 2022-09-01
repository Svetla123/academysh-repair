import React from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { display } from "@mui/system";
import meetingPicture from "../image/meetingPicture.jpg";
import testPicture from "../image/testPicture.jpg";
import progresPicture from "../image/progressPicture.jpg";
export default function About() {
    return (
        <section id="resume">
            <EmojiObjectsIcon
                style={{
                    height: "80px",
                    width: "80px",
                    display: "inline",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "0px",
                }}
            />
            <h3 className="learn-more-header">What is Academysh?</h3>
            <div className="twelve columns academysh-paragraph">
                Academysh is a web site relesed in 2022. and so far has over{" "}
                <span className="about-academysh">300.000</span> users over the
                world. It connects people from another contries by what they
                love, academy. So we can specify Academysh as{" "}
                <span className="about-academysh">platform</span> where
                preofessor and students can communicate and much more.
            </div>

            <div className="rowDefault education" align="center">
                <div className="three columnsCustom header-col">
                    <img
                        src={meetingPicture}
                        alt="Meeting image"
                        className="picture-about"
                    />
                </div>

                <div className="nine columnsCustom main-col about-descr">
                    <div className="rowDefault itemCustom">
                        <div className="twelve columnsCustom">
                            <h4>
                                Considering meeting a important in these days,
                                so we take care about creating easy and fest
                                meeting where professors call out a meeting and
                                students will know.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rowDefault work" align="center">
                <div className="three columnsCustom header-col">
                    <img
                        src={testPicture}
                        alt="Meeting image"
                        className="picture-about"
                    />
                </div>

                <div className="nine columnsCustom main-col about-descr">
                    <div className="rowDefault itemCustom">
                        <div className="twelve columnsCustom">
                            <h4>
                                Like profesorss can create a meeting, also like
                                that they can create a tests for students. Test
                                has his description, his time, points and
                                more... Student can submit solutions and get a
                                grade.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rowDefault skill" align="center">
                <div className="three columnsCustom header-col">
                    <img
                        src={progresPicture}
                        alt="Meeting image"
                        className="picture-about"
                    />
                </div>

                <div className="nine columnsCustom main-col about-descr">
                    <div className="rowDefault itemCustom">
                        <div className="twelve columnsCustom">
                            <h4>
                                Full control over the students. And they can
                                track their grades, arrivals and other
                                statistics.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
