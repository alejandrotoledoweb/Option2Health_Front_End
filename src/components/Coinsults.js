import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCoins } from '../redux/actions/coinsActions';
import { logoutUserAction } from '../redux/actions/userActions'
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";


const Coinsults = ({logged_in, user, coins, loadCoins, medico, empresa, logoutUserAction}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    loadCoins()
  }, [loadCoins]);


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
        <nav className="border rounded border-gray-200 bg-white flex flex-wrap items-center justify-start lg:justify-around w-10/12">

          <button onClick={() => setShow(!show)} className="lg:hidden rounded px-2 py-2 focus:bg-indigo-600 focus:outline-none hover:bg-indigo-600 hover:text-white mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div>

          
          </div>

          <p className="text-indigo-400 py-2 mx-2">
            { logged_in ? <div><Link to="/perfil">Bienvenido : {user.name}</Link> <span className="mx-4 xy-4">Logout</span></div>: <Link to="/login">
              ¿Listo para tomar el control de tu salud y de los demás? INGRESA AQUÍ
            </Link>}
          </p>
        </nav> 

        <h2 className="my-10 relative  p-2 mb-2  max-w-3xl md:max-w-3xl mx-4 text-3xl text-indigo-400">Coinsults</h2>
        <div className="flex my-2 px-2 flex-wrap items-start justify-center">
          <div>

            <div  className="my-8 relative shadow px-4 py-4 mb-5 bg-white rounded border max-w-3xl md:max-w-3xl mx-2">
              <section>
                

                <div className="flex my-6 flex-wrap justify-end lg:justify-between">
                  <div className="w-24 mx-6">
                    <img className="absolute bg-white left-10 -top-10 border border-info d-flex flex-column justify-content-center w-28 h-28 rounded-full" src="https://option2health.com/assets/img/coinsults.jpeg" alt="curtita de colores" />
                  </div>
                  <div className="my-2 mx-6 pl-10 text-center">
                    <h3>Coinsults Actuales</h3>
                    <p className="text-sm">Total de coinsults : <span className="font-bold">{coins.reduce((accu, item) => accu + item.value, 0)}</span></p>
                  </div>
                  <div className="my-2 mx-6 text-center">
                    <h3>Movimientos</h3>
                    <p className="text-sm">Total de movimientos: <span className="font-bold">{coins.length}</span></p>
                  </div>
                </div>

              </section >
              <div>

                <h4 className="text-indigo-600 my-4 ">¿Sabes qué son los Coinsults?</h4>
                <hr className="text-indigo-300 my-2 py-2"/>
                <p className="my-2">
                  Son los puntos que ganas cada vez que interactúas con esta plataforma. Algunas maneras de obtener Coinsults son:
                </p>

                <ul className="my-2">
                  <li className="my-2">
                    - Al crear tu cuenta en Option2health con lo cual ganas 5 Coinsults de bienvenida.
                  </li>
                  <li className="my-2">
                    - Primer “Like” en una publicación de la plataforma de Option2health.
                  </li>
                  <li className="my-2">
                    - Creación de contenido de valor para tus pacientes, entre otras.
                  </li>
                </ul>

                <h4 className="my-4">¿Para qué sirven?</h4>
                <p className="my-2">
                  Con tus Coinsults acumulados pordrás canjearlos por más publicaciones pautadas en nuestra plataforma y de esta manera llegar a más usuarios y potenciales pacientes que requieran de tus servicios.
                </p>
              </div>
            </div>
          </div>

          <div className="my-10 relative shadow p-4 mb-5 bg-white rounded mx-4 border max-w-3xl">
            <article>
              <div>
                <h3>Tus Movimientos son: {coins.length}</h3>
                <p>En esta sección podrás encontrar los mivimientos realizados en tu cuenta de O2H</p>
              </div>
              <div className="flex flex-col my-4">
              {coins.map ((co) => <div className="flex">
                <p className="flex items-center bg-indigo-300 text-white justify-center text-3xl w-14 h-14 rounded-full">+</p>
                <div className="flex-inline bg-white mx-6">
                  <p className="text-sm my-2">Creado Fecha: {co.date_created} </p>
                  <p className="text-sm my-2">Has ganado <span className="text-indigo-600 text-md font-bold">{co.value}</span> coinsult</p>
                  <p className="text-md my-2">{co.message}</p>
                  <hr/>
                </div>
              </div>)}
              </div>
            </article>
          </div>
        </div> 
      </section>
    </div>
  )
};

Coinsults.defaultProps = {
  logged_in: PropTypes.bool,
  user: PropTypes.object,
  coins: PropTypes.object,
};

Coinsults.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  coins: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  logged_in: state.user.logged_in,
  user: state.user.user,
  coins: state.coins.coins,
  medico: state.user.medico,
  empresa: state.user.empresa,
});

const mapDispatchToProps = (dispatch) => ({
  loadCoins: () => dispatch(loadCoins()),
  logoutUserAction: (userId) => dispatch(logoutUserAction(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Coinsults);