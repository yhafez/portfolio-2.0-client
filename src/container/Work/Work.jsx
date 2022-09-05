import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [works, setWorks] = useState([]);
    const [filterWorks, setFilterWorks] = useState([]);
    const [tagsList, setTagsList] = useState([]);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === "All") {
                setFilterWorks(works);
            } else {
                setFilterWorks(
                    works.filter((work) => work.tags.includes(item))
                );
            }
        }, 500);
    };

    useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query).then((data) => {
            const cleanedData = [];
            const newTagsList = [];

            a: for (let work of data) {
                for (let cleanedWork of cleanedData) {
                    if (work.title === cleanedWork.title) {
                        continue a;
                    }
                    for (let tag of work.tags) {
                        if (newTagsList.includes(tag)) continue;
                        else newTagsList.push(tag);
                    }
                }
                cleanedData.push(work);
            }

            setTagsList(newTagsList.sort());
            setWorks(cleanedData);
            setFilterWorks(cleanedData);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">
                My Creative <span>Portfolio</span>
            </h2>

            <div className="app__work-filter">
                {tagsList.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${
                            activeFilter === item ? "item-active" : ""
                        }`}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filterWorks
                    .sort((work1, work2) => work2.order - work1.order)
                    .map((work, i) => (
                        <div className="app__work-item app__flex" key={i}>
                            <div className="app__work-img app__flex">
                                {work.imgUrl && (
                                    <img
                                        src={urlFor(work.imgUrl)}
                                        alt={work.name}
                                    />
                                )}
                                {(work.projectLink || work.codeLink) && (
                                    <motion.div
                                        whileHover={{ opacity: [0, 1] }}
                                        transition={{
                                            duration: 0.25,
                                            ease: "easeInOut",
                                            staggerChildren: 0.5,
                                        }}
                                        className="app__work-hover app__flex"
                                    >
                                        {work.projectLink && (
                                            <a
                                                href={work.projectLink}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <motion.div
                                                    whileInView={{
                                                        scale: [0, 1],
                                                    }}
                                                    whileHover={{
                                                        scale: [1, 0.9],
                                                    }}
                                                    transition={{
                                                        duration: 0.25,
                                                    }}
                                                    className="app__flex"
                                                >
                                                    <AiFillEye />
                                                </motion.div>
                                            </a>
                                        )}
                                        {work.codeLink && (
                                            <a
                                                href={work.codeLink}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <motion.div
                                                    whileInView={{
                                                        scale: [0, 1],
                                                    }}
                                                    whileHover={{
                                                        scale: [1, 0.9],
                                                    }}
                                                    transition={{
                                                        duration: 0.25,
                                                    }}
                                                    className="app__flex"
                                                >
                                                    <AiFillGithub />
                                                </motion.div>
                                            </a>
                                        )}
                                    </motion.div>
                                )}
                            </div>
                            <div className="app__work-content app__flex">
                                <h4 className="bold-text">{work.title}</h4>
                            </div>
                        </div>
                    ))}
            </motion.div>
        </>
    );
};

export default AppWrap(Work, "work");
