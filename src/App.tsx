import React, { useState, useEffect, useCallback, useMemo } from 'react';
import NameBanner from './NameBanner';
import About from './About';
import LinkDescription from './LinkDescription';
import defaultState from './defaultState';
import { ImageList } from './types';
import AmikoEot from './fonts/Amiko-Bold.eot?url';
import AmikoWoff2 from './fonts/Amiko-Bold.woff2?url';
import AmikoWoff from './fonts/Amiko-Bold.woff?url';

function getRandomImage(imageList: ImageList) {
  const keys = Object.keys(imageList);
  return imageList[keys[Math.floor(Math.random() * keys.length)]];
}

function getWideScreen() {
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
  return window.innerWidth >= 550 && !mobile;
}

function App() {
  const [displayImage, setDisplayImage] = useState<string>(defaultState.smallImageList['trail3mobile']);
  const [wideScreen, setWideScreen] = useState(false);
  const imageList = useMemo(
    () => wideScreen ? defaultState.largeImageList : defaultState.smallImageList,
    [wideScreen]
  );
  const [bannerOpacity, setBannerOpacity] = useState(defaultState.bannerOpacity);
  const [highlightedLink, setHighlightedLink] = useState('');

  const handleScroll = useCallback(() => {
    const banner = document.getElementById('banner');
    if (!banner) return;
    const bannerBottom = banner.getBoundingClientRect().bottom;
    const slowDownOpacityChange = (bannerBottom - 100) / 50;
    setBannerOpacity(slowDownOpacityChange < 10 ? slowDownOpacityChange / 10 : 1);
  }, []);

  const handleResize = useCallback(() => {
    setWideScreen(getWideScreen());
  }, []);

  useEffect(() => {
    setDisplayImage(getRandomImage(imageList));
  }, [imageList]);

  useEffect(() => {
    document.title = 'TYLER SUDERMAN';
    setWideScreen(getWideScreen());

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <main>
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Kosugi+Maru');
        @font-face {
            font-family: 'Amiko';
            src: url(${AmikoEot});
            src: url(${AmikoEot}#iefix) format('embedded-opentype'),
                url(${AmikoWoff2}) format('woff2'),
                url(${AmikoWoff}) format('woff');
            font-weight: bold;
            font-style: normal;
        }
        body {
          font-family: 'Amiko', sans-serif;
          color: rgb(10,20,30);
          min-width: 500px;
          margin: 0;
          padding: 0;
        }
        a {
          color: rgb(10,20,30);
        }
        #root, main, .section-container {
          min-width: inherit;
        }
        .section-container {
          max-width: 1200px;
          min-width: 500px;
          margin: 0 auto;
          min-height: 500px;
          width: 70%;
        }
        .section {
          min-width: 480px;
          padding-left: 20px;
          padding-top: calc(100px + 5vw);
          padding-bottom: calc(100px + 5vw);
          width: 50vw;
        }
      `}</style>
      <NameBanner
        opacity={bannerOpacity}
        image={displayImage}
        wideScreen={wideScreen} />
      <LinkDescription
        highlightedLink={highlightedLink}
        image={displayImage}
        wideScreen={wideScreen} />
      <About
        links={defaultState.linksByKey}
        highlight={setHighlightedLink} />
    </main>
  );
}

export default App;
