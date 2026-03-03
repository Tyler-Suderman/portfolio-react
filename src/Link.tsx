import React from 'react';
import { LinkItem } from './types';

interface Props {
  link: LinkItem;
  highlight: (name: string) => void;
}

function Link({ highlight, link }: Props) {

  return (
    <a
      id={link.id}
      className="link"
      target="_blank"
      rel="noopener noreferrer"
      href={link.href}
      onMouseEnter={() => {
        highlight(link.displayName);
      }}
      onMouseLeave={() => {
        highlight('');
      }}>

      {link.displayText}

    </a>
  );
}

export default Link;
