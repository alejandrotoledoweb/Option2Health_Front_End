import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser} from '../redux/actions/userActions';

const PerfilMedico = ({logged_in, user, loading, status, error, updateUser}) => {
  const [show, setShow] = useState(false);


  return (
    <div className='flex-inline '>
      <div className={show ? "z-10 fixed inline-block bg-white w-64 h-screen inset-0 transform duration-200 translate-x-0 lg:-translate-x-0" : "fixed lg:inline-block hidden bg-white w-64 h-screen inset-0 transform duration-200 -translate-x-full lg:-translate-x-0" }>
        {/* <SideNavBar /> */}
        <nav className="h-full">
          <ul className="">
            <li className="flex flex-col">
              <div className="flex m-4 items-center justify-around">
                <img src="http://www.option2health.com/assets/img/logo.png" className="img-thumbnail w-24" alt="Responsive logo" />
                <button onClick={() => setShow(show)} id="button-2" className="p-4 lg:hidden focus:outline-none focus:bg-indigo-200 hover:bg-indigo-200 rounded"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg></button>
              </div>

              { logged_in ? "": <Link to="/login" className="nav-link ml-3 mt-2 mb-2 text-indigo-500"><i className="fas fa-coins"></i> ¿Qué Somos? <i className="message fas fa-info-circle ml-4"></i></Link>}
              
              <Link to="/" className="nav-link ml-3 mt-2 mb-2 text-indigo-500" href="http://www.option2health.com/"><i className="fas fa-home"></i> Inicio <i className="message fas fa-info-circle ml-4"></i></Link> 

              { logged_in ? <Link to="/coinsults" className="nav-link ml-3 mt-2 mb-2 text-indigo-500"><i className="fas fa-coins"></i> Coinsults <i className="message fas fa-info-circle ml-4"></i></Link>: <Link to="/login" className="nav-link ml-3 mt-2 mb-2 text-indigo-500"><i className="fas fa-coins"></i> Coinsults <i className="message fas fa-info-circle ml-4"></i></Link>}
              
              { logged_in ? <Link to="/guardados" className="nav-link ml-3 mt-2 mb-2 text-indigo-500"><i className="fas fa-bookmark"></i> Guardados <i className="message fas fa-info-circle ml-4"></i></Link>: <Link to="/login" className="nav-link ml-3 mt-2 mb-2 text-indigo-500"><i className="fas fa-bookmark"></i> Guardados <i className="message fas fa-info-circle ml-4"></i></Link>}
            </li>

            <span className="px-6 my-4 py-4">PUBLICIDAD</span>

          </ul>
        </nav>
      </div>
      <div  className="lg:w-64 hidden lg:inline-block" />

      <section className="inline-block absolute mx-6 justify-center ">
        <nav className="border rounded border-gray-200 bg-white flex flex-wrap items-center justify-start lg:justify-around ">

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

        <div className='grid grid-cols-1 gap-2 md:grid-cols-3 w-full justify-items-center self-items-center'>

          <aside className='col-span-1 justify-self-stretch'>

            <div className=" my-4 py-2 bg-white border rounded flex flex-col justify-center items-center max-w-2xl w-full">

                {/* <img src="http://www.option2health.com/assets/img/logo.png" className="img-thumbnail w-24" alt="Responsive logo" /> */}
                <span><i class="far fa-user-circle text-lg md:text-8xl my-2"></i></span>
                <div>
                  <ul className='flex space-x-2 m-2 text-4xl text-blue-700'>
                    <li><button><i class="fab fa-facebook-square"></i></button></li>
                    <li><button><i class="fab fa-twitter-square"></i></button></li>
                    <li><button><i class="fab fa-linkedin"></i></button></li>
                  </ul>
                </div>

                <h4 className="text-indigo-600 my-2 ">Datos Personales del Médico</h4>
                <hr className="text-indigo-300 py-2"/>
                <p className="flex justify-between my-2 px-2 text-xl">Nombre: &nbsp;<span>{user.name}</span></p>
                <p className="flex justify-between my-2 px-2">Email: &nbsp;<span>{user.email}</span></p>
                <p className="flex justify-between my-2 px-2">Título: &nbsp;<span>{user.titulo_profesional}</span></p>
            </div> 
          </aside>
          <section className='col-span-1 justify-self-stretch bg-white rounded my-4 py-2 px-4 grid place-content-center'>
            <Link to="/datosmedico"><button className='mx-4 my-4 py-4 px-4 rounded border border-indigo-400 text-indigo-500 hover:bg-indigo-500 hover:text-white'><h3>Editar datos del perfil</h3></button></Link>
            <Link to="/articulosmedico"><button className='mx-4 my-4 py-4 px-4 rounded border border-indigo-400 text-indigo-500 hover:bg-indigo-500 hover:text-white'><h3>Ver y editar publicaciones</h3></button></Link>
          </section>


        </div>
      </section>
    </div>
  )
};

PerfilMedico.defaultProps = {
  logged_in: PropTypes.bool,
  updateUser: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

PerfilMedico.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  logged_in: state.user.logged_in,
  user: state.user.user,
  status: state.user.status,
  loading: state.user.loading,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userDetails) => dispatch(updateUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PerfilMedico);