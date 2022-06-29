import React from 'react';
// assets
import star from './assets/icon-star.svg'
import thanks from './assets/illustration-thank-you.svg'
// styles
import './app.scss'
// components
import Grade from './components/grade/index'

function App() {
  return (
    <div className="App">
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
            <Grade grade={1} />
            <Grade grade={2} />
            <Grade grade={3} />
            <Grade grade={4} />
            <Grade grade={5} />
          </div>
          <button>submit</button>
        </div>
      </main>
    </div>
  );
}

export default App;
