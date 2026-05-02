import React from 'react';

import './home.scss';
import {
    Award,
    Briefcase,
    Cloud,
    Code2,
    Database,
    Layers, Mail,
    MapPin, PhoneCall,
    Terminal,
    TrendingDown
} from "lucide-react";
import {Statics} from "./statics";

const styles = {
    container: 'home__container',
    header_content: 'home__container-header-content',
    header_container: 'home__container-header-container',
    card: 'home__container-card',
    experience_card: 'home__container-experience_card',

    language_container: 'home__container-language-container',
    language_tag_container: 'home__container-language-tagContainer',
    language_tag: 'home__container-language-tag',
    language_card: 'home__container-language-card',
    card_container: 'home__container-card-container',
    achievements:'home__container-achievements',
    achievements_tag: 'home__container-achievements-tag',
    achievements_tag_container: 'home__container-achievements-tagContainer',
    achievements_layer: 'home__container-achievements-layer',
    contact_details: 'home__container-contact-details',
    tag: 'home__container-tag-content',
    tag_container: 'home__container-tag-container',
    section: 'home__container-education-section',
    section_container: 'home__container-education-container',
    section_card: 'home__container-education-card',
    title: 'home__container-education-title',
    grid: 'home__container-education-grid',
    sub_text: 'home__container-education-sub_text',
    date: 'home__container-education-date',
    badge_img: 'home__container-education-badge_img',
    link: 'home__container-education-link',
    link_icon: 'home__container-education-link_icon',
    card_header: 'home__container-education-card-header',
    icon_box: 'home__container-education-icon_box',
    icon: 'home__container-education-icon',
    meta_info: 'home__container-education-meta_info',
    centered: 'home__container-education-card-centered'

}

const skills = {
    languages: ['Java', 'TypeScript', 'Node.js', 'SQL', 'React'],
    backend: ['Spring Boot', 'Spring Security', 'RESTful APIs', 'Microservices', 'AWS Lambda'],
    frontend: ['React', 'Micro Frontends (MFE)', 'Webpack Module Federation', 'Context API', 'Web Components'],
    cloud: ['AWS (Certified)', 'EKS', 'Docker', 'Kubernetes', 'CI/CD (GoCD, SAM)'],
    databases: ['PostgreSQL', 'Cassandra', 'DynamoDB'],
    testing: ['JUnit', 'Mockito', 'Jest', 'Sinon']
};

const achievements = [
    {
        title: 'Full-Stack Campaign Tool',
        description: 'Architected internal tool using Node.js and React, automating promotion setups and reducing manual configuration effort by 60%',
        tech: ['Node.js', 'React', 'TypeScript'],
        impact: '60% efficiency gain'
    },
    {
        title: 'Serverless Architecture',
        description: 'Designed scalable serverless systems using AWS Lambda, API Gateway, and DynamoDB',
        tech: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
        impact: '40% cost reduction'
    },
    {
        title: 'Micro Frontend Architecture',
        description: 'Engineered MFE architecture using Webpack Module Federation, enabling independent team deployments',
        tech: ['Webpack', 'Module Federation', 'React'],
        impact: 'Independent deployments'
    },
    {
        title: 'Spring Boot Migration',
        description: 'Spearheaded migration of legacy Java monoliths to Spring Boot microservices on AWS EKS',
        tech: ['Spring Boot', 'AWS EKS', 'Kubernetes'],
        impact: '90%+ code coverage'
    },
    {
        title: 'Event-Driven Pipelines',
        description: 'Developed event-driven pipelines using AWS EventBridge, SQS, and SNS for asynchronous processing',
        tech: ['EventBridge', 'SQS', 'SNS'],
        impact: 'Improved resilience'
    },
    {
        title: 'BFF Layer Implementation',
        description: 'Built Backend-for-Frontend layer for MyEvive platform optimizing API response times',
        tech: ['Node.js', 'TypeScript', 'AWS'],
        impact: 'Optimized response times'
    }
];


const getDesc = () => {
    return (<>
        <h1>{Statics.name}</h1>
        <h2>{Statics.role}</h2>
        <p>{Statics.description}</p>
    </>)
}

const getTextWithTag = (header: string, desc: string, icon: React.ReactNode) => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'anchor-center', gap: '1.5rem',}}>
                {icon}
                <div>
                <h3 style={{ color: '#ffffff', fontSize: '1.125rem', fontWeight: 600 }}>{header}</h3>
                <p style={{
                    marginLeft: '1.75rem',
                    color: '#94a3b8',
                    fontSize: '0.9375rem',
                    lineHeight: '1rem',
                    fontWeight: 400
                }}>
                    {desc}
                </p>
                </div>
            </div>

        </>
    );
}

export const  getContactDetails = ( desc: string, icon: React.ReactNode) => {
    return (<div className={styles.contact_details}>
        {icon}
        <p>{desc}</p>
    </div>);
}

