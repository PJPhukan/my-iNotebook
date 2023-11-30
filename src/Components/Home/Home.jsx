import React from 'react'
import './Home.css'
import Notes from './Note/Notes';

function Home() {

  return (
    <div className='home'>
      <div className="conatainer my-5">
        <h1>Add Your Notes</h1>
        <form action="/">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            <label htmlFor="inputPassword5" className="form-label my-3" >Password</label>
            <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
            <input className="btn btn-primary my-3" type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <Notes/>
    </div>
  )
}

export default Home;
