import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCommentDots,
  faExchangeAlt,
  faLevelUpAlt,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tachyons";
import "./FamiliarTopics.css";

const FamiliarTopics = () => {
  const iconSize = "7x";

  return (
    <div className="ma4 pl5 pt3 pb5 br3 avenir bg-gray-blue white" id="skills">
      <h2 className="pt4">Skills</h2>
      <h3>Interpersonal</h3>
      <ul className="flex justify-around mh7 pb4">
        <div>
          <p className="tc">Explaining Abstract Concepts</p>
          <FontAwesomeIcon
            icon={faCommentDots}
            size={iconSize}
            className="center"
          />
        </div>
        <div>
          <p className="tc">Collaboration</p>
          <FontAwesomeIcon icon={faExchangeAlt} size={iconSize} />
        </div>
        <div>
          <p className="tc">Communicating with Stake Holders</p>
          <FontAwesomeIcon
            icon={faLevelUpAlt}
            size={iconSize}
            className="center"
          />
        </div>
        <div>
          <p className="tc">Exchanging Ideas</p>
          <FontAwesomeIcon icon={faComments} size={iconSize} />
        </div>
      </ul>

      <h3>Programming Languages</h3>
      <ul className="flex justify-around mh7 pb4">
        <div>
          <p className="tc">Javascript</p>
          <FontAwesomeIcon icon={faJs} size={iconSize} />
        </div>
        <div>
          <p className="tc">HTML</p>
          <FontAwesomeIcon icon={faHtml5} size={iconSize} />
        </div>
        <div>
          <p className="tc">CSS</p>
          <FontAwesomeIcon icon={faCss3Alt} size={iconSize} />
        </div>
      </ul>

      <h3>Frameworks - Runtimes</h3>
      <ul className="flex justify-around mh7 pb4">
        <div>
          <p className="tc">React</p>
          <FontAwesomeIcon icon={faReact} size={iconSize} />
        </div>
        <div>
          <p className="tc">Node.js</p>
          <FontAwesomeIcon icon={faNodeJs} size={iconSize} />
        </div>
      </ul>
    </div>
  );
};

export default FamiliarTopics;
