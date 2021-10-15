import '../styles/Card2.css'
import SassIcon from '../assets/svg/Sass.svg' 
import JavaScriptIcon from '../assets/images/javascript.png' 
import ReactImg from '../assets/images/react.png' 

const Card2 = () => {
    return (
        <>

            <div className='Competences'>
                <h1>Mes compétences
                    <img src='https://cdn-icons-png.flaticon.com/512/627/627495.png'/>
                </h1>

                <hr></hr>

                <h3 className='html'>HTML </h3>
                <div className="BarProgress">
                    <div className="progress-done">
                        80%
                    </div>
                </div>

                <img className='html' src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt='Icone HTML'/>

                <hr></hr>

                <h3 className='css'>CSS </h3>

                <div className="BarProgress">
                    <div className="progress-done">
                        80%
                    </div>
                </div>

                <img className='css' src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt='Icone CSS'/>

                <hr></hr>

                <h3 className='sass'>SASS </h3>

                <div className="BarProgress">
                    <div className="progress-done" style={{width: 60 + '%'}}>
                        60%
                    </div>
                </div>

                <img className='sass' src={SassIcon} alt='Icone SASS'/>

                <hr></hr>

                <h3>JAVA SCRIPT </h3>

                <div className="BarProgress">
                    <div className="progress-done" style={{width: 50 + '%'}}>
                        50%
                    </div>
                </div>
                <img src={JavaScriptIcon} />

                <hr></hr>

                <h3>REACT </h3>
                <div className="BarProgress">
                    <div className="progress-done" style={{width: 50 + '%'}}>
                        50%
                    </div>
                </div>
                <img className='Rotate' src={ReactImg} />
            </div>

        </>
    )
}

export default Card2