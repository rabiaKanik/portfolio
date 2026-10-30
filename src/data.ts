// All site content

export const profile = {
  name: "Rabia Kanık",
  role: "Full Stack Software Engineer",
  location: "Ankara, Türkiye",
  tagline:
    "I build and modernize mission-critical software — from React front ends to Java and .NET services, identity platforms and hardware integrations.",
  available: true, // shows the "Open to new opportunities" badge
  email: "knkrabia@hotmail.com",
  linkedin: "https://www.linkedin.com/in/rabia-kanik/",
  //github: "https://github.com/your-username",
  cvUrl: "/cv.pdf",
};

export const about = [
  "I am a full stack software engineer with 4+ years of experience in the defence and aerospace industry, working on tactical communication systems where reliability and security are not optional.",
  "My day-to-day spans the whole stack: building React/TypeScript interfaces, designing Spring Boot and Node.js services, running large platform migrations, and integrating software with physical radio hardware. I enjoy the kind of problems that sit between systems — authentication, messaging, protocols and legacy code that needs a safe path forward.",
  "I graduated with honors in Computer Engineering from Başkent University.",
];

export const stats = [
  { value: "4+", label: "years in defence & aerospace" },
  { value: "5", label: "major platform migrations" },
  { value: "Full", label: "stack: UI → services → hardware" },
];

export type Job = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    company: "BİTES Defence & Aerospace",
    title: "Full Stack Software Engineer",
    period: "Jul 2022 — Present",
    location: "Ankara",
    summary:
      "Developing and maintaining software for tactical military communication and radio management systems.",
    points: [
      "Built full stack features across React/TypeScript front ends and Java/Spring Boot and Node.js back ends.",
      "Led the identity platform upgrade from Keycloak 15 (WildFly) to Keycloak 26 (Quarkus), including custom SPI development.",
      "Migrated Java web applications from Tomcat 8 to Tomcat 11, moving to the Jakarta EE namespace and upgrading PrimeFaces.",
      "Upgraded .NET services from .NET 5 to .NET 8 and migrated a desktop application from Java 8 to Java 17 (JPMS, PKCS#11).",
      "Integrated software with radio hardware over RS-232 serial connections and set up a physical wireless test lab.",
      "Remediated penetration test findings, hardening file upload flows against malicious content.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Node.js",
      "C# / .NET",
      "Keycloak",
      "RabbitMQ",
      "PostgreSQL",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

// Selected work
export const projects: Project[] = [
  {
    title: "Identity Platform Modernization",
    description:
      "Moved a production SSO setup across a major architectural shift (WildFly → Quarkus), porting custom authentication extensions and configuration with zero loss of functionality.",
    tags: ["Keycloak", "Java", "SPI", "OAuth2 / OIDC"],
  },
  {
    title: "Hardware Integration over Serial",
    description:
      "Added direct RS-232 connectivity between a Node.js service and tactical radios, handling native driver builds, device discovery and message framing.",
    tags: ["Node.js", "serialport", "RS-232"],
  },
  {
    title: "Jakarta EE Migration",
    description:
      "Brought a set of server-side Java applications from Tomcat 8 to 11: javax → jakarta namespace changes, dependency upgrades and PrimeFaces compatibility fixes.",
    tags: ["Tomcat 11", "Java 17", "Jakarta EE", "PrimeFaces"],
  },
  {
    title: "Secure File Upload Hardening",
    description:
      "Fixed pentest findings on archive, executable and image uploads with content validation, type checking and safe storage handling.",
    tags: ["Security", "Java", "OWASP"],
  },
  {
    title: ".NET 8 Service Upgrade",
    description:
      "Upgraded a log enrichment service from .NET 5 to .NET 8, updating dependencies and keeping behaviour stable for downstream consumers.",
    tags: ["C#", ".NET 8"],
  },
  {
    title: "VoIP Infrastructure",
    description:
      "Installed and configured Asterisk PBX with realtime database configuration and codec setup for voice communication.",
    tags: ["Asterisk", "Linux", "MariaDB"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML / CSS", "PrimeFaces"],
  },
  {
    group: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "C# / .NET", "REST APIs"],
  },
  { group: "Data & Messaging", items: ["PostgreSQL", "MariaDB", "RabbitMQ"] },
  {
    group: "Platform & Security",
    items: ["Keycloak", "Tomcat", "Asterisk PBX", "Linux", "Git"],
  },
];

export const education = {
  school: "Başkent University",
  degree: "B.Sc. in Computer Engineering — Honors",
  period: "2018 — 2022", // TODO
};
