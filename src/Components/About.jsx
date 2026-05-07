import Footer from "./Footer";
const About = () => {
  return (
  <div className="about">
    <h2>About Website</h2>
    <div className="boxes para">
        <h3>Summary</h3>
        <div className="innerdoc">
        <p>This website is a proof of concept of a dashboard where you can get most of the things you need to. 
            The reason for this is to avoid going to multiple websites and also to avoid the recommendations of the websites.
            Currently, the modules loaded on the screen are
        </p>
        <ol>
            <li>A todo List</li>
            <li>Motivational Quotes</li>
            <li>Weather</li>
            <li>News</li>
            <li>Calendar</li>
            <li>Music</li>
        </ol>
        </div>
    </div>

    <div className="boxes para">
    <div className="innerdoc">
        <h3>Attribution</h3>
        <p>Here are the attribution for the API of the modules.</p>
        <ol>
            <li>Tasks - Personally created API</li>
            <li>Quotes - Personally created API</li>
            <li>Weather - commoninja.com</li>
            <li>News - newsapi.org</li>
            <li>Calendar - Google Calendar</li>
            <li>Music - Spotify</li>
        </ol>
    </div>
    </div>

    <div className="boxes para">
    <div className="innerdoc">
        <h3>Use of AI</h3>
        <p>Although some code snippets were referenced, most of the code was written from scratch. 
            You can refer to the commits at <a href="https://github.com/Harehn/Dashboard">GitHub</a>. 
            No AI (Claude, chatgpt, copilot etc) was used in the making of this website. 
            I understand that AI can be used as a part of workflow to make things much easier and also accelerate development in time sensitive cases. 
            However, I think that it impedes skill acquisition.
            You can fork the repository and deploy specific commits to see the different versions of the website. </p>
    </div>
    </div>

    <div className="boxes para">
    <div className="innerdoc">
        <h3>Tech Stack</h3>
        <p><b>Tech Stack:</b> React, npm, Render, Express JS, Tailwind CSS, Responsive Design, Vite, JSON <br/>
            <b>GitHub:</b> <a href="https://github.com/Harehn/Dashboard" target="_blank" rel="noopener noreferrer">https://github.com/Harehn/Dashboard</a> <br/>
            <b>Live Website:</b> <a href="https://dashboard-s813.onrender.com/" target="_blank" rel="noopener noreferrer">https://dashboard-s813.onrender.com/</a> </p>
    </div>
    </div>
    <Footer/>
  </div>
);
}

export default About;
