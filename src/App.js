import React from 'react';
import MenuItem from './MenuItem'
import './App.css';

const menu = [
  {
    title: "Home",
    link: "#",
    active: true
  },
  {     
    title: "Services",
    link: "#1",
    active: true,
    subMenu: [  "For entrepreneurs",
                "For students",
                "For hobbylists"]
  
  },
  {
    title: "Contact",
    link: "#3",
    active: true
  },
]

function App() {
  return (
    <div className='list'>
      {
        menu.map(el => <MenuItem item={el} />)
      }
    </div>
  );
}

export default App;
