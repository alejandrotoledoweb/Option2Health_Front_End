import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const Compartir = () => {
  return (
    <>
      <div className="text-right z-10 mx-2">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full font-medium rounded border-2 flex items-center content-around my-2 px-2 py-2 border-indigo-500 text-white bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600">
              <i className="fas fa-share-alt"></i> &nbsp; Compartir
              <ChevronDownIcon
                className="w-5 h-5 ml-2 -mr-1 text-white"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <i class="fab fa-whatsapp"> </i>
                      &nbsp; Whatsapp
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      &nbsp; Contacto Online
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      {/* <Dropdown className="rounded flex content-around my-2 mx-2 px-2 py-2 text-indigo-400">
        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        <i className="fas fa-info-circle"></i>

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
  </Dropdown.Menu> */}

      {/* <Dropdown className="rounded flex content-around my-2 mx-2 px-2 py-2 text-indigo-400">
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
      </Dropdown>  */}
    </>
  );
};

export default Compartir;
