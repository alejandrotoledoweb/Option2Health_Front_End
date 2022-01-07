import React, { useEffect } from 'react';
// import {LoginForm } from './loginForm';
import { loginAction, registerRequest } from '../redux/actions/userActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({
  loginAction,
  loading,
  error,
  logged_in,
  status,
  registerRequest,
}) => {
  let history = useNavigate();

  useEffect(() => {
    console.log(error, loading, logged_in);
    if (logged_in) {
      history('/');
    }
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Correo es obligatorio'),
    password: Yup.string().required('Contraseña es obligarotia'),
  });

  const submitForm = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    loginAction(data);
  };

  const message = () =>
    error === '' && loading === false && status === 'logged in' ? (
      <span className="border-green-500 text-green-600 flex justify-center items-center self-center my-4 mx-4 rounded border">
        Iniciado sesión con éxito.
      </span>
    ) : error ? (
      <span className="border-red-600 text-red-600 text-center flex justify-center items-center self-center mx4 my-4 rounded border">
        {error}
      </span>
    ) : (
      ''
    );

  const registerUser = () => {
    console.log('clicked');
    registerRequest();
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
      <section className="mr-2 hidden lg:flex flex-col -translate-x-full transform absolute lg:relative lg:-translate-x-0 duration-200">
        <button className="border rounded border-indigo-700 bg-indigo-300 lg:w-60 lg:h-48 text-white">
          <i className="fas fa-file-medical text-7xl my-4 pr-2"></i>
          PREVENCIÓN
        </button>
        <button className="border rounded border-indigo-700 bg-indigo-300 lg:w-60 lg:h-48 text-white">
          <i className="fas fa-user-md text-7xl my-4 pr-2"></i>
          DIAGNÓSTICO
        </button>
        <button className="border rounded border-indigo-700 bg-indigo-300 lg:w-60 lg:h-48 text-white">
          <i className="fas fa-file-prescription text-7xl my-4 pr-2"></i>
          MÉDICOS
        </button>
        <button className="border rounded border-indigo-700 bg-indigo-300 lg:w-60 lg:h-48 text-white">
          <i className="fab fa-whatsapp text-7xl my-4 pr-2"></i>
          CONTÁCTANOS
        </button>
      </section>

      <img
        className="w-full md:max-w-lg"
        src="http://www.option2health.com/assets/img/WEB_2021-02.png"
        alt="info for page"
      />

      <div className="mx-2 flex flex-col border border-gray-500 bg-white lg:max-w-md lg:max-h-lg rounded my-4">
        {/* <LoginForm /> */}
        <section>
          <p className="border rounded border-indigo-300 mt-4 mx-4 text-center flex items-center justify-center">
            <Link to="/" className="font-bold text-indigo-600 w-full my-2">
              <i className="fas fa-home"></i> Regresa al Inicio
            </Link>
          </p>
          <p className="mx-4">{loading ? '' : message()}</p>
          <h3 className="text-lg my-4 px-4 font-bold">Inicio de sesión</h3>
          <Formik
            className=""
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values, { resetForm }) => {
              submitForm(values);
              resetForm({ initialValues: '' });
            }}
          >
            {(formik) => {
              const { errors, touched, isValid, dirty } = formik;
              return (
                <div className="mx-4">
                  <Form>
                    <div className="form-group flex flex-col justify-center">
                      <label htmlFor="email" className="mb-3">
                        Ingresa tu correo electrónico
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className={`${
                          errors.email && touched.email
                            ? 'is-invalid'
                            : 'is-valid'
                        } form-control border rounded bg-gray-200 mx-2 mt-4 mb-2 py-2 px-1`}
                        placeholder="alex@email.com"
                      />

                      <ErrorMessage
                        name="email"
                        component="span"
                        className="text-red-600 text-center mt-1 mb-4"
                      />
                    </div>

                    <div className="form-group flex flex-col justify-center">
                      <label htmlFor="password" className="mt-4 mb-4">
                        Ingresa tu contraseña:
                      </label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        className={`${
                          errors.password && touched.password
                            ? 'is-invalid'
                            : 'is-valid'
                        } form-control border rounded bg-gray-200 mx-2 mt-4 mb-2 py-2 px-1`}
                      />

                      <ErrorMessage
                        name="password"
                        component="span"
                        className="text-red-600 text-center mt-2 mb-4"
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
                        Iniciar Sesión
                      </button>

                      <div className="my-2">
                        <p className="inline-block">
                          No tiene cuenta?{' '}
                          <button>
                            <Link
                              onClick={() => registerUser()}
                              to="/register"
                              className="font-bold text-indigo-600 mx-2"
                            >
                              Crear Cuenta
                            </Link>
                          </button>
                        </p>
                      </div>

                      <div className="flex flex-col my-4 mx-4">
                        <hr />
                        <p className="inline-block my-2 text-center">
                          DESEAS SER UNO DE NUESTROS MÉDICOS?{' '}
                        </p>
                        <button className="border rounded bg-blue-300 py-2 my-2 w-2/3 self-center">
                          <Link
                            onClick={() => registerUser()}
                            to="/registerMed"
                            className="font-bold text-white"
                          >
                            Registro Médicos
                          </Link>
                        </button>
                      </div>

                      <div className="flex flex-col my-4 mx-4 ">
                        <hr />
                        <p className="inline-block my-2 text-center">
                          DESEAS OFRECER ALGÚN PRODUCTO O SERVICIO?
                        </p>
                        <button className="border rounded bg-blue-300 py-2 my-2 w-2/3 self-center">
                          <Link
                            onClick={() => registerUser()}
                            to="/registerProdServ"
                            className="font-bold text-white"
                          >
                            Registro Prov / Serv
                          </Link>
                        </button>
                      </div>
                    </div>
                  </Form>
                  <div className="mt-3" />
                </div>
              );
            }}
          </Formik>
        </section>
      </div>
    </div>
  );
};

Login.defaultProps = {
  loginAction: PropTypes.func,
  LoginTest: PropTypes.func,
  logged_in: PropTypes.bool,
  registerRequest: PropTypes.func,
};

Login.propTypes = {
  loginAction: PropTypes.func,
  LoginTest: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  logged_in: PropTypes.bool.isRequired,
  registerRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  error: state.user.error,
  logged_in: state.user.logged_in,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (loginDetails) => dispatch(loginAction(loginDetails)),
  registerRequest: () => dispatch(registerRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
