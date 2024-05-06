import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>ESign</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://hover.gg/'}
                        >
                            <h4>www.hover.gg</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full-Stack Developers</h3>
                        <b>
                            <p>spring 2023 - winter 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Orchestrated and implemented the front-end architecture of
                    the Esign project, a sophisticated platform dedicated to
                    facilitating secure digital signatures. Leveraging React's
                    potent capabilities, complemented by Redux for robust state
                    management, and seamlessly integrated with Node.js and
                    Express, which powered the back-end APIs.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Adeptly amalgamated MetaMask's robust encryption and
                            decryption protocols, ensuring a user-friendly
                            experience while upholding the highest standards of
                            security and data privacy in the digital signature
                            realm.
                        </p>
                    </li>
                    <li>
                        <p>
                            Fostered a synergistic collaboration with the
                            back-end development team, establishing seamless
                            communication channels to facilitate the seamless
                            exchange of documents and the integration of digital
                            signing functionalities.
                        </p>
                    </li>
                    <li>
                        <p>
                            Meticulously crafted and optimized an intuitive and
                            responsive user interface, empowering users to
                            interact with digital signature features
                            effortlessly, thereby enhancing overall usability
                            and user engagement.
                        </p>
                    </li>
                    <li>
                        <p>
                            Spearheaded the development of secure document
                            sharing capabilities, enabling users to exchange
                            confidential documents in an encrypted format,
                            cultivating an environment of trust and reliability
                            within the platform.
                        </p>
                    </li>
                    <li>
                        <p>
                            Continuously refactored and optimized the codebase
                            through an iterative process, ensuring
                            maintainability, scalability, and peak performance
                            as the user base expanded, harnessing React's
                            virtual DOM and efficient rendering techniques to
                            their full potential.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Face Recognition System</h1>
                        <a target="_blank" rel="noreferrer" href={''}>
                            <h4>www.jay.co</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full-Stack Developer</h3>
                        <b>
                            <p>Fall 2022 - Winter 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Assumed a pivotal role as a Frontend Developer,
                    orchestrating the development of a cutting-edge Face
                    Recognition System, fortifying security measures for the
                    prestigious Aditya Silver Oak project. Leveraging the potent
                    capabilities of modern JavaScript frameworks and libraries,
                    including React's powerful architecture and Redux's robust
                    state management.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Meticulously engineered user interface components to
                            facilitate seamless interaction with the Face
                            Recognition System, ensuring an intuitive and
                            user-friendly experience for end-users, thereby
                            enhancing overall usability and engagement.
                        </p>
                    </li>
                    <li>
                        <p>
                            Cultivated a synergistic collaboration with the
                            backend development team, adeptly integrating
                            front-end functionalities with sophisticated face
                            recognition algorithms and data processing systems,
                            fostering a cohesive and efficient workflow.
                        </p>
                    </li>
                    <li>
                        <p>
                            Contributed invaluable expertise to the design and
                            optimization of the user interface, prioritizing
                            intuitive controls and responsive features, ensuring
                            a consistent and engaging experience across various
                            devices and screen sizes, thereby catering to
                            diverse user preferences.
                        </p>
                    </li>
                    <li>
                        <p>
                            Delivered the front-end components within the
                            project's ambitious timeline, a testament to
                            exceptional time management and problem-solving
                            skills, enabling efficient and accurate face
                            recognition capabilities, thereby substantially
                            fortifying security measures.
                        </p>
                    </li>
                    <li>
                        <p>
                            Continuously refactored and optimized the codebase
                            through an iterative process, harnessing React's
                            virtual DOM and efficient rendering techniques to
                            their full potential, ensuring optimal performance
                            and scalability as the system's user base expanded
                            exponentially.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Personal Portfolio</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://rakholiyajay.github.io/portfolio/'}
                        >
                            <h4>www.rjay.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Front-End Developer</h3>
                        <b>
                            <p>spring 2021, winter 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Orchestrated the development of a captivating personal
                    portfolio as a Frontend Developer, meticulously crafted to
                    showcase a diverse array of skills and projects, effectively
                    demonstrating proficiency and invaluable experience.
                    Leveraged the potent capabilities of modern web development
                    technologies, including React's powerful architecture and
                    Vue.js's versatile framework, to create a visually stunning
                    and highly interactive platform.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Meticulously engineered an aesthetically pleasing
                            and responsive user interface, ensuring a positive
                            and engaging user experience for visitors,
                            transcending device or screen size constraints,
                            thereby fostering a seamless browsing experience.
                        </p>
                    </li>
                    <li>
                        <p>
                            Adeptly employed effective design principles and
                            leveraged cutting-edge CSS frameworks to craft a
                            visually captivating layout and intuitive
                            navigation, enhancing the overall presentation of
                            the portfolio and ensuring a cohesive brand
                            identity.
                        </p>
                    </li>
                    <li>
                        <p>
                            Adhered to best practices in web development,
                            including writing clean, modular, and maintainable
                            code, optimizing the portfolio's performance,
                            accessibility, and search engine visibility, thereby
                            providing an exceptional user experience that
                            fosters engagement and discoverability.
                        </p>
                    </li>
                    <li>
                        <p>
                            Garnered overwhelmingly positive feedback on the
                            portfolio's design and functionality, contributing
                            to a professional online presence and facilitating
                            effective self-promotion, thereby increasing
                            visibility and potential career opportunities,
                            fostering professional growth and recognition.
                        </p>
                    </li>
                    <li>
                        <p>
                            Continuously updated and optimized the portfolio
                            through an iterative process, incorporating new
                            projects and skills, ensuring a dynamic and
                            up-to-date representation of professional growth and
                            accomplishments, thereby cultivating a compelling
                            and ever-evolving online presence.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
