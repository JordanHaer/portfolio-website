export interface Job {
  title: string
  websiteLink: string
  company: string
  startDate: string
  endDate: string
  description: string
  skills: string[]
}

export const jobs: Job[] = [
  {
    title: "Graduate Developer",
    websiteLink: "https://www.mkodo.com/",
    company: "mkodo",
    startDate: "Sept 2023",
    endDate: "present",
    description:
      "Developed our internal iOS desk booking app using Swift and SwiftUI with the MVVM + clean architecture. Leveraging the Microsoft Authentication Library, I implemented SSO with mkodo domain emails and MFA to enhance security and user experience. To achieve a seamless navigation experience, I harnessed Apple's NavigationStack API and built a custom session manager. Moreover, I took charge of setting up Jenkins pipelines for streamlined CI/CD processes, contributing to an efficient development workflow.",
    skills: ["Swift", "SwiftUI", "Jenkins", "Jira", "MVVM"],
  },
]
