import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadRecords } from '../redux/actions/recordsActions'
import { logoutUserAction } from '../redux/actions/userActions'
import Spinner from './spinner'
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";


const Guardados = ({logged_in, user, userRecords, loadRecords, reLoading, medico, empresa }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    loadRecords();
  },[loadRecords])

  const logout = (userId) => {
    logoutUserAction(userId);
  }

  return (
    <div>
      <div className={show ? "z-10 fixed inline-block bg-white w-64 h-screen inset-0 transform duration-200 translate-x-0 lg:-translate-x-0" : "fixed lg:inline-block hidden bg-white w-64 h-screen inset-0 transform duration-200 -translate-x-full lg:-translate-x-0" }>
        {/* <SideNavBar /> */}
        <nav className="h-full">
          <ul className="">
            <li className="flex flex-col">
              <div className="flex m-4 items-center justify-around">
                <img src="http://www.option2health.com/assets/img/logo.png" className="img-thumbnail w-24" alt="Responsive logo" />
                <button onClick={() => setShow(!show)} id="button-2" className="p-4 lg:hidden focus:outline-none focus:bg-indigo-200 hover:bg-indigo-200 rounded"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg></button>
              </div>

              { logged_in ? "": <Link to="/login" className="nav-link ml-3 mt-2 mb-2 text-indigo-500"><i className="fas fa-coins"></i> ¿Qué Somos? <i className="message fas fa-info-circle ml-4"></i></Link>}
              
              <Link to="/" className="nav-link ml-3 mt-2 mb-2 text-indigo-500" href="http://www.option2health.com/"><i className="fas fa-home"></i> Inicio <i className="message fas fa-info-circle ml-4"></i></Link> 

              { logged_in ? <Link to="/coinsults" className="nav-link ml-3 mt-2 mb-2 text-indigo-500"><i className="fas fa-coins"></i> Coinsults <i className="message fas fa-info-circle ml-4"></i></Link>: <Link to="/login" className="nav-link ml-3 mt-2 mb-2 text-indigo-500"><i className="fas fa-coins"></i> Coinsults <i className="message fas fa-info-circle ml-4"></i></Link>}
              
              { logged_in ? <Link to="/guardados" className="nav-link ml-3 mt-2 mb-2 text-indigo-500"><i className="fas fa-bookmark"></i> Guardados <i className="message fas fa-info-circle ml-4"></i></Link>: <Link to="/login" className="nav-link ml-3 mt-2 mb-2 text-indigo-500"><i className="fas fa-bookmark"></i> Guardados <i className="message fas fa-info-circle ml-4"></i></Link>}
            </li>

            <span className="px-6 my-4 py-4">PUBLICIDAD</span>
            <li className="text-indigo-500 py-2 my-2 mx-4">
              { logged_in && medico ? 
                <div><Link to="/perfilmedico">Bienvenido Doctor/a :<br /> {user.name}</Link></div> : 
                logged_in && empresa ? <div><Link to="/perfilempresa">Bienvenido Empresa :<br /> {user.name}</Link></div> : 
                logged_in ? <div><Link to="/perfil">Bienvenido Usuario :<br /> {user.name}</Link></div> : <Link to="/login">
                Encuentra AQUÍ los servicios y productos ideales para tu salud.
              </Link>}
            </li>
          </ul>
        </nav>
      </div>
      <div  className="lg:w-64 hidden lg:inline-block" />

      <section className="inline-block absolute mx-6 justify-center">
      <nav className="border rounded border-gray-200 bg-white flex flex-wrap items-center justify-start lg:justify-around mx-2">

        <button onClick={() => setShow(show)} className="lg:hidden rounded px-2 py-2 focus:bg-indigo-600 focus:outline-none hover:bg-indigo-600 hover:text-white mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div>
        </div>

        <p className="text-indigo-500 py-2 mx-2">
          { logged_in && medico ? 
            <div><Link to="/perfilmedico">Bienvenido Doctor/a : {user.name}</Link> <button onClick={()=> logout(user.id)}className="mx-4 xy-4">Logout</button></div> : 
            logged_in && empresa ? <div><Link to="/perfilempresa">Bienvenido Empresa : {user.name}</Link> <button onClick={()=> logout(user.id)}className="mx-4 xy-4">Logout</button></div> : 
            logged_in ? <div><Link to="/perfil">Bienvenido Usuario : {user.name}</Link> <button onClick={()=> logout(user.id)}className="mx-4 xy-4">Logout</button></div> : <Link to="/login">
            ¿Listo para tomar el control de tu salud y de los demás? INGRESA AQUÍ
          </Link>}
        </p>
        </nav>

        <h1 className="text-indigo-600 my-4 text-xl mx-1 bg-white px-4 py-4 border rounded flex flex-col max-w-lg md:w-96">Articulos Guardados</h1>
        <div className="flex my-2 px-2 flex-wrap items-center justify-center">

          <section className="my-2 px-2 flex-wrap items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-6">
            {reLoading ? <Spinner className="" /> : ""}
            {/* <!-- Article 1 --> */}
            {userRecords.map((ar) => (

              <article key={ar.id} className="my-10 relative shadow p-4 mb-5 bg-white rounded mx-auto border w-full">
                <div className="px-2 absolute bg-white -right-5 -top-10 border rounded border-info d-flex flex-column justify-content-center h-auto w-40 ">
                  <img src="http://www.option2health.com/assets/img/logo.png" className="border-0 img-thumbnail mx-auto w-10" alt="Responsive logo" />
                  <p className="text-center mt-2 mb-2"><a className="text-dark" href="https://option2health.com/index.html">Dr. O2H</a></p>
                </div>
                <h6 className="text-left font-bold mt-3 mr-20">{ar.title}</h6>
                {/* <p className="text-left font-semibold mb-2">Síntomas Uterinos</p> */}
                <hr className="text-black"></hr>
                <div className="flex items-center content-center flex-col">
                  <p className="my-3 mr-16 pr-2">{ar.description}<a href="https://medlineplus.gov/spanish/ency/article/000914.htm" target="_blank" rel="noreferrer" className="text-indigo-400">Ver más...</a></p>
                  <div className="aspect-w-16 aspect-h-9 max-w-full w-full">
                    <iframe  src={ar.video} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                  </div>
                  <section className="flex items-center  justify-center my-3 flex-wrap">

                  </section>
                </div>
              </article>
            ))
            }
            
          </section>
        </div> 
      </section>
    </div>
  )
};

Guardados.defaultProps = {
  logged_in: PropTypes.bool,
  loadRecords: PropTypes.func,
  reLoading: PropTypes.bool,
};

Guardados.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  userRecords: PropTypes.arrayOf(Object).isRequired,
  loadRecords: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  logged_in: state.user.logged_in,
  user: state.user.user,
  userRecords: state.records.records,
  reLoading: state.records.reLoading,
  medico: state.user.medico,
  empresa: state.user.empresa,
});

const mapDispatchToProps = (dispatch) => ({
  loadRecords: () => dispatch(loadRecords()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Guardados);