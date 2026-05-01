import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './css/App.css'
import axios from "axios";

import Wrapper from "./Components/Wrapper"
import Footer from "./Components/Footer"
import Quote from "./Components/Quote"
import Task from './Components/Task'
import Weather from './Components/Weather'

import getRandomQuote, {fetchNews} from './Components/APICalls'

import quotes from './data/quotes.json'

function About(){
  return <h1>About Page</h1>
}

const Main = () => {
  // ----------------COMPONENT SET UP ----------------------------
  const [qotd, setqotd] = useState("Quote unavailable");
  const [notd, setnotd] = useState([{"source":{"id":"Wrong ID","name":"ESPN"},"author":"ESPN","title":"UEFA Champions League semifinal live updates: PSG-Bayern Munich - ESPN","description":"Nine goals have dominated Tuesday's UEFA Champions League semifinal first-leg match between Paris Saint-Germain and Bayern Munich.","url":"https://www.espn.com/soccer/story/_/id/48610153/uefa-champions-league-semifinal-live-updates-paris-saint-germain-bayern-munich","urlToImage":"https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2026%2F0428%2Fr1650561_1296x729_16%2D9.jpg","publishedAt":"2026-04-28T20:33:00Z","content":"Apr 28, 2026, 04:55 PM ET\r\nTHE CHAMPIONS!\r\nWe have some UEFA Champions League this week to close out the month of April, and we are down to the final four teams.\r\nWe had a huge heavyweight clash to k… [+449 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":"Aida Karimi, Tim Lister, Sana Noor Haq, Catherine Nicholls, Eleni Giokos, Issy Ronald, Hanna Ziady, Chris Isidore, Matt Egan, Nadeen Ebrahim, Sarah Tamimi, Nic Robertson, Lex Harvey, Kevin Liptak, Mustafa Qadri, Mostafa Salem, Rupert Neate, David Goldman, Aileen Graef","title":"Live updates: UAE to quit OPEC in blow to world’s leading oil exporters, as Iran war roils energy sector - CNN","description":"The United Arab Emirates will withdraw from the Organization of the Petroleum Exporting Countries (OPEC) this week, the UAE’s state news agency reports, as the Iran war roils global energy markets. Follow for live updates.","url":"https://www.cnn.com/2026/04/28/world/live-news/iran-war-trump-israel","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-958778608-20260428124300140.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2026-04-28T20:12:00Z","content":"The United Arab Emirates will withdraw from Organization of the Petroleum Exporting Countries (OPEC) on May 1, the UAEs state news agency WAM said.\r\nThis decision aligns with the United Arab Emirates… [+1273 chars]"},{"source":{"id":null,"name":"NPR"},"author":"","title":"As trial against OpenAI begins, Elon Musk seeks Sam Altman’s ouster - NPR","description":"If Musk gets what he's asking for, it would radically re-shape one of the world's leading AI companies.","url":"https://www.npr.org/2026/04/28/nx-s1-5801438/musk-altman-openai-trial-opening-statements","urlToImage":"https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4144x2331+0+216/resize/1400/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fc7%2F7d%2F4268ba0f43c9b9dff405ab1fc774%2Fap26118555622828.jpg","publishedAt":"2026-04-28T18:42:06Z","content":"A courtroom brawl between two of the tech industry's most powerful leaders, Tesla CEO Elon Musk and OpenAI CEO Sam Altman, is underway in Oakland, California in a case that could transform one of the… [+6716 chars]"},{"source":{"id":"the-wall-street-journal","name":"The Wall Street Journal"},"author":"WSJ","title":"Ukraine Hits Russia’s Oil Machine, but Struggles to Dent Its Economy - WSJ","description":null,"url":"https://www.wsj.com/world/russia/ukraine-hits-russias-oil-machine-but-struggles-to-dent-its-economy-8e8d0322","urlToImage":null,"publishedAt":"2026-04-28T18:38:00Z","content":null}])

  useEffect(() => {
  //Runs only on the first render
  async function setup() {
    setqotd(await getRandomQuote(quotes));
    setnotd(await fetchNews());
  };
  setup();
}, []);

  return (
    // <BrowserRouter>
    <div className='app'>
      {/* --------------HELLO MESSAGE------------------------------- */}
      <h2>Hello Nitin!!</h2>
      
      {/* ---------------------MAIN CONTAINER-----------------------  */}
      <div className='container'>
        {/* -----------------TASKS------------------------------------- */}
        <Wrapper title="Tasks" newID='two'>
          <Task />
        </Wrapper>

        {/* -------------------QUOTE--------------------------------- */}
        <Wrapper title="Motivational Quote of the Day" newID='three'>
          <Quote author={qotd[1]} quote = {qotd[0]}/>
        </Wrapper>

        {/* -------------------WEATHER ------------------------------ */}
        <Wrapper title="Weather (commoninja.com)" newID='four'>
          <div className='weathercontainer'>
        {/* COMMENT THIS OUT LOCALLY BECAUSE OF FREQUENT CALLS */}
        <Weather/>
        </div>
        </Wrapper>

        {/* ------------------NEWS---------------------------------- */}
        <Wrapper title="News(newsapi.org)" newID='five'>
          <ul>
            {notd.map((news) =>
            (<p><a href={news["url"]}>{news["title"]}</a></p>)
            )}
          </ul>
          </Wrapper>

        {/* -------------------CALENDAR----------------------------- */}
        <Wrapper title="Calendar (Google Calendar)" newID='ten'>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&showPrint=0&src=NWE4NDJkZDA4MTdiMDhhNDQyODE2ZjgwODllNzc0ZDY3ZjUwZmI2ZTk4NDgwNGZiYTY2NTM5NzE4NDhlM2U0N0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239e69af"></iframe>
        </Wrapper>

        {/* -------------------MUSIC ------------------------------ */}
        <Wrapper title="Music (Spotify)" newID='eleven'>
          <div className='dummy'>
          <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/track/6Er8Fz6fuZNi5cvwQjv1ya?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </Wrapper>
      </div>

      {/* --------------------FOOTER------------------------------- */}
      <Footer/>
    </div>
    // {/* </BrowserRouter> */}
  )
}

const App = () => {
  return (
    <BrowserRouter>
      {/* <Main/> */}
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
