import { workExperiences } from '../constants';

const Work = () => {
  return (
    <section className="c-space mt-20" id="work">
      <p className="head-text text-center">
        <text className="text-[#FFFFFF] fill-foreground text-[70px]" width="500">
              Work Experience
        </text>
      </p>

      <div className="mt-12 max-w-3xl mx-auto">
        {workExperiences.map((experience) => (
          <div key={`${experience.name}-${experience.pos}`} className="relative flex pb-10 last:pb-0">
            <div className="relative w-[110px] shrink-0 flex justify-end pr-4">
              <span className="font-mono text-sm text-white-500 text-right whitespace-nowrap">{experience.duration}</span>
              <span className="absolute top-1 right-0 translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
            </div>

            <div className="absolute left-[110px] top-0 bottom-0 w-px bg-black-300" />

            <div className="pl-8 max-w-[620px]">
              {experience.featured ? (
                <>
                  <h3 className="font-display text-2xl text-white-800">{experience.pos}</h3>
                  <p className="text-white-500 mt-1">
                    {experience.name}
                    {experience.location ? `, ${experience.location}` : ''}
                  </p>
                  <p className="text-accent text-lg font-medium mt-3">{experience.headline}</p>
                  {experience.narrative && (
                    <p className="text-white-500/70 text-sm mt-3 max-w-[620px]">{experience.narrative}</p>
                  )}
                  <ul className="mt-4 space-y-2 list-disc ml-5">
                    {experience.points?.map((point, index) => (
                      <li key={`experience-point-${index}`} className="text-white-500 text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-white-500 text-sm">
                  <span className="text-white-800">{experience.pos}</span> — {experience.name} — {experience.result}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
