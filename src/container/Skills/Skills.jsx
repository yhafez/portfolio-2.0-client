import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import PortableText from "react-portable-text";

import { MotionWrap, AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Skills.scss";

const Skills = () => {
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query).then((data) => {
            const cleanedData = [];

            a: for (let experience of data) {
                for (let cleanedExperience of cleanedData) {
                    if (experience.year === cleanedExperience.year) {
                        continue a;
                    }
                }
                cleanedData.push(experience);
            }
            setExperience(
                cleanedData.sort((data1, data2) => data2.year - data1.year)
            );
        });

        client.fetch(skillsQuery).then((data) => {
            const cleanedData = [];

            a: for (let skill of data) {
                for (let cleanedSkill of cleanedData) {
                    if (skill.name === cleanedSkill.name) {
                        continue a;
                    }
                }
                cleanedData.push(skill);
            }
            setSkills(cleanedData);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Skills & Experience</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills?.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                {urlFor(skill.icon) && (
                                    <img
                                        src={urlFor(skill.icon)}
                                        alt={skill.name}
                                    />
                                )}
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="app__skills-exp">
                    {experience?.map((experience, i) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience?.works
                                    ?.sort(
                                        (work1, work2) =>
                                            work2.order - work1.order
                                    )
                                    .map((work, j) => (
                                        <div key={work.name + i + j}>
                                            <motion.div
                                                whileInView={{
                                                    opacity: [0, 1],
                                                }}
                                                transition={{ duration: 0.5 }}
                                                className="app__skills-exp-work"
                                                data-tip
                                                data-for={work.name + i + j}
                                                onClick={() =>
                                                    console.log(work.desc)
                                                }
                                            >
                                                <h4 className="bold-text">
                                                    {work.name}
                                                </h4>
                                                <p className="p-text">
                                                    {work.company}
                                                </p>
                                            </motion.div>
                                            <ReactTooltip
                                                id={work.name + i + j}
                                                effect="solid"
                                                arrowColor="#fff"
                                                className="skills-tooltip"
                                                place="bottom"
                                            >
                                                <PortableText
                                                    content={work.desc}
                                                />
                                            </ReactTooltip>
                                        </div>
                                    ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, "app__skills"),
    "skills",
    "app__whitebg"
);
