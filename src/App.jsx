import { useEffect, useState } from 'react'
import './App.css'

import Wrapper from "./Components/Wrapper"
import Footer from "./Components/Footer"
import Quote from "./Components/Quote"
import Word from "./Components/Word"

import fetchRSSQuote, {fetchNews, fetchRSSGerman, fetchRSSWord} from './Components/APICalls'

const App = () => {
  const [wotd, setwotd] = useState("Word Unavailable19Definition Unavailable");
  const [qotd, setqotd] = useState("Quote unavailable");
  const [gotd, setgotd] = useState("German Word unavailable");
  const [notd, setnotd] = useState("News Not available")

  useEffect(() => {
  //Runs only on the first render
  async function setup() {
    setwotd(await fetchRSSWord());   
    setqotd(await fetchRSSQuote());
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
          <div id='taskcontainer'>
            <input type="checkbox" id="task1" name="task1" value=""/>
            <label for="task1">Read emails</label> <br/>
            <input type="checkbox" id="task2" name="task2" value=""/>
            <label for="task2">House chores</label> <br/>
            <input type="checkbox" id="task3" name="task3" value=""/>
            <label for="task3"> Exercise</label> <br/>
            <input type="checkbox" id="task4" name="task4" value=""/>
            <label for="task4">Journal</label> <br/>
          </div>
        </Wrapper>
        <Wrapper title="Note to self" newID='three'>
          <ol>
            <li>Do not let the fear of failure hold you back.</li>
            <li>When in doubt, take a deep breath first.</li>
            <li>Do not rush and plan first. Failing to plan is planning to fail.</li>
          </ol>
        </Wrapper>
        <Wrapper title="Weather" newID='four'>
          <div className='weathercontainer'>
        <a class="weatherwidget-io" href="https://forecast7.com/en/45d50n73d57/montreal/" data-label_1="MONTREAL" data-label_2="WEATHER" data-theme="original" >MONTREAL WEATHER</a>
        </div>
        </Wrapper>
        <Wrapper title="News" newID='five'>
        <Quote res={notd}>          
          
        </Quote>
          </Wrapper>
        <Wrapper title="Word of the day" newID='six'>
          <Word res={wotd}>
          </Word>
        </Wrapper>
        <Wrapper title="Learn German" newID='seven'>
          <Word res={gotd}>
          </Word>
          </Wrapper>
        <Wrapper title="Quote of the day" newID='eight'>
          <Quote res={qotd}>
          </Quote>
        </Wrapper>
        <Wrapper title="Calendar" newID='ten'>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&showPrint=0&src=NWE4NDJkZDA4MTdiMDhhNDQyODE2ZjgwODllNzc0ZDY3ZjUwZmI2ZTk4NDgwNGZiYTY2NTM5NzE4NDhlM2U0N0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239e69af"></iframe>
        </Wrapper>
        <Wrapper title="Music" newID='eleven'>
          <div className='dummy'>
          <iframe width="200" height="200" src="https://www.youtube.com/embed/--bcqmbe_KE?list=PLYzbvH8SQ04lHco3YsB6wOqPtwPv3KNII" title="Nightcore - Lost In The Moment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="false"></iframe>
          </div>
        </Wrapper>
      </div>
      <Footer/>
    </div>
  )
}

export default App
