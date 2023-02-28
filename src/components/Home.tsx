import React from "react"
import { Link } from "react-router-dom"


function Home() {
  return (
    // ! has-bg-vid is responsible for the video in the css
    <section className="section hero is-large has-bg-vid">
      <div className="hero-body">
        <div className="container">
        <div className="card-content">
          <span className="tag is-white title is-1">
            Fitcoin
          </span>
          <h2 className="subtitle is-2 has-text-white">
            Get rewards for working out
          </h2>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Home