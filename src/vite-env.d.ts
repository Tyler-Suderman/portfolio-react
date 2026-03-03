/// <reference types="vite/client" />

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.eot' {
  const src: string;
  export default src;
}

declare module '*.woff' {
  const src: string;
  export default src;
}

declare module '*.woff2' {
  const src: string;
  export default src;
}

declare module '*.ttf' {
  const src: string;
  export default src;
}

// export {} makes this a module so the declarations below are augmentations
export {};

// Extend React's style element to support styled-jsx attributes
declare module 'react' {
  interface StyleHTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

// Vite defines process.env.NODE_ENV at build time; declare it for type checking
declare global {
  const process: {
    env: {
      NODE_ENV: string;
      PUBLIC_URL: string;
    };
  };
}
