import projectOne from "../assets/project-1.PNG";
import projectTwo from "../assets/project-2.mp4";
import projectThree from "../assets/project-3.mp4";
import projectFour from "../assets/project-4.mp4";

const projects = {
    1: {
        title: "Portfolio Website",
        image: projectOne,
        description: (
            <>
                <p>
                    Responsive web portfolio able to adjust to various screen sizes. Displaying my front end abilities with intuitive, eye catching designs
                    while telling my stories and experiences as well as providing a safe method to contact me not allowing SQL or revealing personal information.
                </p>
                <p>
                    React, JavaScript, CSS, EmailJS
                </p>
            </>
        ),
        github: "https://github.com/jinlee98/react-portfolio-website",

    },
    2: {
        title: "Movie Searcher",
        image: projectTwo,
        description: (
            <>
                <p>
                    React web app hooked up to omdb api to be able to search up movies as well as nominate your top 5 and ability to share to your social media.
                    Ability to make simultaneous API calls.
                </p>
                <p>
                    React, JavaScript, HTML/CSS
                </p>
            </>
        ),
        github: "https://github.com/jinlee98/movie-searcher-and-nominator",
        
    },
    3: {
        title: "2020 NHL Draft Simulator",
        image: projectThree,
        description: (
            <>
                <p>
                    Takes multiple NHL draft rankings, determines best player available, and repeat simulation to determine
                    probability each player is taken when. Reads this data and graphs it as well as displays in a csv file output
                </p>
                <p>
                    Python
                </p>
            </>
        ),
        github: "https://github.com/jinlee98/2020NHLDraftSim",
        
    },
    4: {
        title: "Snake Game",
        image: projectFour,
        description: (
            <>
                <p>
                    Simple snake game.
                </p>
                <p>
                    Python
                </p>
            </>
        ),
        github: "https://github.com/jinlee98/SnakeGame",
        
    },
    5: {
        title: "Coming Soon",
        description: (
            <>
                <p>
                    Full stack scheduling system application.
                </p>
                <p>
                    Java, React, Spring, PostgreSQL 
                </p>
            </>
        )
    }
}

export default projects;