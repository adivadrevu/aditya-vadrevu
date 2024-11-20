import styles from './ProjectsStyles.module.css';
import research from '../../assets/research.png';
import iCare from '../../assets/icare.png';
import carInsurance from '../../assets/carInsurance.png';
import slotMachine from '../../assets/slotMachine.png';
import diabetesPrediction from '../../assets/diabetesPrediction.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        
      <ProjectCard
        src={research}
        link="https://ai.unt.edu/unt-ai-summer-research-program"
        h3="UNT AI Summer Research Program 2023"
        p={
          <>
            <p>AI/ML Research Program at UNT.</p>
            <p>The above link will route you to the University page.</p> 
            <p>Scroll down to the '2023 Summer Program' section for more details.</p>
          </>
        }
      />
        
        <ProjectCard
          src={iCare}
          link="https://github.com/adivadrevu/Project-iCare"
          h3="iCare"
          p="iCare Health Service App: A Full Stack Application"
        />
        <ProjectCard
          src={carInsurance}
          link="https://github.com/adivadrevu/Car-Insurance-Claim-Prediction"
          h3="Car Insurance Claim Prediction"
          p="Predicting Car Insurance Claims"
        />
        <ProjectCard
          src={diabetesPrediction}
          link="https://github.com/adivadrevu/Diabetic_Prediction_Control"
          h3="Diabetes Prediction"
          p="Predicting Diabetes : A Machine Learning Approach"
        />
        <ProjectCard
          src={slotMachine}
          link="https://github.com/adivadrevu/Game_SlotMachine"
          h3="Slot Machine 🎰"
          p="Slot Machine Game"
        />
        {/* <ProjectCard
          src={employeePortal}
          link="https://github.com/adivadrevu/CompanySelfServicePortal"
          h3="Employee Portal"
          p="Employee Portal: A Full Stack Application"
        /> */}
      </div>
    </section>
  );
  
  
  
}


export default Projects;