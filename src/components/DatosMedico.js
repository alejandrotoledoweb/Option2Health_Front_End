import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser} from '../redux/actions/userActions';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from './formik/FormikControl';

const DatosMedico = ({logged_in, user, loading, status, error, updateUser, medico, empresa}) => {
  const [show, setShow] = useState(false);

  const initialValues = {
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    nacimiento: user.nacimiento,

  };

  const initialValuesForm2 = {
    id: user.id,
    licencia_medica: user.licencia_medica,
    titulo_profesional: user.titulo_profesional,
    certificaciones: user.certificaciones,
    experiencia: user.experiencia,
    dir_consultorio: user.dir_consultorio,
    facebook: user.facebook,
    twitter: user.twitter,
    instagram: user.instagram,
    linkedin : user.linkedin
  }
  
  
  const updateSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string(),
    password: Yup.string(),
    nacimiento: Yup.date(),
  });
  
  const updateForm2Schema = Yup.object().shape({
    licencia_medica: Yup.string().nullable(),
    titulo_profesional: Yup.string().nullable(),
    certificaciones: Yup.string().nullable(),
    experiencia: Yup.string().nullable(),
    dir_consultorio: Yup.string().nullable(),
    facebook: Yup.string().nullable(),
    twitter: Yup.string().nullable(),
    instagram: Yup.string().nullable(),
    linkedin : Yup.string().nullable()

  })
  const submitForm = (values) => {
    const data = {
      id: values.id,
      name: values.name,
      email: values.email,
      password: values.password,
      ciudad: values.ciudad,
      nacimiento: values.nacimiento,
      genero: values.genero,
    };
    updateUser(data);
  };

  const submitForm2 = (values) => {
    const data = {
      id: values.id,
      licencia_medica: values.licencia_medica,
      titulo_profesional: values.titulo_profesional,
      certificaciones: values.certificaciones,
      experiencia: values.experiencia,
      dir_consultorio: values.dir_consultorio,
      facebook: values.facebook,
      twitter: values.twitter,
      instagram: values.instagram,
      linkedin : values.linkedin
    };
    updateUser(data);
  };

  const message = () =>
    loading === false && status === "updated" && error === "" ? (
      <span className="text-green-600 border rounded border-green-200 mx-2 my-2 px-4 py-4 flex items-center justify-center">Actualizados los datos con éxito</span>
    ) : (
      error === "" ? ("") : (<span className="text-red-600 rounded mx-2 my-2 px-4 py-4 flex items-center justify-center">{error}</span>)
    );


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

        <div className="bg-white grid grid-cols-1 gap-2 justify-items-center self-items-center rounded my-2 w-1/3">
          
          <Link to="/perfilmedico" className="grid-span-1 justify-self-stretch rounded border mx-4 my-4 px-2 py-2 text-indigo-400 border-indigo-400 hover:text-white hover:bg-indigo-300"><button><p>Regresar</p></button></Link>
        </div>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3 w-full justify-items-center self-items-center'>

          <aside className='grid-span-1 justify-self-stretch'>

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


            <div className=' my-4 py-2 bg-white rounded flex flex-col max-w-2xl w-full'> 
              <section className="bg-white rounded mx-1">
                <h3 className="text-lg my-4 px-4 font-bold">Actualización de Datos del Médico</h3>
                <Formik
                  className=""
                  initialValues={initialValues}
                  validationSchema={updateSchema}
                  onSubmit={(values) => {
                    submitForm(values);
                  }}
                >
                  {(formik) => {
                    const { errors, touched} = formik;
                    return (
                      <div className="mx-4">
                        <Form>
                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="name" className="my-2">
                            Nombres y apellidos
                            </label>
                            <Field
                              type="string"
                              name="name"
                              id="name"
                              className={`${
                                errors.name && touched.name
                                  ? "is-invalid"
                                  : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-2 mb-6 py-2 px-2 capitalize`}
                              placeholder="Alex Paredes"
                            />

                            <ErrorMessage
                              name="name"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="email" className="mb-2">
                            Correo electrónico
                            </label>
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              className={`${
                                errors.email && touched.email
                                  ? "is-invalid"
                                  : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-2 mb-4 py-2 px-2 lowercase`}
                            />

                            <ErrorMessage
                              name="email"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="nacimiento" className="mt-4 mb-4">
                              Fecha de nacimiento:
                            </label>
                            <Field
                              type="date"
                              name="nacimiento"
                              id="nacimiento"
                              className={`${
                                errors.nacimiento && touched.nacimiento
                                  ? "is-invalid"
                                  : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2`}
                            />

                            <ErrorMessage
                              name="nacimiento"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="password" className="mt-4 mb-4">
                              Actualiza la contraseña:
                            </label>
                            <Field
                              type="password"
                              name="password"
                              id="password"
                              className={`${
                                errors.password && touched.password
                                  ? "is-invalid"
                                  : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2`}
                            />

                            <ErrorMessage
                              name="password"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className="flex justify-end">
                            <button
                              type="submit"
                              className="bg-green-400 border rounded  mx-2 my-2 px-2 py-2 items-center text-center w-1/3"
                            >
                              Actualizar
                            </button>
                          </div>
                        </Form>
                        <div  />
                        <p className="">{loading ? "" : message() }</p>
                      </div>
                    );
                  }}
                
                </Formik>
              </section>
            </div>
          </aside>

          <section className='md:col-span-2 mx-1 my-4 py-2 bg-white rounded flex flex-col w-full justify-self-stretch'>
            <h2 className='text-lg mx-4 font-bold'>Acerca de mi</h2>
              <section className="bg-white rounded mx-1">
                <Formik
                  className=""
                  initialValues={initialValuesForm2}
                  validationSchema={updateForm2Schema}
                  onSubmit={(values) => {
                    submitForm2(values);
                  }}
                >
                  {(formik) => {
                    const { errors, touched} = formik;
                    return (
                      <div className="mx-4">
                        <Form>
                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="licencia_medica" className="my-2">
                            Número de Licencia Médica
                            </label>
                            <Field
                              type="integer"
                              name="licencia_medica"
                              id="licencia_medica"
                              className={`${
                                errors.licencia_medica && touched.licencia_medica
                                  ? "is-invalid"
                                  : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-2 mb-6 py-2 px-2 capitalize`}
                            />

                            <ErrorMessage
                              name="licencia_medica"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="titulo_profesional" className="mb-2">
                            Título Profesional
                            </label>
                            <Field
                              type="string"
                              name="titulo_profesional"
                              id="titulo_profesional"
                              className={`${
                                errors.titulo_profesional && touched.titulo_profesional
                                  ? "is-invalid"
                                  : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-2 mb-4 py-2 px-2 lowercase`}
                            />

                            <ErrorMessage
                              name="titulo_profesional"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className='form-control '>
                            <FormikControl control='textarea' label='Ingrese estudios, cursos o certificaciones(se mostrará en la ficha personal)' name='certificaciones' id='certificaciones' className='bg-gray-200'/>
                          </div>

                          <div className='form-control '>
                            <FormikControl control='textarea' label='Ingrese experiencia profesional en el área(se mostrará en la ficha personal)' name='experiencia' id='experiencia' className='bg-gray-200'/>
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="dir_consultorio" className="mt-4 mb-4">
                              Dirección del consultorio
                            </label>
                            <Field
                              type="string"
                              name="dir_consultorio"
                              id="dir_consultorio"
                              className={`${
                                errors.dir_consultorio && touched.dir_consultorio
                                  ? "is-invalid"
                                  : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2`}
                            />

                            <ErrorMessage
                              name="dir_consultorio"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="facebook" className="mt-4 mb-4">
                              Enlace a cuenta de Facebook:
                            </label>
                            <Field
                              type="string"
                              name="facebook"
                              id="facebook"
                              className={`${
                                errors.facebook && touched.facebook
                                  ? "is-invalid"
                                  : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2`}
                            />

                            <ErrorMessage
                              name="facebook"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="twitter" className="mt-4 mb-4">
                              Enlace a cuenta de Twitter:
                            </label>
                            <Field
                              type="string"
                              name="twitter"
                              id="twitter"
                              className={`${
                                errors.twitter && touched.twitter
                                  ? "is-invalid"
                                  : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2`}
                            />

                            <ErrorMessage
                              name="twitter"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="instagram" className="mt-4 mb-4">
                              Enlace a cuenta de Instagram:
                            </label>
                            <Field
                              type="string"
                              name="instagram"
                              id="instagram"
                              className={`${
                                errors.instagram && touched.instagram
                                  ? "is-invalid"
                                  : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2`}
                            />

                            <ErrorMessage
                              name="instagram"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="linkedin" className="mt-4 mb-4">
                              Enlace a cuenta de Linkedin:
                            </label>
                            <Field
                              type="string"
                              name="linkedin"
                              id="linkedin"
                              className={`${
                                errors.linkedin && touched.linkedin
                                  ? "is-invalid"
                                  : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2`}
                            />

                            <ErrorMessage
                              name="linkedin"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className="flex justify-end">
                            <button
                              type="submit"
                              className="bg-green-400 border rounded  mx-2 my-2 px-2 py-2 items-center text-center w-1/5"
                            >
                              Actualizar
                            </button>
                          </div>
                        </Form>
                        <div  />
                        <p className="">{loading ? "" : message() }</p>
                      </div>
                    );
                  }}
                
                </Formik>
              </section>
          </section>

        </div>
      </section>
    </div>
  )
};

DatosMedico.defaultProps = {
  logged_in: PropTypes.bool,
  updateUser: PropTypes.func,
};

DatosMedico.propTypes = {
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
  medico: state.user.medico,
  empresa: state.user.empresa,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userDetails) => dispatch(updateUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatosMedico);