import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectList } from "../../projects/projectlist";
import "./ProjectGrid.scss";

function ProjectGrid() {
  const [pageFull, setPageFull] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (pageFull === false) {
      const tempProject = projectList.filter((item, index) => {
        if (index < projectList.length / 2) {
          return item;
        }
      });
      setProjects(tempProject);
    }
  }, [pageFull]);

  const setProjectsFull = (e) => {
    e.preventDefault();
    setProjects(projectList);
    setPageFull(true);
  };

  return (
    <div>
      <div className='projectgrid' id='works'>
        <div className='projectgrid__container'>
          <div className='heading'>Our Work</div>
          <div className='projectgrid__container__content'>
            {projects.map((item, index) => {
              return (
                <div className='column' key={index}>
                  <Link
                    to={{
                      pathname: `project/${item.id}`,
                      state: {
                        project: index,
                      },
                    }}
                  >
                    <div className='card'>
                      <div className='image'>
                        <img src={item.imageOne} alt='' />
                      </div>
                      <div className='heading'>{item.title}</div>
                      <div className='description'>{item.catchPhraseOne}</div>
                    </div>
                  </Link>
                </div>
              );
            })}

            <div className='column'></div>
          </div>
          <div className='projectgrid__container__button'>
            {!pageFull && (
              <button className='fat-btn' onClick={(e) => setProjectsFull(e)}>
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectGrid;
