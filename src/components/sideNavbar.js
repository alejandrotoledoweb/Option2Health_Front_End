import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../redux/actions/sideNavbarActions';
import PropTypes from 'prop-types';

const SideNavBar = ({ logged_in, user, show, toggleMenu, medico, empresa }) => {
  const setShow = (show) => {
    toggleMenu(show);
  };

  return (
    <nav className="h-full">
      <ul className="">
        <li className="flex flex-col">
          <div className="flex mx-4 items-center justify-around">
            <img
              src="http://www.option2health.com/assets/img/logo.png"
              className="img-thumbnail w-24"
              alt="Responsive logo"
            />
            <button
              onClick={() => setShow(show)}
              id="button-2"
              className="p-4 lg:hidden focus:outline-none focus:bg-indigo-200 hover:bg-indigo-200 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          {logged_in ? (
            ''
          ) : (
            <Link
              to="/login"
              className="nav-link ml-3 mt-2 mb-2 text-indigo-500"
            >
              <i className="fas fa-coins"></i> ¿Qué Somos?{' '}
              <i className="message fas fa-info-circle ml-4"></i>
            </Link>
          )}

          <Link
            to="/"
            className="nav-link ml-3 mt-2 mb-2 text-indigo-500"
            href="http://www.option2health.com/"
          >
            <i className="fas fa-home"></i> Inicio{' '}
            <i className="message fas fa-info-circle ml-4"></i>
          </Link>

          {logged_in ? (
            <Link
              to="/coinsults"
              className="nav-link ml-3 mt-2 mb-2 text-indigo-500"
            >
              <i className="fas fa-coins"></i> Coinsults{' '}
              <i className="message fas fa-info-circle ml-4"></i>
            </Link>
          ) : (
            <Link
              to="/login"
              className="nav-link ml-3 mt-2 mb-2 text-indigo-500"
            >
              <i className="fas fa-coins"></i> Coinsults{' '}
              <i className="message fas fa-info-circle ml-4"></i>
            </Link>
          )}

          {logged_in ? (
            <Link
              to="/guardados"
              className="nav-link ml-3 mt-2 mb-2 text-indigo-500"
            >
              <i className="fas fa-bookmark"></i> Guardados{' '}
              <i className="message fas fa-info-circle ml-4"></i>
            </Link>
          ) : (
            <Link
              to="/login"
              className="nav-link ml-3 mt-2 mb-2 text-indigo-500"
            >
              <i className="fas fa-bookmark"></i> Guardados{' '}
              <i className="message fas fa-info-circle ml-4"></i>
            </Link>
          )}
        </li>

        <span className="px-6 my-4 py-4">PUBLICIDAD</span>
        <li className="text-indigo-500 py-2 my-2 mx-4">
          {logged_in && medico ? (
            <div>
              <Link to="/perfilmedico">
                Bienvenido Doctor/a :<br /> {user.name}
              </Link>
            </div>
          ) : logged_in && empresa ? (
            <div>
              <Link to="/perfilempresa">
                Bienvenido Empresa :<br /> {user.name}
              </Link>
            </div>
          ) : logged_in ? (
            <div>
              <Link to="/perfil">
                Bienvenido Usuario :<br /> {user.name}
              </Link>
            </div>
          ) : (
            <Link to="/login">
              Encuentra AQUÍ los servicios y productos ideales para tu salud.
            </Link>
          )}
        </li>
        <li className="text-indigo-500 py-2 my-2 mx-2">
          {medico && logged_in ? (
            <Link
              to="/nuevapublicacion"
              className="mx-2 text-indigo-500 flex justify-items-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Agregar Publicación
            </Link>
          ) : (
            ''
          )}
        </li>
        <li className="text-indigo-500 py-2 my-2 mx-2">
          {medico && logged_in ? (
            <Link
              to="/ayudar"
              className="mx-2 text-indigo-500 flex justify-items-start"
            >
              <i class="fas fa-hands-helping"></i> &nbsp;Ayudanos a Ayudar
            </Link>
          ) : (
            ''
          )}
        </li>
      </ul>
    </nav>
  );
};

SideNavBar.defaultProps = {
  logged_in: PropTypes.bool,
  show: PropTypes.bool,
  user: PropTypes.string,
  toggleMenu: PropTypes.func,
  logoutUserAction: PropTypes.func,
};

SideNavBar.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  medico: PropTypes.bool.isRequired,
  logoutUserAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  logged_in: state.user.logged_in,
  user: state.user.user,
  show: state.sideNav.show,
  medico: state.user.medico,
  empresa: state.user.empresa,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (show) => dispatch(toggleMenu(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNavBar);
