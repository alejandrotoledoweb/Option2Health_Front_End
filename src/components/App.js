import React, { useEffect}  from 'react';
import '../styles/App.css';
// import Vermas  from './buttons/ver_mas';
import Compartir  from './buttons/compartir';
import SideNavBar from './sideNavbar';
import { searchArticles } from '../redux/actions/articleActions';
import { likeCreateAction } from '../redux/actions/likeActions';
import { recordCreateAction } from '../redux/actions/recordsActions';
import { logoutUserAction } from '../redux/actions/userActions'
import Spinner from './spinner'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toggleMenu } from '../redux/actions/sideNavbarActions';
import Dropdown from 'react-bootstrap/Dropdown';



const App = ({searchArticles, logged_in, arLoading, articles, likeCreateAction, user, show, toggleMenu, recordCreateAction, logoutUserAction, medico, empresa}) => {
  // const [isOpen, setIsOpen] = useState(false);
  const setShow = (show) => {
    console.log(!show, 'app')
    toggleMenu(show);
  }

  const initialValues = {
    title: "",
  };

  useEffect(() => {
    searchArticles("a");
    console.log(`logged_in: ${logged_in}`, `medico: ${medico}`);
    console.log(show)
  },[searchArticles, logged_in, show, medico])

  const appointmentSchema = Yup.object().shape({
    title: Yup.string()
  });

  const submitForm = (values) => {
    const data = {
      title: values.title,
    };
    console.log(data.title);
    searchArticles(data.title);
  };

  const createLike = (arId) => {
    likeCreateAction(arId)
  }

  const createRecord = (arId) => {
    recordCreateAction(arId);
  }

  const logout = (userId) => {
    logoutUserAction(userId);
  }

  // const message = () => {
  //   arError === "" && arLoading === false ? (
  //     <span className="text-green-600 flex justify-center items-center self-center">Iniciado sesión con éxito.</span>
  //   ) : (
  //     <span className="text-red-600 text-center flex justify-center items-center self-center">{error}</span>

  //   );
  // }


  return (
    <div className="flex-inline ">
      <div className={show ? "z-10 fixed inline-block bg-white w-64 h-screen inset-0 transform duration-200 translate-x-0 lg:-translate-x-0" : "fixed lg:inline-block hidden bg-white w-64 h-screen inset-0 transform duration-200 -translate-x-full lg:-translate-x-0" }>
        {/* <SideNavBar /> */}

        <SideNavBar />
      </div>
      <div  className="lg:w-64 hidden lg:inline-block" />


      <div className="inline-block absolute mx-6 justify-center">
        {/* <TopBar /> */}

        <nav className="border rounded border-gray-200 bg-white flex flex-wrap items-center justify-start lg:justify-around mx-2 pt-4">

          <button onClick={() => setShow(show)} className="lg:hidden rounded px-2 py-2 focus:bg-indigo-600 focus:outline-none hover:bg-indigo-600 hover:text-white mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div>

          <Formik
            
            initialValues={initialValues}
            validationSchema={appointmentSchema}
            onSubmit={(values, {resetForm}) => {
              submitForm(values);
              resetForm({initialValues: ""})
            }}
          >
            {(formik) => {
              const { errors, touched, isValid, dirty } = formik;
              return (
                <div className="mx-4">
                  <Form className="flex flex-wrap lg:flex-nowrap items-center">
                    <div className="form-group flex flex-col justify-center">

                      <Field
                        type="title"
                        name="title"
                        id="title"
                        className={`${
                          errors.title && touched.title
                            ? "is-invalid"
                            : "is-valid"
                        } form-control border rounded bg-gray-200 mx-2 mt-2 mb-2 py-2 px-1`}
                      />

                      <ErrorMessage
                        name="title"
                        component="span"
                        className="text-red-600 text-center mt-2 mb-4"
                      />
                    </div>

                    <div className="flex items-center flex-col">
                      <button
                        type="submit"
                        className={`${
                          !(dirty && isValid) ? "disabled:opacity-50" : "bg-green-400"
                        } border rounded  mx-2 mt-2 my-2 px-2 py-2 inline-block`}
                        disabled={!(dirty && isValid)}
                      >
                        Buscar
                      </button>

                    </div>
                  </Form>
                  <div className="mt-3" />
                  {/* <p>{loading ? "" : message()}</p> */}
                </div>
              );
            }}
          
          </Formik>
          </div>

          <p className="text-indigo-500 py-2 mx-2 inline-flex items-center justify-center">
            { logged_in && medico ? 
              <div><Link to="/perfilmedico">Bienvenido Doctor/a : {user.name}</Link> <button onClick={()=> logout(user.id)}className="mx-4 xy-4">Logout</button></div> : 
              logged_in && empresa ? <div><Link to="/perfilempresa">Bienvenido Empresa : {user.name}</Link> <button onClick={()=> logout(user.id)}className="mx-4 xy-4">Logout</button></div> : 
              logged_in ? <div><Link to="/perfil">Bienvenido Usuario : {user.name}</Link> <button onClick={()=> logout(user.id)}className="mx-4 xy-4">Logout</button></div> : <Link to="/login">
              ¿Listo para tomar el control de tu salud y de los demás? INGRESA AQUÍ
            </Link>}
          </p>
        </nav> 

        <section className="my-2 px-2 flex-wrap items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-6">
        {arLoading ? <Spinner className="" /> : ""}
        {/* <!-- Article 1 --> */}
        {articles.map((ar) => (

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
                {/* <MeGusta /> */}
                <button onClick={() => createLike(ar.id)} type="button" className="text-indigo-500 inline-flex items-center justify-center rounded-md border border-indigo-300 shadow px-4 py-2 bg-white text-md font-medium hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-300 focus:text-indigo-900 focus:bg-blue-600"><i className="fas fa-heartbeat"></i> &nbsp;{ar.likes.length} &nbsp; Me Gusta</button>
                
                <Compartir />
                
                <Dropdown className="rounded flex content-around my-2 mx-2 px-2 py-2 text-indigo-400">
                  <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                  <i className="fas fa-info-circle"></i>&nbsp; Ver más
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="flex flex-col w-full">
                    <Dropdown.Item onClick={()=> createRecord(ar.id)} className="py-1 inline-flex ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      &nbsp; Guardar
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-3" className="flex py-1">
                      <i class="fab fa-whatsapp"> </i>
                      &nbsp;  Whatsapp
                    </Dropdown.Item> */}
                  {/* <Dropdown.Item href="#/action-2" className="flex py-1">
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
                  {/* </Dropdown>  */}
                  </Dropdown.Menu>
                </Dropdown> 
                <div className="relative">

                  {/* <button className="text-indigo-500 inline-flex items-center justify-center rounded-md border border-indigo-300 shadow px-4 py-2 bg-white text-md font-medium hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-300 focus:text-white focus:bg-indigo-600" onClick={() => setIsOpen(!isOpen)}>
                    <i className="fas fa-info-circle"></i>&nbsp;Ver más
                  </button> */}

                  {/* {isOpen && ( <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                    <button onClick={() => createRecord(ar.id)} className='rounded justify-start w-full group flex items-center px-4 py-2 text-sm text-indigo-500 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-300 focus:text-white focus:bg-indigo-600'>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      &nbsp; Guardar
                    </button>

                  </div> ) } */}

                      {/* <Dropdown.Item href="#/action-2" className="flex py-1">
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
                  {/* </Dropdown>  */}
                </div>
              </section>
            </div>
          </article>
        ))
        }
          
        </section>
      </div>
    </div>
  );
}

App.defaultProps = {
  logged_in: PropTypes.bool,
  searchArticles: PropTypes.func,
  likeCreateAction: PropTypes.func,
  show: PropTypes.bool,
  toggleMenu: PropTypes.func,
  recordCreateAction: PropTypes.func,
  logoutUserAction: PropTypes.func,
};

App.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  articles: PropTypes.arrayOf(Object).isRequired,
  arLoading: PropTypes.bool.isRequired,
  arError: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  recordCreateAction: PropTypes.func.isRequired,
  logoutUserAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  articles: state.article.articles,
  logged_in: state.user.logged_in,
  arLoading: state.article.arLoading,
  arError: state.article.arError,
  user: state.user.user,
  show: state.sideNav.show,
  medico: state.user.medico,
  empresa: state.user.empresa,
});

const mapDispatchToProps = (dispatch) => ({
  searchArticles: (loginDetails) => dispatch(searchArticles(loginDetails)),
  likeCreateAction: (arId) => dispatch(likeCreateAction(arId)),
  toggleMenu: (show) => dispatch(toggleMenu(show)),
  recordCreateAction: (arId) => dispatch(recordCreateAction(arId)),
  logoutUserAction: (userId) => dispatch(logoutUserAction(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
