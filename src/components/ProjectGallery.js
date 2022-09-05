import '../styles/ProjectGallery.css';
import { website } from '../datas/projectsWebsite';

function ProjectGallery() {
    return(
        <section>
            <div className="project__gallery">
                {website.map((site, index) => (
                <a key={index} className="project__link" href={site.link}>
                    <div className="project__block">
                        <div className="project__infos">
                            <h2 className="project__title">{site.name}</h2>
                            <p className="project__use">{site.code}</p>
                            <p className="project__text">{site.description}</p>
                        </div>
                        <div className="project__img-div">
                            <img className="project__img" src="https://storage.googleapis.com/dtm/wp-content/uploads/2020/07/04165639/istock-827896866.jpg" alt="Site internet" />
                        </div>
                    </div>
                </a>
                ))}
            </div>
        </section>
    )
}

export default ProjectGallery;