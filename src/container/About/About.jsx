import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.scss";

const abouts = [
    {
        title: "Front End Development",
        description:
            "I am experienced with React, TypeScript, MaterialUI, Bootstrap, SCSS, SPA development, and other front end technologies",
        imgURL: images.about01,
    },
    {
        title: "Back End Development",
        description:
            "I am experienced with Node.JS and Express, REST API's, web sockets, GraphQL, and other back end technologies.",
        imgURL: images.about02,
    },
    {
        title: "Quality Assurance",
        description:
            "I have experience writing automated unit tests with Jest, Enzyme, and Mocha, automated integration tests with Selenium, and manual tests with Zephyr.",
        imgURL: images.about03,
    },
    {
        title: "Automation",
        description:
            "I have experience automating git hooks with husky, CI/CD pipelines with GitHub Actions and Travis CI, and containerizing applications with Docker.",
        imgURL: images.about04,
    },
];

const About = () => {
    return (
        <>
            <h2 className="head-text">
                I Know That <span>Good Apps</span>
                <br />
                Means <span>Good Business</span>
            </h2>

            <div className="app__profiles">
                {abouts.map((about, i) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: "tween" }}
                        className="app__profile-item"
                        key={about.title + i}
                    >
                        <img src={about.imgURL} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>
                            {about.title}
                        </h2>
                        <h2 className="bold-text" style={{ marginTop: 10 }}>
                            {about.description}
                        </h2>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default About;
