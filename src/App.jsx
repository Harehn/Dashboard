import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Wrapper = (props) => {
    return (
    <div className="boxes" id={props.newID}>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
}

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div class="links">
          <a href="#">About Website</a>
          <a href="https://harehn-kaundun.onrender.com/wip">About Me</a>
          <a href="https://harehn-kaundun.onrender.com/Contact">Contact Me</a>
        </div>
        <p>Copyright © 2025 All rights reserved || Designed By: Nitin </p>
      </div>
    </footer>
  );
}

async function fetchRSSQuote() {
  const proxyUrl = 'https://corsproxy.io/?';
  const targetUrl = 'https://feeds.feedburner.com/quotationspage/mqotd';
  const fetchUrl = `${proxyUrl}${encodeURIComponent(targetUrl)}`;
  try {
    // console.log('Fetching URL:', fetchUrl); // Debugging 1: Log the request URL
    const response = await fetch(fetchUrl);
    const data = await response.text();
    
    // console.log('Data fetched:', data); // Debugging 2: Log the raw data
    
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "application/xml");
    const item = xmlDoc.getElementsByTagName("item")[0];
    const str = item.querySelector("description").textContent;
    return str;    
  }catch (error) {
    console.log('Error fetching the RSS feed:', error);
  }  
  return "ERROR";
}

async function fetchRSSWord() {
  const proxyUrl = 'https://corsproxy.io/?';
  const targetUrl = 'https://www.merriam-webster.com/wotd/feed/rss2';
  const fetchUrl = `${proxyUrl}${encodeURIComponent(targetUrl)}`;
  try {
    console.log('Fetching URL:', fetchUrl); // Debugging 1: Log the request URL
    const response = await fetch(fetchUrl);
    const data = await response.text();
    
    // console.log('Data fetched:', data); // Debugging 2: Log the raw data
    
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "application/xml");
    const item = xmlDoc.getElementsByTagName("item")[0];
    const str = item.querySelector("description").textContent;
    const innerdocs = parser.parseFromString(str, "text/html").querySelectorAll("p");
    console.log(innerdocs[1].innerText);
    let st = innerdocs[1].innerText.replaceAll(" ", "").split("•")
    st = st[0] + " ( " + st[2] +")";
    let st2 = innerdocs[2].innerText;
    console.log([st,st2]);
    return st + "19" + st2;
  }catch (error) {
    console.log('Error fetching the RSS feed:', error);
  }  
  return "ERROR";
}
async function fetchRSSJoke() {
  const proxyUrl = 'https://corsproxy.io/?';
  const targetUrl = 'https://jokesoftheday.net/jokes-feed/';
  const fetchUrl = `${proxyUrl}${encodeURIComponent(targetUrl)}`;
  try {
    console.log('Fetching URL:', fetchUrl); // Debugging 1: Log the request URL
    const response = await fetch(fetchUrl);
    const data = await response.text();
    
    // console.log('Data fetched:', data); // Debugging 2: Log the raw data
    
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "application/xml");
    const item = xmlDoc.getElementsByTagName("item")[0];
    const str = item.querySelector("description").textContent;
    const innerdoc = parser.parseFromString(str, "text/html").querySelector("p");
    console.log(innerdoc.innerText);
    return innerdoc.innerText;
  }catch (error) {
    console.log('Error fetching the RSS feed:', error);
  }  
  return "ERROR";
}

async function fetchRSSGerman() {
  const proxyUrl = 'https://corsproxy.io/?';
  const targetUrl = 'https://feeds.feedblitz.com/german-word-of-the-day&x=1';
  const fetchUrl = `${proxyUrl}${encodeURIComponent(targetUrl)}`;
  try {
    console.log('Fetching URL:', fetchUrl); // Debugging 1: Log the request URL
    const response = await fetch(fetchUrl);
    const data = await response.text();
    
    // console.log('Data fetched:', data); // Debugging 2: Log the raw data
    
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, "application/xml");
    const item = xmlDoc.querySelector("item").textContent;
    console.log(item.split("\n")[21]);
    return item.split("\n")[21].replace(":", "19");
  }catch (error) {
    console.log('Error fetching the RSS feed:', error);
  }  
  return "ERROR";
}

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

const Quote = (props) => {
  let quote = props.res;
  return (
  <div className="word">
    <p>{quote}</p>
  </div>
);
}

const App = () => {
  const [wotd, setwotd] = useState("Word Unavailable19Definition Unavailable");
  const [qotd, setqotd] = useState("Quote unavailable");
  const [jotd, setjotd] = useState("Joke unavailable");
  const [gotd, setgotd] = useState("German Word unavailable");

  useEffect(() => {
  //Runs only on the first render
  async function setup() {
    setwotd(await fetchRSSWord());   
    setqotd(await fetchRSSQuote());
    setjotd(await fetchRSSJoke());
    setgotd(await fetchRSSGerman());
  };
  setup();
  // setwotd(fetchRSS());
  // let arr = await fetchRSS();
  // setwotd(["Word", "Def"]);
  // console.log(fetchRSS());
  // console.log(wotd);
}, []);
  // {console.log("Created App");}
  // fetchRSS();
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
        <Wrapper title="Weather" newID='four' />
        <Wrapper title="News" newID='five'/>
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
        <Wrapper title="Joke" newID='nine'>
          <Quote res={jotd}>
          </Quote>
          </Wrapper>
        <Wrapper title="Calendar" newID='ten'>
          <iframe src="https://calendar.google.com/calendar/embed?height=200&wkst=1&ctz=America%2FToronto&showPrint=0&mode=AGENDA&showTitle=0&src=NWE4NDJkZDA4MTdiMDhhNDQyODE2ZjgwODllNzc0ZDY3ZjUwZmI2ZTk4NDgwNGZiYTY2NTM5NzE4NDhlM2U0N0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%239e69af&color=%230b8043" frameborder="0" scrolling="no"></iframe>
        </Wrapper>
        <Wrapper title="Music" newID='eleven'/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
