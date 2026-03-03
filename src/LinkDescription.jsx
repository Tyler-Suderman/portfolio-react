import React from 'react';
import propTypes from 'prop-types';

function LinkDescription({ highlightedLink, image, wideScreen }) {
  return highlightedLink && wideScreen ?
    (<div>
      <style jsx>{`
        #display-link {
          position: fixed;
          top: 0;r
          left: calc(250px + 30%);
          left: calc(250px + 35vw);
          min-width: 500%;
          width: 100vw;
          min-height: 100%;
          height: 100vh;
          background: linear-gradient(rgba(251,222,222,.4), rgba(10,20,30,.9)), url(${image});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 580px;
          overflow: hidden;
        }
        #display-link ul {
          list-style: none;
          width: 70px;
          padding-top: 100px;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        #display-link li h1 {
          margin: 0;
          line-height: .75em;
          font-size: 7rem;
          font-size: calc(6rem + 3vw);
        }
        pre {
          font-family: 'Amiko', sans-serif;
          color: rgb(10,20,30);
          margin: 0;
          color: white;
        }
      `}</style>
      <div id="display-link">
        <ul>
          {highlightedLink.split('').map((char, i) => {
            return (
              <li key={i}>
                <h1><pre>{char.toUpperCase()}</pre></h1>
              </li>
            )
          })}
        </ul>
      </div>
    </div>) : null;
}

LinkDescription.propTypes = {
  highlightedLink: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  wideScreen: propTypes.bool.isRequired
}

export default LinkDescription;
