import React from "react";

export default function Footer(props) {
    if (props) {
        var socialElements = props.social.map(function (network) {
            return (
                <li key={network.name}>
                    <a href={network.url}>
                        <i className={network.className}></i>
                    </a>
                </li>
            );
        });
    }

    return (
        <footer className="footer-div footer-landing">
            <div className="rowDefault">
                <div className="twelve columns">
                    <ul className="social-links">{socialElements}</ul>
                    <ul className="copyright">
                        {" "}
                        <p>Academysh 1.0.</p>
                    </ul>

                    <ul className="copyright">
                        <li>&copy; Copyright 2022 Luka Svetlečić</li>
                        <li>
                            Created by{" "}
                            <a title="Styleshout" href="https://reactjs.org/">
                                React
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="go-top">
                    <a
                        className="smoothscroll"
                        title="Back to Top"
                        href="#home"
                    >
                        <i className="icon-up-open"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
