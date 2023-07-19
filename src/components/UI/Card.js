// Card component - responsible for outputting a CONTAINER COMPONENT with the shared "card" CSS class.
// USING "props.children" to render all the data BETWEEN the OPENING & CLOSING tags of this <Card /> component.
// USING "props.className" to render all the CSS CLASSES applied to the CHILDREN data.
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
