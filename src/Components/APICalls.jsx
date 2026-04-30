import axios from "axios";

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

export async function getRandomQuote(quotes){
  try {
    let newQuote = quotes.random();
    return [String(newQuote['quote']) , String(newQuote['author'])];
  } catch {
    return "ERROR";
  }
}

export async function fetchNews(){
  try {
    let current_time = `${new Date().getMonth()}.${new Date().getDate()}`
    let news = localStorage.getItem(current_time);
    if (news) {console.log("Hit Cache");return JSON.parse(news);}
    let envvar = import.meta.env.VITE_APP_API_URL;
    const response = await fetch(envvar);
    const data = await response.json();
    console.log("New search");
    await localStorage.setItem(current_time,JSON.stringify(data));
    return data;
  }catch(error){
    console.log(error.message);
    return "News Error!";
  }
  return "Placeholder text";
}