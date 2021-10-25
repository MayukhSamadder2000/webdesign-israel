import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import { projectList } from "../../projects/projectlist";
import "./Project.scss";

function Project() {
  let history = useHistory();
  const location = useLocation();

  // const [currentProject, setCurrentProject] = useState({});
  let currentProject = {};
  // if (!location.state.project) {
  //   history.push("/");
  // }
  // const { project } = location.state;
  // console.log(project);
  // if (location.state == undefined) {
  //   history.push("/");
  // } else if (project >= projectList.length || project < 0) {
  //   currentProject = projectList[0];
  // } else {
  //   currentProject = projectList[project];
  // }

  let params = useParams();
  console.log(params);
  if (params.id <= projectList.length && params.id > 0) {
    currentProject = projectList[params.id - 1];
  } else {
    currentProject = projectList[0];
  }

  console.log("the current project is", currentProject);

  const [openTop, setOpenTop] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpenTop(true);
    }, 1000);
  }, []);

  return (
    <div className='project'>
      {openTop && <GoToTop />}

      {openTop && (
        <div className='project__image__container'>
          <div className='project__image__content'>
            <motion.div
              initial={{
                translateY: "100px",
              }}
              animate={{
                translateY: 0,
              }}
              className='heading'
            >
              {currentProject.title}
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              }}
              className='text'
            >
              {currentProject.task.map((item, index) => {
                if (index == currentProject.task.length - 1) {
                  return <span key={index}>{item}</span>;
                } else {
                  return <span key={index}>{item}-</span>;
                }
              })}
            </motion.div>
            <div className='project__image__item'>
              <motion.img
                initial={{
                  scale: 1.7,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.6,
                }}
                className
                src={currentProject.imageOne}
                alt=''
              />
            </div>
          </div>
        </div>
      )}

      {openTop && (
        <div className='project__container'>
          <div className='project__overview'>
            <div className='project__overview__heading'>Project Overview</div>
            <div className='project__overview__content'>
              <div className='left'>
                <div className='pair'>
                  <div className='heading'>CLIENT</div>
                  <div className='text'>{currentProject.client}</div>
                </div>
                <div className='pair'>
                  <div className='heading'>BRAND</div>
                  <div className='text'>{currentProject.brand}</div>
                </div>
                <div className='pair'>
                  <div className='heading'>TECH STACK</div>
                  <div className='text'>
                    {currentProject.techStack.map((item, index) => {
                      return (
                        <div className='text' key={index}>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='heading'>{currentProject.catchPhraseOne}</div>
                <div className='content'>
                  {currentProject.baseDescription.map((item, index) => {
                    return (
                      <div className='text' key={index}>
                        {item}
                      </div>
                    );
                  })}
                </div>
                <a href={currentProject.link} target='_blank'>
                  Visit website
                </a>
              </div>
            </div>
          </div>
          <div className='project__underway'>
            <div className='project__underway__image'>
              <img src={currentProject.imageTwo} alt='' />
            </div>
            <div className='project__underway__content'>
              <div className='heading'>{currentProject.catchPhraseTwo}</div>
              <div className='text'>{currentProject.extraDescription}</div>
            </div>
          </div>
          <div className='project__end'>
            <div className='project__end__home'>
              <Link to='/'>Return Home</Link>
            </div>
          </div>
        </div>
      )}
      {openTop && <Footer />}
    </div>
  );
}

export default Project;
