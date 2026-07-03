// Single source of truth for all job listings on the site.
// jobs.html / index.html link to job-details.html?id=N and apply.html?id=N
// using the ids below, so every page shows consistent, correct data for
// whichever job the user actually clicked - instead of job-details.html
// always showing the same hardcoded "Frontend Developer at Google".
const JOBS = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Google",
        location: "Hyderabad",
        type: "Full Time",
        category: "Software Development",
        salaryLpa: 8,
        experience: "1-3 Years",
        posted: "2026-07-01",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        description: "We are looking for a passionate Frontend Developer to build modern web applications using HTML, CSS, and JavaScript. You will work with UI teams to create responsive and user-friendly interfaces.",
        responsibilities: [
            "Build responsive web pages",
            "Work with APIs",
            "Improve UI performance",
            "Collaborate with backend team"
        ],
        requirements: ["HTML, CSS, JavaScript", "React (optional)", "Good problem solving skills"],
        companyBlurb: "Google is one of the world's leading tech companies focusing on search, AI, and cloud computing."
    },
    {
        id: 2,
        title: "Java Developer",
        company: "Microsoft",
        location: "Bengaluru",
        type: "Remote",
        category: "Software Development",
        salaryLpa: 10,
        experience: "3-5 Years",
        posted: "2026-07-03",
        skills: ["Java", "Spring Boot", "MySQL", "AWS"],
        description: "Join our cloud platform team to build scalable backend services in Java and Spring Boot. You'll work in a fully remote team shipping features used by millions of Azure customers.",
        responsibilities: [
            "Design and build REST APIs with Spring Boot",
            "Write clean, tested, maintainable Java code",
            "Work with cloud infrastructure on Azure",
            "Participate in code reviews and design discussions"
        ],
        requirements: ["3+ years with Java and Spring Boot", "Experience with MySQL or similar RDBMS", "Familiarity with AWS or Azure"],
        companyBlurb: "Microsoft builds the platforms and tools that empower people and organizations worldwide."
    },
    {
        id: 3,
        title: "Backend Developer",
        company: "Amazon",
        location: "Chennai",
        type: "Hybrid",
        category: "Software Development",
        salaryLpa: 9,
        experience: "3-5 Years",
        posted: "2026-07-02",
        skills: ["Java", "Spring", "REST API", "SQL"],
        description: "Build and maintain backend services powering Amazon's order fulfillment systems. This is a hybrid role, 3 days a week in our Chennai office.",
        responsibilities: [
            "Develop and maintain REST APIs",
            "Optimize SQL queries for high-throughput systems",
            "Own services end-to-end in production",
            "Collaborate with cross-functional teams"
        ],
        requirements: ["Strong Java and Spring fundamentals", "Experience with relational databases (SQL)", "Comfortable with on-call rotations"],
        companyBlurb: "Amazon is a global leader in e-commerce and cloud computing, operating at massive scale."
    },
    {
        id: 4,
        title: "UI / UX Designer",
        company: "TCS",
        location: "Pune",
        type: "Full Time",
        category: "UI / UX Design",
        salaryLpa: 6,
        experience: "1-3 Years",
        posted: "2026-06-30",
        skills: ["Figma", "Adobe XD", "UI", "UX"],
        description: "Design intuitive, accessible interfaces for enterprise clients across banking, retail, and healthcare. You'll own the design process from wireframes to high-fidelity prototypes.",
        responsibilities: [
            "Create wireframes, prototypes, and high-fidelity mockups",
            "Conduct basic usability reviews with stakeholders",
            "Maintain and extend the design system",
            "Partner closely with frontend developers on handoff"
        ],
        requirements: ["Portfolio showing UI/UX work", "Proficiency in Figma or Adobe XD", "Basic understanding of accessibility principles"],
        companyBlurb: "TCS is one of India's largest IT services companies, delivering technology solutions worldwide."
    },
    {
        id: 5,
        title: "Data Analyst",
        company: "Infosys",
        location: "Hyderabad",
        type: "Remote",
        category: "Data Science",
        salaryLpa: 7,
        experience: "Fresher",
        posted: "2026-07-02",
        skills: ["Excel", "SQL", "Power BI", "Python"],
        description: "Entry-level Data Analyst role for someone who loves turning raw data into decisions. You'll build dashboards and reports used directly by client-facing teams.",
        responsibilities: [
            "Write SQL queries to extract and clean data",
            "Build dashboards in Power BI",
            "Support ad-hoc analysis requests from stakeholders",
            "Document data definitions and report logic"
        ],
        requirements: ["Comfortable with SQL and Excel", "Basic Python for data work is a plus", "Strong attention to detail"],
        companyBlurb: "Infosys is a global leader in next-generation digital services and consulting."
    },
    {
        id: 6,
        title: "Software Engineer",
        company: "Wipro",
        location: "Noida",
        type: "Internship",
        category: "Software Development",
        salaryLpa: 5,
        experience: "Fresher",
        posted: "2026-07-03",
        skills: ["Java", "OOP", "Git", "MySQL"],
        description: "6-month internship for final-year students or recent graduates to work on real production Java applications alongside a mentor.",
        responsibilities: [
            "Write and test Java code under mentorship",
            "Fix bugs and small feature tickets",
            "Learn Git-based collaborative workflows",
            "Present work in weekly team demos"
        ],
        requirements: ["Solid grasp of Java and OOP fundamentals", "Familiarity with Git", "Currently pursuing or recently completed a CS degree"],
        companyBlurb: "Wipro is a leading global information technology, consulting, and business process services company."
    }
];

function getJobById(id) {
    return JOBS.find(job => job.id === Number(id));
}
