import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAward,
    faEnvelope,
    faLocationDot,
    faPhone

} from "@fortawesome/free-solid-svg-icons";

import './home.scss';
import {Briefcase, Layers, MapPin} from "lucide-react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

const styles = {
    container: 'home__container',
    header_content: 'home__container-header-content',
    header_container: 'home__container-header-container',
    card: 'home__container-card',
    achievements:'home__container-achievements',
    achievements_tag: 'home__container-achievements-tag',
    achievements_tag_container: 'home__container-achievements-tagContainer',
    achievements_layer: 'home__container-achievements-layer',
    contact_details: 'home__container-contact-details',
    tag: 'home__container-tag-content',
    tag_container: 'home__container-tag-container'
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


const  getDesc = () => {
    return <>
        <h1>Sagar V Hipparagi</h1>
        <h2>Software Development Engineer I</h2>
        <p>Building high-scale distributed systems with 4+ years of experience in Java/Spring Boot and
            TypeScript/Node.js. Specialist in Micro Frontends, event-driven architecture, and cloud-native
            solutions.</p>
    </>
}

const  getTextWithTag = (header: string , desc: string) => {
    return <>
        <FontAwesomeIcon icon={faAward} />
        <h3>{header}</h3>
        <p>{desc}</p>
    </>;
}

export const  getContactDetails = ( desc: string, icon: IconDefinition) => {
    return (<div className={styles.contact_details}>
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        <p>{desc}</p>
    </div>);
}

const Home = (): React.ReactElement => {
    const  getHeaderContent = () => {
        return <div className={styles.header_content}>
            {getDesc()}
            {contactDetails()}
        </div>
    }

    const contactDetails = () => {
        return(
            <div>
                {getContactDetails("Bengaluru, India", faLocationDot)}
                {getContactDetails("+91 9110632026", faPhone)}
                {getContactDetails("sagarhipparagi46@gmail.com", faEnvelope)}
            </div>
        )
    }

    const getHighlights = () => {
        return(
            <div className={styles.card}>
                {getTextWithTag("AWS Certified Developer", "Associate Level")}
                {getTextWithTag("90%+ Code Coverage", "High quality standards")}
                {getTextWithTag("40% Cost Reduction", "Infrastructure optimization")}
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
                <h2>Software Development Engineer I</h2>
                    </span>
                <h3>Evive Software Analytics Pvt. Ltd.</h3>
                <span style={{display: 'flex', gap: '1rem'}}>
                <MapPin />
                    Bengaluru, India • Sept 2021 – Present
            </span>
                <ul>
                    <p>Owned end-to-end SDLC from design, development, testing, deployment, and production monitoring</p>
                    <p>Developed secure REST APIs and backend logic using Java + Spring Boot following clean architecture principles</p>
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
    const skill = (header: string, tech: string[]) => {
        return(
            <div className={styles.card}>
                <h2>{header}</h2>
                <div className={styles.tag_container}>
                {tech.map(t => <span className={styles.tag}>{t}</span>)}
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
                    {skill("Languages", skills.languages)}
                    {skill("Backend", skills.backend)}
                    {skill("Frontend", skills.frontend)}
                    {skill("Cloud", skills.cloud)}
                    {skill("Databases", skills.databases)}
                    {skill("Testing", skills.testing)}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
        {getHeader()}
            {getProfessionExperience()}
            {getKeyAchievements()}
            {getTechinalSkills()}
        </div>
    );

}

export {Home}