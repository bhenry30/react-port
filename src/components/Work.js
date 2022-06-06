import React from 'react';

function Work() {
    return (
        <div className="card">
            <h1>My Work</h1>
            <div className="big-box row d-flex justify-content-center mt-4 mb-4">
                <div className="box-1 col-10 col-md-10 col-lg-8 col-xl-6 col-xxl-6 justify-content-center"> 
                <a href="https://enigmatic-cliffs-72783.herokuapp.com/" >
                <img className="rounded-2" id="spray-can" src="./assets/images/Homepage_screenshot_3.png" alt="Spray Can Website"/>
                </a>
                </div>
            </div>
            <div className="small-boxes row d-flex justify-content-center">
            <div className="box col-5 col-md-5 col-lg-4 col-xl-3 col-xxl-3 rounded-1">
            <a href="https://bhenry30.github.io/holly/" >
                <img className="rounded-2" id="holly" src="./assets/images/holly_screenshot.png" alt="Holly Website"/>
            </a>
            </div>
            <div className="box col-5 col-md-5 col-lg-4 col-xl-3 col-xxl-3 rounded-1">
            <a href="https://bhenry30.github.io/robot-gladiators/">
                <img className="rounded-2" id="robot-gladiators" src="./assets/images/robot-gladiators.jpg" alt="Robots Fighting"/>
            </a>
            </div>
            {/* <!-- <div class="box col-5 col-md-5 col-lg-4 col-xl-3 col-xxl-3 rounded-1">
                    <a href="https://bhenry30.github.io/challenge-one/">
                        <img class="rounded-2" id="horiseon" src="./assets/images/horiseon.png" alt="Horiseon Website">
                    </a>
            </div> --> */}
        </div>
        </div>

    )
}

export default Work