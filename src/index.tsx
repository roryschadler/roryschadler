/* eslint-disable no-useless-escape */
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App';

// prettier-ignore
// eslint-disable-next-line no-console
console.log([
" ___         ___     _            _ ",
"| _ \\___ _ _/ __| __| |_  __ _ __| |",
"|   / _ \\ '_\\__ \\/ _| ' \\/ _` / _` |",
"|_|_\\___/_| |___/\\__|_||_\\__,_\\__,_|",
__APP_VERSION__,
].join('\n'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
