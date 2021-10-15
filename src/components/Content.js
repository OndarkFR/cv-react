import '../styles/Content.css'
import Card2 from '../components/Card2'
import facebook from '../assets/images/facebook.png'
import linkedin from '../assets/images/linkedin.png'

function Content (){
    return (
        <section id="main" className='container-main'>
            <div className='Card item1'>
                <div className='Presentation'>
                    <h1>Qui suis-je ?</h1>
                    <hr></hr>
                    <p>
                        Je suis actuellement en formation DWWM (Développeur - Web et Web Mobile) et recherche activement un poste de Développeur Web. <br></br> 
                        J'ai toujours été attiré par le développement et par l'informatique en général, <br></br> je mettrai tout en oeuvre pour mener à bien chaque projet et donner le meilleur de moi-même pour votre entreprise. <br></br>
                        Je suis disponible dès à présent pour vous rencontrer.
                    </p>
                    <hr></hr>
                    <a className='CvDownload' href='https://download856.mediafire.com/io8x4o1jd72g/h05pfam8osn63i8/Boudier_Antony_CV.html'>Telecharger mon cv</a>
                </div>
                
                <hr></hr>

                <div className='Contact'>
                    <h1>Information de contact</h1>

                    <hr></hr>

                    <div className='contact-flex'>
                        <p>Boudier Antony</p>
                    </div>
                    <div className='contact-flex'>
                        <a href='mailto:boudier.pro1@gmail.com'>boudier.pro1@gmail.com</a>
                    </div>
                    <div className='contact-flex'>
                        <a href='tel:0770328761'> 07 70 32 87 61</a>
                    </div>
                    <div className='contact-flex'>
                        <p>1 Rue Eugène Silvain - 83000 Toulon</p>
                    </div>

                    <hr></hr>

                    <div className="social contact-flex">
                        <a href="https://fr-fr.facebook.com/">
                            <img id='test' className='logo' src={facebook} alt="Logo Facebook"></img>
                        </a>
                        <a href="https://fr.linkedin.com/">
                            <img className='logo' src={linkedin} alt="Logo Facebook"></img>
                        </a>
                    </div>
                </div>
            </div>

            <div className='Card item2'>
                <Card2 />
            </div>
        </section>
    )
}

export default Content

