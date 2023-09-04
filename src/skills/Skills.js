import {
  faJava,
  faPython,
  faGitAlt,
  faAws,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/skills.scss';

const Skills = () => {

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h2>
            Languages:
          </h2>
          <p>
            Java, Python, C/C++, SQL (Postgres, My), TypeScript, JavaScript, HTML/CSS
          </p>
          <h2>
            Frameworks:
          </h2>
          <p>
            React, React Native, Node.js, Spring, JUnit, Jest, Enzyme, jQuery, Bootstrap, Wordpress
          </p>
          <h2>
            Developer Tools
          </h2>
          <p>
            Git, Atlassian, AWS, Azure, VS Code, PyCharm, Intellij, Eclipse
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#F89820" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#FFD43B" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAws} color="#FF9900" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#323330" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;