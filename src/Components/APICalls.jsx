import axios from "axios";
export default async function fetchRSSQuote() {
  try{
    // let fetchUrl = 'https://api.chess.com/pub/player/overthinkingbell/stats';
    // const response = await fetch(fetchUrl);
    // const data = await response.text();
    // return data;

    //--------API CALLS-----------
    // console.log('Fetching URL:', fetchUrl); // Debugging 1: Log the request URL
    // const response = await fetch(fetchUrl);
    // const data = await response.text();
    
    // // console.log('Data fetched:', data); // Debugging 2: Log the raw data
    
    // const parser = new DOMParser();
    // const xmlDoc = parser.parseFromString(data, "application/xml");
    // const item = xmlDoc.getElementsByTagName("item")[0];
    // const str = item.querySelector("description").textContent;
    // return str;    
    //----------------------------
  return "Placeholder for Quote";    
  }catch (error) {
    console.log('Error fetching the RSS feed:', error);
  }  
  return "ERROR";
}
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

export async function getRandomQuote(quotes){
  try {
    let newQuote = quotes.random();
    // console.log(String(newQuote['quote']) + ' - ' + String(newQuote['author']));
    // return "This is a test string";
    return [String(newQuote['quote']) , String(newQuote['author'])];
  } catch {
    return "ERROR";
  }
}

export async function fetchRSSWord() {
  try {
    // const envvar = import.meta.env.VITE_APP_API_URL;
    // console.log(envvar);
    // return envvar;
    return "Placeholder for Word of the day"
  }catch (error) {
    console.log('Error fetching the RSS feed:', error);
  }  
  return "ERROR";
}
export async function fetchNews(){
  const envvar = import.meta.env.VITE_APP_API_URL;
  console.log(envvar);
  axios.get(envvar)
    .then((response) => console.log(response.data));
    return "Could not connect to AP news at the moment. Please try later.";
}

// export async function fetchNews() {
//   return "Could not connect to AP news at the moment. Please try later.";
//   const proxyUrl = 'https://cors-anywhere.com/';
//   const targetUrl = 'https://feedx.net/rss/ap.xml';
//   const fetchUrl = `${proxyUrl}${encodeURIComponent(targetUrl)}`;
//   try {
//     console.log('Fetching URL:', fetchUrl); // Debugging 1: Log the request URL
//     const response = await fetch(fetchUrl);
//     const data = await response.text();
//       console.log(data); // Debugging 2: Log the raw data
    
//     const parser = new DOMParser();
//     const xmlDoc = parser.parseFromString(data, "application/xml");
//     const item = xmlDoc.getElementsByTagName("item")[0];
//     const str = item.querySelector("description").textContent;
//     const innerdocs = parser.parseFromString(str, "text/html").querySelectorAll("p");
//     return innerdocs[1].innerText;
//     // let st = innerdocs[1].innerText.replaceAll(" ", "").split("•")
//     // st = st[0] + " ( " + st[2] +")";
//     // let st2 = innerdocs[2].innerText;
//     // console.log([st,st2]);
//     // return st + "19" + st2;
//   }catch (error) {
//     console.log('Error fetching the RSS feed:', error);
//   }  
//   return "ERROR";
// }

export async function fetchRSSGerman() {
  try {
    return "Placeholder for German word"
  }catch (error) {
    console.log('Error fetching the RSS feed:', error);
  }  
  return "ERROR";
}

