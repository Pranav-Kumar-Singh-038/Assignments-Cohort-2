import './App.css';
import React, { useState,useEffect } from 'react';

function App() {
  const [html, setHtml] = useState('');

  const anchor = {
    type: "a",
    props: {
      href: "https://github.com/Pranav-Kumar-Singh-038",
    },
    text: "Visit my GitHub!!"
  }

  useEffect(()=>{
    createReactElement(anchor, setHtml);
  },[]);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  );
}

function createReactElement(element, setHtml) {
  const { type, props, text } = element;
  
  const attributes = Object.keys(props)
    .map(key => `${key}="${props[key]}"`)
    .join(' ');

  setHtml(`<${type} ${attributes}>${text}</${type}>`);
}

export default App;
