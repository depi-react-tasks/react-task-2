// this component takes the person data from the parent using props
function Person(props) {
  return (
    <div className="person">
      <h2>my name is: {props.name}</h2>
      <h5>my color is : {props.color}</h5>
      <small>ID: {props.id}</small>
    </div>
  );
}

export default Person;
