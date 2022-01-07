import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { getUserArticles, updatePublicacion } from '../redux/actions/articleActions';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikControl from './formik/FormikControl';
import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";

const ArticulosMedico = ({logged_in, user, getUserArticles, userArticles, updatePublicacion, medico, empresa}) => {

  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [arid, setArid] = useState(0);
  const [title, setTitle] = useState("");
  const [areas, setAreas] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [information, setInformation] = useState("");
  const [genero, setGenero] = useState("");
  const [edad_inicial, setEdadInicial] = useState(0);
  const [edad_final, setEdadFinal] = useState(0);
  const [sintomas, setSintomas] = useState("");
  const [causas, setCausas] = useState("");
  const [tratamiento, setTratamiento] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [enfermedades_relacionales, setEnfermedades] = useState("");

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);


  useEffect(() => {
    getUserArticles()
    // console.log("userArticles", userArticles)
  }, [getUserArticles])

  const initialValuesPublicacion = {
    title: title,
    areas: areas,
    video: video,
    description: description,
    information: information,
    genero: genero,
    edad_inicial: edad_inicial,
    edad_final: edad_final,
    sintomas: sintomas,
    causas: causas,
    tratamiento: tratamiento,
    diagnostico: diagnostico,
    enfermedades_relacionales: enfermedades_relacionales, 
  };

  const selectArticle = (arId, titlef, areasf, videof, descriptionf, informationf, generof, edad_inicialf, edad_finalf, sintomasf, causasf, tratamientof, diagnosticof, enfermedades_rel) => {
    setArid(arId)
    setTitle(titlef)
    setAreas(areasf)
    setVideo(videof)
    setDescription(descriptionf)
    setInformation(informationf)
    setGenero(generof)
    setEdadInicial(edad_inicialf)
    setEdadFinal(edad_finalf)
    setSintomas(sintomasf)
    setCausas(causasf)
    setTratamiento(tratamientof)
    setDiagnostico(diagnosticof)
    setEnfermedades(enfermedades_rel)
    handleShow()
  }

  
  const publicacionSchema = Yup.object().shape({
    title: Yup.string().required("Campo es necesario"),
    areas: Yup.string().required("Campo es necesario").nullable(),
    video: Yup.string().required("Campo es necesario"),
    description: Yup.string().required("Campo es necesario"),
    information: Yup.string().nullable(),
    genero: Yup.string().required("Campo es necesario").nullable(),
    edad_inicial: Yup.number().required("Campo es necesario").nullable(),
    edad_final: Yup.number().required("Campo es necesario").nullable(),
    sintomas: Yup.string().required("Campo es necesario").nullable(),
    causas: Yup.string().nullable(),
    tratamiento: Yup.string().nullable(),
    diagnostico: Yup.string().nullable(),
    enfermedades_relacionales: Yup.string().nullable()
  });

  const submitForm = (values) => {
    const data = {
      id: arid,
      title: values.title,
      areas: values.areas,
      video: values.video,
      description: values.description,
      information: values.information,
      genero: values.genero,
      edad_inicial: values.edad_inicial,
      edad_final: values.edad_final,
      sintomas: values.sintomas,
      causas: values.causas,
      tratamiento: values.tratamiento,
      diagnostico: values.diagnostico,
      enfermedades_relacionales: values.enfermedades_relacionales
    };
    console.log(data);
    updatePublicacion(data);
    handleClose()
    getUserArticles()
    // arStatus === "created" ? resetForm({initialValues: ""}) : setModalError(true);
  };


  return (
    <div className='flex-inline'>
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


        <div className=" my-2 py-2 bg-white border rounded text-center self-center">

          <p className="text-indigo-600 my-2 text-xl font-bold w-full self-center">Articulos publicados</p>
        </div> 
 

        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 w-full justify-items-center self-items-center'>

        </div>

        <section className="my-2 px-2 flex-wrap items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-6">
          {userArticles ? userArticles.map((ar) => (

            <article key={ar.article.id} className="my-10 relative shadow p-4 mb-5 bg-white rounded mx-auto border w-full">
              <div className="px-2 absolute bg-white -right-5 -top-10 border rounded border-info d-flex flex-column justify-content-center h-auto w-40 ">
                <img src="http://www.option2health.com/assets/img/logo.png" className="border-0 img-thumbnail mx-auto w-10" alt="Responsive logo" />
                <p className="text-center mt-2 mb-2"><a className="text-dark" href="https://option2health.com/index.html">Dr. O2H</a></p>
              </div>
              <h6 className="text-left font-bold mt-3 mr-20">{ar.article.title}</h6>
              {/* <p className="text-left font-semibold mb-2">Síntomas Uterinos</p> */}
              <hr className="text-black"></hr>
              <div className="flex items-center content-center flex-col">
                <p className="my-3 mr-16 pr-2">{ar.article.description}<a href="https://medlineplus.gov/spanish/ency/article/000914.htm" target="_blank" rel="noreferrer" className="text-indigo-400">Ver más...</a></p>
                <div className="aspect-w-16 aspect-h-9 max-w-full w-full">
                  <iframe  src={ar.article.video} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                </div>

              </div>
              <div className="grid justify-items-end object-fit">
                <button className="rounded border border-indigo-400 text-indigo-500 mx-2 my-2 px-4 py-2 hover:text-white hover:bg-indigo-500" onClick={() => selectArticle(
                  ar.article.id,
                  ar.article.title,
                  ar.article.areas,
                  ar.article.video,
                  ar.article.description,
                  ar.article.information,
                  ar.article.genero,
                  ar.article.edad_inicial,
                  ar.article.edad_final,
                  ar.article.sintomas,
                  ar.article.causas,
                  ar.article.tratamiento,
                  ar.article.diagnostico,
                  ar.article.enfermedades_relacionales)}>Editar</button>
              </div>
            </article>
            ))
            : null}
        </section>


        <section className="w-full">
          <Modal show={showForm} animation={true} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Update Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
              <Formik
                className="w-full"
                initialValues={initialValuesPublicacion}
                validationSchema={publicacionSchema}
                onSubmit={(values) => {
                  submitForm(values);
                }}
                >
                {(formik) => {
                  const { errors, touched, isValid, dirty } = formik;
                  return (
                  <div className="">
                      <Form>
                        {/* FORM 1 */}
                        <section className="block mx-4 pt-4 rounded ">
                          <p className="rounded mx-8 my-4 px-4 py-2 text-white bg-indigo-500 w-3/5">1. Primer paso</p>
                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="title" className="mb-1 mt-3 mx-2">
                            Ingresa el título de la publicación:(*)
                            </label>
                            <Field
                              type="string"
                              name="title"
                              id="title"
                              className={`${
                                errors.title && touched.title
                                ? "is-invalid"
                                : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 my-4 py-2 px-2`}
                              placeholder="Problemas de sueño"
                              />

                            <ErrorMessage
                              name="title"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                              />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="areas" className="mb-1 mt-3 mx-2">
                              Áreas directas o indirectas relacionadas con la enfermedad:(*)
                            </label>
                            <Field
                              type="string"
                              name="areas"
                              id="areas"
                              className={`${
                                errors.areas && touched.areas
                                ? "is-invalid"
                                : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 lowercase`}
                                placeholder="Neurología, Dermatología"
                                />

                            <ErrorMessage
                              name="areas"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                              />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="video" className="mb-1 mt-3 mx-2">
                              Enlace de video en Youtube:(*)<br /> 1. Haz click en compartir en la página del video.<br />
                              2. Copia el link que te proporciona Youtube.<br />
                              3. Pegalo aquí.<br />
                              4. Debe verse algo así. Ej.: "https://youtu.be/XNpBVXJry8I"<br />
                              5. Ingresa la palabra "embed" antes del código. Ej.: "/embed/XNpBVXJry8I"<br />
                              6. Listo, Gracias!
                            </label>
                            <Field
                              type="string"
                              name="video"
                              id="video"
                              className={`${
                                errors.video && touched.video
                                ? "is-invalid"
                                : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 lowercase`}
                              placeholder="https://youtu.be/embed/XNpBVXJry8I"
                              />

                            <ErrorMessage
                              name="video"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                              />
                          </div>

                          <div className='form-control '>
                                <FormikControl control='textarea' label='Texto a presentar en la publicación:' name='description' id='description' className='bg-gray-200'/>
                                <ErrorMessage
                                  name="description"
                                  component="span"
                                  className="text-red-600 mt-2 mb-4 flex justify-center"
                                />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="information" className="mb-1 mt-3 mx-2">
                              Enlace para más información sobre la publicación:(*)
                            </label>
                            <Field
                              type="string"
                              name="information"
                              id="information"
                              className={`${
                                errors.information && touched.information
                                ? "is-invalid"
                                : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 lowercase`}
                              placeholder="informacion"
                              />

                            <ErrorMessage
                              name="information"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                              />
                          </div>
                          <p className="rounded mx-8 my-4 px-4 py-2 text-white bg-indigo-500 w-3/5">2. Segundo paso</p>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="genero" className="mb-1 mt-3 mx-2">
                            Esta enfermedad afecta a que género:(*)
                            </label>
                            <Field
                              type="string"
                              name="genero"
                              id="genero"
                              className={`${
                                errors.genero && touched.genero
                                ? "is-invalid"
                                : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 my-4 py-2 px-2`}
                              placeholder="hombres, mujeres, ambos generos"
                              />

                            <ErrorMessage
                              name="genero"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                              />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="edad_inicial" className="mb-1 mt-3 mx-2">
                              Edad inicial que inicia la enfermedad:(*)
                            </label>
                            <Field
                              type="number"
                              name="edad_inicial"
                              id="edad_inicial"
                              className={`${
                                errors.edad_inicial && touched.edad_inicial
                                ? "is-invalid"
                                : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 lowercase`}
                                placeholder="17"
                                />

                            <ErrorMessage
                              name="edad_inicial"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                              />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="edad_final" className="mb-1 mt-3 mx-2">
                              Edad final que se estima la enfermedad:(*)
                            </label>
                            <Field
                              type="number"
                              name="edad_final"
                              id="edad_final"
                              className={`${
                                errors.edad_final && touched.edad_final
                                ? "is-invalid"
                                : "is-valid"
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 lowercase`}
                              placeholder="85"
                              />

                            <ErrorMessage
                              name="edad_final"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                              />
                          </div>

                          <div className=' '>
                                <FormikControl control='textarea' label='Síntomas que se presentan:(*)' name='sintomas' id='sintomas' className='bg-gray-200'/>
                                <ErrorMessage
                                  name="sintomas"
                                  component="span"
                                  className="text-red-600 mt-2 mb-4 flex justify-center"
                                />
                          </div>

                          <div className=''>
                                <p className="rounded mx-8 my-4 px-4 py-2 text-white bg-indigo-500 w-3/5">3. Tercer paso</p>
                                <FormikControl control='textarea' label='Causas de la enfermedad:' name='causas' id='causas' className='bg-gray-200'/>
                                <ErrorMessage
                                  name="causas"
                                  component="span"
                                  className="text-red-600 mt-2 mb-4 flex justify-center"
                                />
                          </div>

                          <div className=' '>
                                <FormikControl control='textarea' label='Tratamiento:' name='tratamiento' id='tratamiento' className='bg-gray-200'/>
                                <ErrorMessage
                                  name="tratamiento"
                                  component="span"
                                  className="text-red-600 mt-2 mb-4 flex justify-center"
                                />
                          </div>

                          <div className=''>
                                <FormikControl control='textarea' label='Diagnóstico de la enfermedad:' name='diagnostico' id='diagnostico' className='bg-gray-200'/>
                                <ErrorMessage
                                  name="diagnostico"
                                  component="span"
                                  className="text-red-600 mt-2 mb-4 flex justify-center"
                                />
                          </div>

                          <div className=''>
                                <FormikControl control='textarea' label='Enfermedades relacionadas:' name='enfermedades_relacionales' id='enfermedades_relacionales' className='bg-gray-200'/>
                                <ErrorMessage
                                  name="enfermedades_relacionales"
                                  component="span"
                                  className="text-red-600 mt-2 mb-4 flex justify-center"
                                />
                          </div>

                          <div className='grid justify-items-end'>

                            <button type="submit"
                            className={`${
                              !(dirty && isValid) ? "disabled:opacity-50" : "text-white bg-green-400 hover:text-white hover:bg-indigo-300"
                            } border rounded border-indigo-600 text-indigo-700 w-2/5 py-2 mx-4 mt-4 hover:text-white hover:bg-indigo-300`}
                            disabled={!(dirty && isValid)}>
                              Guardar y Actualizar
                            </button>

                          </div>
                        </section>

                      </Form>
                      <div className='grid justify-items-end mx-4 py-1'>
                        <button onClick={handleClose} className="border rounded border-indigo-600 text-indigo-700 w-2/5 py-2 mx-4  my-4 hover:text-black hover:bg-gray-300">
                          Cancelar
                        </button>

                      </div>
                    <div/>
                  </div>
                );
              }}
            
              </Formik>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
      
        </section>

      </section>

    </div>
  )
};

ArticulosMedico.defaultProps = {
  logged_in: PropTypes.bool,
  updatePublicacion: PropTypes.func,
  getUserArticles: PropTypes.func,
};

ArticulosMedico.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  userArticles: PropTypes.arrayOf(Object).isRequired,
  updatePublicacion: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  logged_in: state.user.logged_in,
  user: state.user.user,
  userArticles: state.article.userArticles,
  medico: state.user.medico,
  empresa: state.user.empresa,
});

const mapDispatchToProps = (dispatch) => ({
  getUserArticles: () => dispatch(getUserArticles()),
  updatePublicacion: (publicacionData) => dispatch(updatePublicacion(publicacionData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticulosMedico);