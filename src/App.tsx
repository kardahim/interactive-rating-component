import React from 'react';
import { useState, useEffect } from 'react'

// assets
import star from './assets/icon-star.svg'
import thanks from './assets/illustration-thank-you.svg'

// styles
import './app.scss'

// components
import Grade from './components/grade/index'


function App() {
  const [grade, setGrade] = useState("")

  const passData = (grade: string) => {
    setGrade(grade)
  }

  // submit function
  const submit = () => {
    if (grade !== "") {
      localStorage.setItem("grade", grade)
      window.location.reload()
    }
  }

  return (
    <div className="App">
      {(localStorage.getItem("grade") === null) ?
        <main className='card'>
          <div className='card-header'>
            <div className='logo-container'><img src={star} alt="star-icon" className='logo' /></div>
          </div>
          <div className='card-content'>
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All feedback is appreciated
              to help us improve our offering!
            </p>
          </div>
          <div className='card-footer'>
            <div className='grades'>
              <Grade grade={1} passData={passData} />
              <Grade grade={2} passData={passData} />
              <Grade grade={3} passData={passData} />
              <Grade grade={4} passData={passData} />
              <Grade grade={5} passData={passData} />
            </div>
            <button onClick={() => submit()}>submit</button>
          </div>
        </main> :
        <main className='card card--after-grade'>
          <div className="thanks-icon-container"><img src={thanks} alt="thanks-icon" /></div>
          <div className='current-grade'>You selected {localStorage.getItem("grade")} out of 5</div>
          <div className='thanks-content'>
            <h1>Thank you!</h1>
            <p>
              We appreciate you taking the time to give a rating. If you ever need more support,
              don’t hesitate to get in touch!
            </p>
          </div>
        </main>
      }
    </div>
  );
}

export default App;
