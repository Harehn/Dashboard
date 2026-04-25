import { useEffect, useState } from 'react'
import './css/App.css'

import Wrapper from "./Components/Wrapper"
import Footer from "./Components/Footer"
import Quote from "./Components/Quote"
import Word from "./Components/Word"
import Task from './Components/Task'
import Weather from './Components/Weather'

import fetchRSSQuote, {fetchNews, fetchRSSGerman, fetchRSSWord, getRandomQuote} from './Components/APICalls'

import quotes from './data/quotes.json'



const App = () => {
  const [wotd, setwotd] = useState("Word Unavailable19Definition Unavailable");
  const [qotd, setqotd] = useState("Quote unavailable");
  const [gotd, setgotd] = useState("German Word unavailable");
  const [notd, setnotd] = useState("News Not available")

  useEffect(() => {
  //Runs only on the first render
  async function setup() {
    setwotd(await fetchRSSWord());   
    setqotd(await getRandomQuote(quotes));
    setgotd(await fetchRSSGerman());
    setnotd(await fetchNews());
  };
  setup();
}, []);
  return (
    <div className='app'>
      <h2>Hello Nitin!!</h2>
      <div className='container'>
        <Wrapper title="Tasks" newID='two'>
          <Task />
        </Wrapper>
        <Wrapper title="Motivational Quote of the Day" newID='three'>
          <Quote author={qotd[1]} quote = {qotd[0]}/>
        </Wrapper>
        <Wrapper title="Weather" newID='four'>
          <div className='weathercontainer'>
        {/* <a className="weatherwidget-io" href="https://forecast7.com/en/45d50n73d57/montreal/" data-label_1="MONTREAL" data-label_2="WEATHER" data-theme="original" >MONTREAL WEATHER</a> */}
        <Weather/>
        </div>
        </Wrapper>
        <Wrapper title="News" newID='five'>
        <Word res={notd}>          
          
        </Word>
          </Wrapper>
        {/* <Wrapper title="Word of the day" newID='six'>
          <Word res={wotd}>
          </Word>
        </Wrapper>
        <Wrapper title="Learn German" newID='seven'>
          <Word res={gotd}>
          </Word>
          </Wrapper> */}
        <Wrapper title="Calendar" newID='ten'>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&showPrint=0&src=NWE4NDJkZDA4MTdiMDhhNDQyODE2ZjgwODllNzc0ZDY3ZjUwZmI2ZTk4NDgwNGZiYTY2NTM5NzE4NDhlM2U0N0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239e69af"></iframe>
        </Wrapper>
        <Wrapper title="Music" newID='eleven'>
          <div className='dummy'>
          {/* <iframe width="200" height="200" src="https://www.youtube.com/embed/--bcqmbe_KE?list=PLYzbvH8SQ04lHco3YsB6wOqPtwPv3KNII" title="Nightcore - Lost In The Moment" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={false}></iframe> */}
          <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/track/6Er8Fz6fuZNi5cvwQjv1ya?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          {/* {style="border-radius:12px"} */}
          {/* width="100%" height="352" frameBorder="0" allowfullscreen="" */}
          </div>
        </Wrapper>
      </div>
      <Footer/>
    </div>
  )
}

export default App
