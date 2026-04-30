import { useEffect, useState } from 'react'

export default function Weather() {
  useEffect(() => {
  const script = document.createElement('script');

  script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
  // script.async = true;

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  }
}, []);

  return (
    
    <div className="commonninja_component pid-2b8bd3b5-e567-453c-a329-f2b3df5766e9"></div>
  );

}