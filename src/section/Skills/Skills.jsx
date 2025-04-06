import styles from './SkillStyles.module.css'
import ChecMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/skillList'
function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectioonTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={ChecMarkIcon} skill='HTML'/>
        <SkillList src={ChecMarkIcon} skill='CSS'/>
        <SkillList src={ChecMarkIcon} skill='React'/>
        <SkillList src={ChecMarkIcon} skill='MERN'/>
        <SkillList src={ChecMarkIcon} skill='Python'/>
        <SkillList src={ChecMarkIcon} skill='JavaScript'/>


      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={ChecMarkIcon} skill="React" />
        <SkillList src={ChecMarkIcon} skill="Typescript" />
        <SkillList src={ChecMarkIcon} skill="Vue" />
        <SkillList src={ChecMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
    </section>
        
  )
}

export default Skills
