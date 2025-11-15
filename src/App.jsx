import { useState } from 'react'
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

const App = () => {
  return (
    <div className='app'>
      <h1>Hello Nitin!!</h1>
      <div className='container'>
        <Wrapper title="Tasks" newID='two'>
          <input type="checkbox" id="task1" name="task1" value=""/>
          <label for="task1">Read emails</label> <br/>
          <input type="checkbox" id="task2" name="task2" value=""/>
          <label for="task2">House chores</label> <br/>
          <input type="checkbox" id="task3" name="task3" value=""/>
          <label for="task3"> Exercise</label> <br/>
          <input type="checkbox" id="task4" name="task4" value=""/>
          <label for="task4">Journal</label> <br/>
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
        <Wrapper title="Word of the day" newID='six'/>
        <Wrapper title="Learn a language" newID='seven'/>
        <Wrapper title="Quote of the day" newID='eight'/>
        <Wrapper title="Fun Fact" newID='nine'/>
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
