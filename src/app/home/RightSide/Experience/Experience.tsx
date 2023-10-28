import JobCard from "./JobCard";
import jobs from "../../../data/jobs.json";
import View from "../View";

export default function Experience() {
  return (
    <section id="experience" aria-label="Work experience">
      <div className="pt-20 lg:pt-24">
        <h2 className="pb-6 text-4xl font-bold leading-tight tracking-tight text-slate-200 sm:pb-8 lg:pb-12 lg:pt-2 lg:text-5xl">
          Experience
        </h2>
        <ul className="group/list">
          {jobs.map((job) => (
            <JobCard
              key={job.title}
              title={job.title}
              websiteLink={job.websiteLink}
              company={job.company}
              description={job.description}
              startDate={job.startDate}
              endDate={job.endDate}
              skills={job.skills}
            />
          ))}
        </ul>
        <View href={"https://linkedin.com/in/JordanHaer"} label={"View LinkedIn"} />
      </div>
    </section>
  );
}
