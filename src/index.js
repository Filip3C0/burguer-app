import React from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './routes';
import GlobalStyles from "./style/globalstyles"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Routers/>
        <GlobalStyles/>
        
    </>
)

