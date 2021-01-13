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

const FamiliarTopics = () => {
  return (
    <>
      <h2>Skills</h2>
      <h3>Interpersonal</h3>
      <ul>
        <FontAwesomeIcon
          icon={faCommentDots}
          size="4x"
          style={{ color: "black" }}
        />
        <FontAwesomeIcon icon={faExchangeAlt} size="4x" />
        <FontAwesomeIcon icon={faLevelUpAlt} size="4x" />
        <FontAwesomeIcon icon={faComments} size="4x" />
      </ul>

      <h3>Programming Languages</h3>
      <ul>
        <FontAwesomeIcon icon={faJs} size="4x" />
        <FontAwesomeIcon icon={faHtml5} size="4x" />
        <FontAwesomeIcon icon={faCss3Alt} size="4x" />
      </ul>
      <h3>Frameworks - Runtimes</h3>
      <ul>
        <FontAwesomeIcon icon={faReact} size="4x" />
        <FontAwesomeIcon icon={faNodeJs} size="4x" />
      </ul>
    </>
  );
};

export default FamiliarTopics;
