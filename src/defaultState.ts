import trail3 from './images/trail3.jpg';
import trail10 from './images/trail10.jpg';
import trail20 from './images/trail20.jpg';
import trail22 from './images/trail22.jpg';
import trail23 from './images/trail23.jpg';
import trail3mobile from './images/trail3mobile.jpg';
import trail22mobile from './images/trail22mobile.jpg';
import trail23mobile from './images/trail23mobile.jpg';

import { ImageList, LinksByKey } from './types';

interface DefaultState {
  largeImageList: ImageList;
  smallImageList: ImageList;
  linksByKey: LinksByKey;
  bannerOpacity: number;
}

const defaultState: DefaultState = {
  largeImageList: {
    trail3,
    trail10,
    trail20,
    trail22,
    trail23
  },
  smallImageList: {
    trail3mobile,
    trail22mobile,
    trail23mobile,
  },
  linksByKey: {
    github: {
      displayName: 'github',
      href: 'https://github.com/tcsuder/portfolio-react',
      displayText: 'web engineer'
    },
    curriculum: {
      displayName: 'lessons',
      href: 'https://www.learnhowtoprogram.com/react',
      displayText: 'teaches and writes'
    },
    epicodus: {
      displayName: 'Epicodus',
      href: 'https://www.epicodus.com/',
      displayText: 'Epicodus.'
    },
    instagram: {
      displayName: 'instagram',
      href: 'https://www.instagram.com/tyler_suderman/',
      displayText: 'spare time.'
    },
    linkedin: {
      displayName: 'linkedIn',
      href: 'https://www.linkedin.com/in/tylersuderman/',
      displayText: 'work'
    },
    email: {
      displayName: 'email',
      href: 'mailto:tcsuder@gmail.com?subject=hello from portfolio!',
      displayText: "Let's connect!"
    }
  },
  bannerOpacity: 1
};

export default defaultState;
