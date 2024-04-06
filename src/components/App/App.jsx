import './App.css'
import { InfoCard } from '../InfoCard/InfoCard.jsx'
import about from '../../assets/about-me.png'
import projects from '../../assets/projects.png'
import contact from '../../assets/contact.png'
import skills from '../../assets/skills.png'

export function App() {
    return (
        <section className='section'>
            <InfoCard
                title="SOBRE MI"
                imageSrc={about}
                altText="about-me"
                description="Hola! Soy Alejandro Jiménez, estudiante de Ingeniería de Software"
            />

            <InfoCard
                title="PROYECTOS"
                imageSrc={projects}
                altText="projects"
                description="Conoce sobre mis proyectos. Aquí"
            />

            <InfoCard
                title="CONTACTO"
                imageSrc={contact}
                altText="contact"
                description="Puedes contactar conmigo por diferentes medios. Aquí"
            />

            <InfoCard
                title="HABILIDADES"
                imageSrc={skills}
                altText="skills"
                description="Conoce sobre mis habilidades. Aquí"
            />
        </section>
    )
}