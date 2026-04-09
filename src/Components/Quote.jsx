const Quote = (props) => {
  let quote = props.res;
  return (
  <div className="word">
    <p>{quote}</p>
  </div>
);
}

export default Quote;