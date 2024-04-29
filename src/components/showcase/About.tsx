import React from 'react';
import me from '../../assets/pictures/coading.jpg';
import meNow from '../../assets/pictures/blackphoto.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Jay Rakholiya</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software Developer currently working at Vrinsoft! In
                    July of 2023 I graduated from Aditya Silver Oak Institute of
                    Technology with my BS in Information Technology.
                </p>
                <br />
                <p>
                    "Thank you for visiting my portfolio. I genuinely appreciate
                    your interest in exploring it. I hope you find it as
                    engaging to navigate as it was for me to develop. If you
                    have any inquiries or comments, feel free to get in touch me
                    using <Link to="/contact">this form</Link> or shoot me an
                    email at{' '}
                    <a href="mailto:rakholiyajay147@gmail.com">
                        rakholiyajay147@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    Born with an innate curiosity about the inner workings of
                    things, Jay Rakholiya found himself captivated by the world
                    of Lego construction sets from a tender age. This early
                    fascination blossomed into an obsession, igniting a profound
                    love for building and creating. His academic journey
                    commenced at Vibgyor High International School, where he
                    pursued his secondary education. It was during this
                    formative period that he discovered the exhilarating realm
                    of programming through his involvement in the Lego Robotics
                    team at a local middle school, marking his inaugural foray
                    into the world of coding.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Fix the cause, not the symptom :)
                        </sub>
                    </p>
                </div>

                <p>
                    Fueled by his passion for technology, Jay delved deeper into
                    programming during his high school years at Maharshi
                    Sandipani School, initially learning the art of web scraping
                    and website interaction. This newfound knowledge paved the
                    way for a multitude of passion projects, undertaken in
                    collaboration with one of his closest friends,{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/scott-bass-189a7919b/"
                    >
                        Scott Bass
                    </a>
                    .Together, they embarked on an array of endeavors, including
                    the development of chatbots, game projects, applications,
                    and more. One such project, a testament to his skills and
                    dedication, is proudly showcased in his personal portfolio.{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    In 2019, Jay embarked on his journey towards higher
                    education, gaining admission to the prestigious Aditya
                    Silver Oak Institute of Technology to pursue a Bachelor's
                    degree in Information Technology. This accomplishment marked
                    the culmination of his academic aspirations, as he eagerly
                    embraced the opportunity to study at a renowned institution.
                    During his sophomore year, Jay secured an internship at the
                    startup Hover, where he primarily focused on frontend
                    development. This invaluable experience allowed him to hone
                    his skills and contribute to dynamic projects for over a
                    year and a half, until his senior year when he decided to
                    explore other opportunities to further enrich his expertise.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have are{' '}
                            <Link to="/projects/music">Music Production</Link>{' '}
                            and creating{' '}
                            <Link to="/projects/art">Digital Art</Link>. You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, cooking, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        <p>
                            In college, I was an active member in the fraternity
                            Sigma Alpha Epsilon and held multiple positions in
                            the chapter. I met a lot of amazing people through
                            my fraternity and thoroughly enjoyed the community.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2023
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/Rakholiya_Jay60"
                    >
                        @JayRakholiya
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:rakholiyajay147@gmail.com">
                        rakholiyajay147@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
