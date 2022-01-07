import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const Compartir = () => {
  return (
    <div >
      <Dropdown className="rounded flex content-around my-2 mx-2 px-2 py-2 text-indigo-400">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
        <i className="fas fa-share-alt"></i> &nbsp; Compartir
        </Dropdown.Toggle>

        <Dropdown.Menu className="flex flex-col w-full">
          <Dropdown.Item href="#/action-1" className="py-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            &nbsp; Facebook
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="py-1">
            <i class="fab fa-whatsapp"> </i>
            &nbsp;  Whatsapp
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> 
    </div>
  )
};

export default Compartir;