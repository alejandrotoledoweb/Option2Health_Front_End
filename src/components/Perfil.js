import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser} from '../redux/actions/userActions';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const Perfil = ({logged_in, user, loading, status, error, updateUser}) => {
  const [show, setShow] = useState(false);

  const initialValues = {
    id: user.id,
    name: user.name,
    genero: user.genero,
    ciudad: user.ciudad,
    email: user.email,
    hijos: user.hijos,
    password: user.password,
    nacimiento: user.nacimiento,
  };

  const updateSchema = Yup.object().shape({
    name: Yup.string(),
    genero: Yup.string(),
    ciudad: Yup.string(),
    email: Yup.string(),
    hijos: Yup.string(),
    password: Yup.string(),
    nacimiento: Yup.date(),
  });

  const submitForm = (values) => {
    const data = {
      id: values.id,
      name: values.name,
      ciudad: values.ciudad,
      email: values.email,
      password: values.password,
      hijos: values.hijos,
      nacimiento: values.nacimiento,
      genero: values.genero,
    };
    console.log(data);
    updateUser(data);
  };

  const message = () =>
    loading === false && status === "updated" && error === "" ? (
      <span className="text-green-600 border rounded border-green-200 mx-2 my-2 px-4 py-4 flex items-center justify-center">Actualizados los datos con éxito</span>
    ) : (
      error === "" ? ("") : (<span className="text-red-600 mx-2 my-2 px-4 py-4 flex items-center justify-center">{error}</span>)
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
            <li className="text-indigo-400 py-2 my-4 mx-4">
              { logged_in ? <Link to="/perfil">Perfil: {user.name.toUpperCase()}</Link> : <Link to="/login" className="nav-link ml-3 text-indigo-500"><i className="fas fa-hand-holding-heart"></i>&nbsp; Encuentra AQUÍ los servicios y productos ideales para tu salud.</Link>}
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
            { logged_in ? <div><Link to="/perfil">Bienvenido : {user.name.toUpperCase()}</Link> <span className="mx-4 xy-4">Logout</span></div>: <Link to="/login">
              ¿Listo para tomar el control de tu salud y de los demás? INGRESA AQUÍ
            </Link>}
          </p>
        </nav> 

        <div className='grid grid-cols-1 md:grid-cols-2 w-full'>


          <div className="my-8 mx-4 bg-white px-4 py-4 border rounded flex flex-col max-w-2xl grid-span-1">
            <h4 className="text-indigo-600 my-4 ">Datos Personales</h4>
            <hr className="text-indigo-300 my-2 py-2"/>
            <p className="flex justify-between my-4 px-2">Nombre: <span>{user.name.toUpperCase()}</span></p>
            <p className="flex justify-between my-4 px-2">Email: <span>{user.email}</span></p>
            <p className="flex justify-between my-4 px-2">Teléfono: <span>{user.telefono}</span></p>
            <p className="flex justify-between my-4 px-2">Fecha de nacimiento: <span>{user.nacimiento}</span></p>
            <p className="flex justify-between my-4 px-2">Género: <span>{user.genero}</span></p>
          </div> 

          <div className='my-8 mx-4 bg-white px-4 py-4 rounded flex flex-col max-w-2xl grid-span-1'> 
            <section className="bg-white rounded mx-1">
              <h3 className="text-lg my-4 px-4 font-bold">Actualización de Datos</h3>
              <Formik
                className=""
                initialValues={initialValues}
                validationSchema={updateSchema}
                onSubmit={(values) => {
                  submitForm(values);
                }}
              >
                {(formik) => {
                  const { errors, touched, isValid, dirty } = formik;
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

                        <div className="form-group">
                          <label htmlFor="ciudad" className="mt-3">
                            Seleccione la ciudad:
                          </label>
                          <Field
                            name="ciudad"
                            as="select"
                            className="px-2 py-2 border rounded bg-gray-200 mx-2 mt-4 mb-4"
                          >
                            <option defaultValue>Seleccione la ciudad</option>
                            <option value="Quito">Quito</option>
                            <option value="Guayaquil">Guayaquil</option>
                            <option value="Cuenca">Cuenca</option>
                            <option value="Santo Domingo">Santo Domingo</option>
                            <option value="Machala">Machala</option>
                            <option value="Durán">Durán</option>
                            <option value="Manta">Manta</option>
                            <option value="Portoviejo">Portoviejo</option>
                            <option value="Loja">Loja</option>
                            <option value="Ambato">Ambato</option>
                            <option value="Esmeraldas">Esmeraldas</option>
                            <option value="Puto">Puto</option>
                            <option value="Tena">Tena</option>
                            <option value="Ibarra">Ibarra</option>
                          </Field>

                          <ErrorMessage
                            name="ciudad"
                            component="span"
                            className="text-red-600"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="genero" className="mt-3">
                            Seleccione el género:
                          </label>
                          <Field
                            name="genero"
                            as="select"
                            className="px-2 py-2 border rounded bg-gray-200 mx-2 mt-4 mb-4"
                          >
                            <option defaultValue>Seleccione el género</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>

                          </Field>

                          <ErrorMessage
                            name="genero"
                            component="span"
                            className="text-red-600"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="hijos" className="mt-3">
                            Tiene hijos?:
                          </label>
                          <Field
                            name="hijos"
                            as="select"
                            className="px-2 py-2 border rounded bg-gray-200 mx-2 mt-4 mb-4"
                          >
                            <option defaultValue>Seleccione la opción</option>
                            <option value="SI">SI</option>
                            <option value="NO">NO</option>

                          </Field>

                          <ErrorMessage
                            name="hijos"
                            component="span"
                            className="text-red-600"
                          />
         ••••••              </div>

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
                            className={`${
                              !(dirty && isValid) ? "disabled:opacity-50 bg-green-100 mx-auto w-2/3" : "bg-green-400"
                            } border rounded  mx-2 my-2 px-2 py-2 items-center text-center`}
                            disabled={!(dirty && isValid)}
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
        </div>
      </section>
    </div>
  )
};

Perfil.defaultProps = {
  logged_in: PropTypes.bool,
  updateUser: PropTypes.func,
};

Perfil.propTypes = {
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
  error: state.user.error
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userDetails) => dispatch(updateUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);