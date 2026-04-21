import '../css/Quote.css'
const Quote = (props) => {
  let quote = props.quote;
  let author = props.author;
  return (
  <div className="quote">
    <p className='qu'>{quote}</p>
    <p className='auth'>{author}</p>
  </div>
);
}

export default Quote;