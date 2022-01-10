import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';
import { recordCreateAction } from '../../redux/actions/recordsActions';

const Vermas = ({recordCreateAction}) => {
  return (
    <>
      {/* <Dropdown className="rounded flex content-around my-2 mx-2 px-2 py-2 text-indigo-400">
        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        <i className="fas fa-info-circle"></i>&nbsp; Ver más
        </Dropdown.Toggle>

        <Dropdown.Menu className="flex flex-col w-full">
          <Dropdown.Item onClick={(id)=> recordCreateAction(id)} className="py-1 inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            &nbsp; Guardar
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="flex py-1">
            <i class="fab fa-whatsapp"> </i>
            &nbsp;  Whatsapp
          </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="flex py-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          &nbsp; Contacto Online
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="flex py-1">
          <i class="fab fa-whatsapp"> </i>
          &nbsp; Contacto Whatsapp
        </Dropdown.Item>
        </Dropdown.Menu> */
        </Dropdown.Menu>
      </Dropdown>  */}
    </>
  )
};

export default Vermas;