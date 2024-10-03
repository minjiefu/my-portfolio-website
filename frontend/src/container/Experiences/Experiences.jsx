import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';


import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Experiences.scss';

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);
    

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';
        
        client.fetch(query).then((data) => {
            setExperiences(data);
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });

        
    }, []);

    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
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
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="app__skills-exp">
                    <p className="text">Education</p>
                    {experiences.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p className="p-text">{work.company}</p>
                                            <p className="p-text">{work.desc}</p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                    
                    
                    <p className="text">Work</p>

                    <motion.div className="app__skills-exp-item">
                            <div className="app__skills-exp-year">
                                <p className="bold-text">2014 - 2021</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for= "CPA"
                                            key= "CPA"
                                        >
                                            <h4 className="bold-text">Financial Analyst, CPA, CMA</h4>
                                            <p className="p-text">Inprocess, Inc</p>
                                            <p className="p-text">Presented data-driven solutions to support clients in financial, audit, cost, and investment strategies</p>
                                        </motion.div>
                            </motion.div>
                            
                    </motion.div>

                    <motion.div className="app__skills-exp-item">
                            <div className="app__skills-exp-year">
                                <p className="bold-text">2010 - 2012</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for= "CPA"
                                            key= "CPA"
                                        >
                                            <h4 className="bold-text">Senior Data Analyst</h4>
                                            <p className="p-text">ASL Automobile Science & Technology Co.</p>
                                            <p className="p-text">Utilized data related expertise for tasks such as data collection and preprocessing, data mining and analysis, model development, visualization and prediction</p>
                                        </motion.div>
                            </motion.div>
                            
                    </motion.div>


                
                    
                   
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Experiences, 'app__skills'),
    'experiences',
    'app__whitebg',
);
