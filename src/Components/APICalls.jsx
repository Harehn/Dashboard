export default async function fetchRSSQuote() {
  try{
  return "Placeholder for Quote";    
  }catch (error) {
    console.log('Error fetching the RSS feed:', error);
  }  
  return "ERROR";
}

export async function fetchRSSWord() {
  try {
    return "Placeholder for Word of the day"
  }catch (error) {
    console.log('Error fetching the RSS feed:', error);
  }  
  return "ERROR";
}

export async function fetchNews() {
  try {
    return "PlaceHolder for News"; 
  }catch (error) {
    console.log('Error fetching the RSS feed:', error);
  }  
  return "ERROR";
}

export async function fetchRSSGerman() {
  try {
    return "Placeholder for German word"
  }catch (error) {
    console.log('Error fetching the RSS feed:', error);
  }  
  return "ERROR";
}

