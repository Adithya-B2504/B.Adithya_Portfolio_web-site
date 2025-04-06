import styles from './HeroStyles.module.css'
import heroImg from '../../assets/Design uten navn.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

import githublight  from '../../assets/github-light.svg'
import githubdark  from '../../assets/github-dark.svg'
import linkedinlight from '../../assets/linkedin-light.svg'
import linkedindark from '../../assets/linkedin-dark.svg'

import CV from '../../assets/Adithya.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const {theme,toggleTheme}=useTheme()

  const themeIcon=theme === 'light' ? sun:moon;
  const githubIcon=theme === 'light' ? githublight:githubdark;
  const linkedinIcon=theme === 'light' ? linkedinlight:linkedindark;

  return (
    <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img
        src={heroImg}
        className={styles.hero}
        alt="Profile picture of Harris Johnsen"
      />
      <img
        className={styles.colorMode}
        src={themeIcon}
        alt="Color mode icon"
        onClick={toggleTheme}
      />
    </div>
    <div className={styles.info}>
      <h1>
        Adithya B
        <br />
        
      </h1>
      <h2>Full Stack Developer</h2>
      <span>
        
        <a href="https://github.com/Adithya-B2504" target="_blank">
          <img src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://www.linkedin.com/in/adithya-b-/" target="_blank">
          <img src={linkedinIcon} alt="Linkedin icon" />
        </a>
      </span>
      <p className={styles.description}>

      Hey! I build cool, modern React web apps that help businesses shine. 
      This site’s where I share my projects with the tech I love.

      </p>
      <a href={CV} download>
        <button className="hover">Resume</button>
      </a>
    </div>
  </section>
);
}
export default Hero;