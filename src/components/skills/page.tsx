import "../css-styles/skills.css"
export const Skills = () => {
    return (
        <section className='skills' id='skills'>
            <h2 className="heading">My <span>Skills</span></h2>
            <div className="skills-row">
                <div className="skills-column">
                    <h3 className='title'>Coding Skills</h3>
                    <div className="skills-box">
                        <div className="skills-content">
                            <div className="progress">
                                <h3 className="h3">HTML <span>90%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress">
                                <h3 className="h3">CSS <span>70%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress">
                                <h3 className="h3">JAVASCRIPT <span>50%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress">
                                <h3 className="h3">TYPESCRIPT <span>40%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="skills-column">
                    <h3 className='title'>Professional Skills</h3>
                    <div className="skills-box">
                        <div className="skills-content">
                            <div className="progress">
                                <h3 className="h3">Web Development <span>87%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress">
                                <h3 className="h3">Graphic Designing<span>35%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress">
                                <h3 className="h3">web Design<span>45%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress">
                                <h3 className="h3">SEO<span>5%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>





                
            </div>
        </section>
    )
}