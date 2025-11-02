import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { workExperiences } from '../constants';


const Work = () => {
  return (
    <section className="c-space my-20" id="work">
      <p className="head-text">Work Experience</p>
      <div className = "mt-3 flex flex-col gap-3 text-white-600">
              <p>
              I've undertaken diverse roles, enhancing my skill set and collaborating with colleagues. Here's an overview of my professional experience:
              </p>
            </div>
        <div className = 'py-16'>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {workExperiences.map((experience) => (
                <VerticalTimelineElement
                  key={`${experience.name}-${experience.pos}`}
                  date={experience.duration}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.name}
                        className="w-[85%] h-[85%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{
                    background: experience.iconBg,
                    boxShadow: "0 0 10px " + experience.iconBg,
                  }}
                  contentStyle={{
                    background: "#121212",
                    color: "#EAEAEA",
                    border: "1px solid #2E2E2E",
                    borderLeft: "4px solid " + experience.iconBg,
                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">{experience.pos}</h3>
                    <p className="text-black font-medium font-base" style={{ margin: 0 }}>
                      {experience.name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points?.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>

          </div>

        </div>
    </section>
  )
}

export default Work