const Home = (): React.ReactElement => {
    const getHeaderContent = () => {
        return <div className={styles.header_content}>
            {getDesc()}
            {contactDetails()}
        </div>
    }

    const contactDetails = () => {
        return(
            <div>
                {getContactDetails("Bengaluru, India", <MapPin size={20} color="#94a3b8" />)}
                {getContactDetails(Statics.contactPhone, <PhoneCall size={20} color="#2dd4bf" />)}
                {getContactDetails(Statics.gmail, <Mail size={20} color="#34d399" />)}
            </div>
        )
    }

    const getHighlights = () => {
        return(
                <div className={styles.experience_card}>
                {getTextWithTag(Statics.highlights.aws.header, Statics.highlights.aws.desc, <Award size={40} color="#34d399"  />)}
                {getTextWithTag(Statics.highlights.code.header, Statics.highlights.code.desc, <Code2 size={40} color="#2dd4bf" />)}
                {getTextWithTag(Statics.highlights.cost.header, Statics.highlights.cost.desc, <TrendingDown size={40} color="#34d399" />)}
            </div>
        )
    }

    const getHeader = () => {
        return(
            <div className={styles.header_container}>
                {getHeaderContent()}
                {getHighlights()}
            </div>
        )
    }

    const getProfessionExperience = () => {
        return(
            <div>
                <h2 style={{textAlign: 'center'}}>Professional Experience</h2>
            <div className={styles.card}>
                <span style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                  <Briefcase style={{height: '4rem', width:'3rem', color: '#2dd4bf'}}/>
                <h2>{Statics.role}</h2>
                    </span>
                <h3>{Statics.company}</h3>
                <span style={{display: 'flex', gap: '1rem'}}>
                <MapPin />
                    {Statics.location}
                 </span>
                <ul>
                    <p>Owned end-to-end SDLC from design, development, testing, deployment, and production monitoring</p>
                    <p>Developed secure REST APIs and backend logic using Java + Spring Boot following clean architecture principles and authorizations</p>
                    <p>Led migration of legacy Java monoliths to modern microservices, improving scalability and maintainability</p>
                    <p>Optimized system observability by transitioning monitoring from CloudWatch to Datadog</p>

                </ul>
            </div>
            </div>
        )
    }

    const achievement = (header: string, desc: string , tech: string[], impact: string) => {
        return(
            <div className={styles.card}>
                <div className={styles.achievements_tag_container}>
                <Layers className={styles.achievements_layer} />
                <span className={styles.achievements_tag}>
                    {impact}
                  </span>
                </div>
                <h4>{header}</h4>
                <p>{desc}</p>
                <div className={styles.tag_container}>
                {tech.map(t => <span className={styles.tag}>{t}</span>)}
                    </div>
            </div>
        );

    }
    const skill = (header: string, tech: string[], icon: React.ReactNode) => {
        return(
            <div className={styles.language_card}>
                <div className={styles.language_container}>
                  {icon}
                   <h3>{header}</h3>
                </div>
                <div className={styles.language_tag_container}>
                {tech.map(t => <span className={styles.language_tag}>{t}</span>)}
                </div>
            </div>
        );
    }

    const getKeyAchievements = () => {
        return(
            <div>
                <h2 style={{textAlign: 'center'}}>Key Achievements</h2>
            <div className={styles.achievements}>
                {achievements.map(a => achievement(a.title, a.description, a.tech, a.impact))}
            </div>
            </div>
        );
    }

    const getTechinalSkills = () => {
        return(
            <div>
                <h2 style={{textAlign: 'center'}}>Technical Skills</h2>
                <div className={styles.achievements}>
                    {skill("Languages", skills.languages, <Code2 />)}
                    {skill("Backend", skills.backend, <Terminal />)}
                    {skill("Frontend", skills.frontend, <Layers />)}
                    {skill("Cloud", skills.cloud, <Cloud />)}
                    {skill("Databases", skills.databases, <Database />)}
                    {skill("Testing", skills.testing, <Code2 />)}
                </div>
            </div>
        );
    }

    const getEducation = () => {
        return (
            <section id="education" className={styles.section}>
                <div className={styles.section_container}>
                    <h2 className={styles.title}>Education & Certifications</h2>

                    <div className={styles.grid}>
                        {/* Education Card */}
                        <div className={styles.section_card}>
                        <span className={styles.card_header}>
                            <div className={styles.icon_box}>
                                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                            <h3>Bachelor of Computer Science</h3>
                        </span>
                            <h3 className={styles.sub_text}>University Visvesvaraya College of Engineering</h3>
                            <span className={styles.meta_info}>
                            <p className={styles.date}>2017 - 2021</p>
                        </span>
                        </div>

                        {/* Certification Card */}
                        <div className={`${styles.section_card} ${styles.centered}`}>
                            <img
                                src="https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
                                alt="AWS Certified Developer - Associate Badge"
                                className={styles.badge_img}
                            />
                            <h3>AWS Certified Developer - Associate</h3>
                            <p className={styles.sub_text}>Amazon Web Services</p>
                            <a
                                href="https://www.credly.com/badges/772d4060-ca0f-4246-9dff-803a133d28a3/public_url"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                View Credential
                                <svg className={styles.link_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }


    return (
        <div className={styles.container}>
            {getHeader()}
            {getProfessionExperience()}
            {getKeyAchievements()}
            {getTechinalSkills()}
            {getEducation()}
        </div>
    );

}

export {Home}