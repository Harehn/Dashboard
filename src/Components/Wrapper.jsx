const Wrapper = (props) => {
    return (
    <div className="boxes" id={props.newID}>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
}

export default Wrapper;