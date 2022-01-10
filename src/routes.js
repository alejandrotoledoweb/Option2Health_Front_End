import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import Register from './components/register';
import Perfil from './components/Perfil';
import Coinsults from './components/Coinsults';
import Guardados from './components/Guardados';
import RegisterMedico from './components/registerMedico';
import RegisterProdServ from './components/registerProdServ';
import DatosMedico from './components/DatosMedico';
import PerfilMedico from './components/PerfilMedico';
import Publicacion from './components/Publicacion';
import ArticulosMedico from './components/ArticulosMedico';
import Ayudar from './components/ayudar';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { searchArticles } from './redux/actions/articleActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUserAction } from './redux/actions/userActions';
import '@themesberg/flowbite';

const RoutesFunction = ({
  logged_in,
  medico,
  user,
  empresa,
  logoutUserAction,
  searchArticles,
}) => {
  const [show, setShow] = useState(false);

  const initialValues = {
    title: '',
  };

  const searchSchema = Yup.object().shape({
    title: Yup.string(),
  });

  const submitForm = (values) => {
    const data = {
      title: values.title,
    };
    console.log(data.title);
    searchArticles(data.title);
  };

  const logout = (userId) => {
    logoutUserAction(userId);
  };

  return (
    <BrowserRouter>
      <div className="flex-inline ">
        <div
          className={
            show
              ? 'z-10 fixed inline-block bg-white w-64 h-screen inset-0 transform duration-200 translate-x-0 lg:-translate-x-0'
              : 'fixed lg:inline-block hidden bg-white w-64 h-screen inset-0 transform duration-200 -translate-x-full lg:-translate-x-0'
          }
        >
          {/*  SideNavBar  */}
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
                    onClick={() => setShow(!show)}
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
                    Encuentra AQUÍ los servicios y productos ideales para tu
                    salud.
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
        </div>
        <div className="lg:w-64 hidden lg:inline-block" />

        <div className="inline-block absolute mx-6 justify-center">
          {/* TopBar  */}

          <nav className="border rounded border-gray-200 bg-white flex flex-wrap items-center justify-start lg:justify-around mx-2 py-4">
            <button
              onClick={() => setShow(!show)}
              className="lg:hidden rounded px-2 py-2 focus:bg-indigo-600 focus:outline-none hover:bg-indigo-600 hover:text-white mx-4 my-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 rounded"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={searchSchema}
                onSubmit={(values, { resetForm }) => {
                  submitForm(values);
                  resetForm({ initialValues: '' });
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
                                ? 'is-invalid'
                                : 'is-valid'
                            } form-control border rounded bg-gray-200 mx-2 my-2 py-2 px-1`}
                          />

                          <ErrorMessage
                            name="title"
                            component="span"
                            className="text-red-600 text-center my-4"
                          />
                        </div>

                        <div className="flex items-center flex-col">
                          <button
                            type="submit"
                            className={`${
                              !(dirty && isValid)
                                ? 'disabled:opacity-50'
                                : 'bg-green-400'
                            } border rounded  mx-2 my-2 px-2 py-2 inline-block`}
                            disabled={!(dirty && isValid)}
                          >
                            Buscar
                          </button>
                        </div>
                      </Form>
                      {/* <div className="my-2" /> */}
                      {/* <p>{loading ? "" : message()}</p> */}
                    </div>
                  );
                }}
              </Formik>
            </div>

            <p className="text-indigo-500 py-2 mx-6 ">
              {logged_in && medico ? (
                <div>
                  <Link to="/perfilmedico">
                    Bienvenido Doctor/a : {user.name}
                  </Link>{' '}
                  <button
                    onClick={() => logout(user.id)}
                    className="ml-6 my-4 font-bold text-red-400"
                  >
                    Logout
                  </button>
                </div>
              ) : logged_in && empresa ? (
                <div>
                  <Link to="/perfilempresa">
                    Bienvenido Empresa : {user.name}
                  </Link>{' '}
                  <button
                    onClick={() => logout(user.id)}
                    className="ml-6 my-4 font-bold text-red-400"
                  >
                    Logout
                  </button>
                </div>
              ) : logged_in ? (
                <div>
                  <Link to="/perfil">Bienvenido Usuario: {user.name}</Link>{' '}
                  <button
                    onClick={() => logout(user.id)}
                    className="ml-6 my-4 font-bold text-red-400"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login" className="mx-4 my-4 font-bold">
                  ¿Listo para tomar el control de tu salud y de los demás?
                  INGRESA AQUÍ
                </Link>
              )}
            </p>
          </nav>

          <main className="container">
            <Routes>
              <Route exact path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/coinsults" element={<Coinsults />} />
              <Route path="/guardados" element={<Guardados />} />
              <Route path="/registerMed" element={<RegisterMedico />} />
              <Route path="/registerProdServ" element={<RegisterProdServ />} />
              <Route path="/datosmedico" element={<DatosMedico />} />
              <Route path="/perfilmedico" element={<PerfilMedico />} />
              <Route path="/nuevapublicacion" element={<Publicacion />} />
              <Route path="/articulosmedico" element={<ArticulosMedico />} />
              <Route path="/ayudar" element={<Ayudar />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

RoutesFunction.defaultProps = {
  logged_in: PropTypes.bool,
  searchArticles: PropTypes.func,
  logoutUserAction: PropTypes.func,
};

RoutesFunction.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
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
  logoutUserAction: (userId) => dispatch(logoutUserAction(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoutesFunction);
