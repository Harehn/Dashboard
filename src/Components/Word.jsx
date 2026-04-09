const Word = (props) => {
  let wotd = props.res.split("19");
  let def = wotd[1];
  wotd = wotd[0];
    return (
    <div className="word">
      <h4>{wotd}</h4>
      <p>{def}</p>
    </div>
  );
}

export default Word;