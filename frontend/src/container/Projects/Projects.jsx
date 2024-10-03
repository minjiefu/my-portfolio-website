import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
// 把整个section放入wrapper的框架里，这样就有social media，copyright，以及右边的rotation点点
import { AppWrap, MotionWrap } from '../../wrapper';
// { urlFor, client } 连到sanity
import { urlFor, client } from '../../client';
import './Projects.scss';

const Projects = () => {


    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);

    useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query).then((data) => {
            setWorks(data);
            setFilterWork(data);
        });
    }, []);


    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === 'All') {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    };

    return (
        <>
            <h2 className="head-text">My Creative <span>Projects</span></h2>

            <div className="app__work-filter">
                {['Full Stack', 'Front-End', 'Back-End', 'Data Science', 'Machine Learning', 'Deep Learning', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
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
                {filterWork.map((work, index) => (
                    <div className="app__work-item app__flex" key={index}>
                        <div className="app__work-img app__flex">
                            <img src={urlFor(work.imgUrl)} alt={work.name} />
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                               
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
                            <p className="p-text" style={{ marginTop: 10 }}>{work.detail1}</p>
                            

                            <div className="app__work-tag app__flex">
                                <p className="p-text">{work.tags[0]}</p>
                            </div>
                        </div>

                    </div>
                ))}


            </motion.div>


        </>
    );
};

export default AppWrap(
    MotionWrap(Projects, 'app__works'),
    'projects',
    'app__primarybg',
  );
