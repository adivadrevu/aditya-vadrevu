import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero} 
        src={heroImg} 
        alt=" Profile picture of Aditya Vadrevu" 
        />
        <img 
        className={styles.colorMode}
        src ={themeIcon}
        alt="Color mode icon"
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.stars}></div>


      {/* <div className={styles.particles}> // for animation 
          {Array(5)
          .fill()
          .map((_, i) => (
            <span key={i}></span>
          ))}
      </div> */}

      <div className={styles.info}>
        <h1>
          Aditya
          <br />
          Vadrevu
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        I specialize in building backend applications using Java and Spring, AI/ML solutions with Python, and front-end development with React. <br />
        <br/>
        I am passionate about creating scalable and efficient software solutions.
        </p>
        {/* <p className={styles.paragraph}>
        I am a results-oriented software engineer with a Master’s in Computer Science from the University of North Texas. 
        My expertise spans Java, Python, machine learning, and artificial intelligence. I am passionate about building scalable and efficient software solutions, 
        combining strong object-oriented programming principles and practical experience in both backend and frontend development. 
        My background includes developing applications using frameworks like Spring Boot for backend services and React.js for frontend, along with leveraging cloud platforms like AWS to deploy and scale applications.
        <br/>                   
        During my academic and professional career, I’ve worked as a Graduate Research Intern and Teaching Assistant, contributing to AI/ML research, 
        and mentoring students in software engineering. My projects range from predictive analysis tools and healthcare management systems to 
        real-time data visualization applications for industry leaders like JPMorgan Chase. I have a solid understanding of software design concepts, 
        always aiming to enhance user experiences and optimize system performance.
        </p> */}
            
          <a href={CV} download="Aditya_Vadrevu_Resume.pdf">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero