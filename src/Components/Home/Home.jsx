import React from 'react'
import Notes from './Note/Notes';
import './Home.css'
function Home({ showAlert }) {

  return (
    <div className='home'>
      <Notes showAlert={showAlert} />
    </div>
  )
}

export default Home;
