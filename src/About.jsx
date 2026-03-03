import React from 'react';
import propTypes from 'prop-types';
import Link from './Link';

function About({ links, highlight }) {

  // here's a tricky block of code that just makes the link components below... maybe... a little easier to read.
  const text = {};
  Object.keys(links).forEach((key) => {
    text[links[key].displayText] = links[key];
  });

  return (
    <div id="about" className="section-container">
      <style jsx>{`
        .section p {
          font-family: 'Kosugi Maru', sans-serif;
          font-size: 1.5rem;
          font-size: calc(1.5rem + .25vw);
          line-height: 2em;
          margin-bottom: 0;
        }
        .tabbed {
          margin-left: 1em;
          margin-top: 0;
          line-height: 1em;
        }
        .break {
          height: 20px;
        }
        .mission {
          margin-top: 0;
        }
      `}</style>

      <div className="section">
        <p>
          A <Link link={text['web engineer']} highlight={highlight}/>
        </p>
        <p className="tabbed">
          who <Link link={text['teaches and writes']} highlight={highlight}/>
        </p>
        <p className='tabbed'>
          at <Link link={text['Epicodus.']} highlight={highlight}/>
        </p>
        <div className='break'></div>
        <p>On trails and in mountains</p>
        <p className='tabbed'>
          in my <Link link={text['spare time.']} highlight={highlight}/>
        </p>
        <div className='break'></div>
        <p>I care about communities</p>
        <p className='tabbed'>
          and <Link link={text['work']} highlight={highlight}/> to make mine
        </p>
        <p className='tabbed'>inclusive and productive.</p>
        <div className='break'></div>
        <p>
          <Link link={text["Let's connect!"]} highlight={highlight}/>
        </p>
      </div>
    </div>
  );
}

About.propTypes = {
  links: propTypes.object.isRequired,
  highlight: propTypes.func.isRequired
}

export default About;
