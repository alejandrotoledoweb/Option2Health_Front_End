import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  getUserStudyCases,
  createStudyCase,
} from '../redux/actions/studyCasesActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormikControl from './formik/FormikControl';
import Modal from 'react-bootstrap/Modal';
// import Button from "react-bootstrap/Button";

const Ayudar = ({
  logged_in,
  user,
  getUserStudyCases,
  allStudyCases,
  updateStudyCase,
  createStudyCase,
  medico,
  empresa,
}) => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  // const [scid, setScid] = useState(0);
  // const [nombre, setNombre] = useState("");
  // const [video, setVideo] = useState("");
  // const [desripcion, setDescripcion] = useState("");
  // const [examenes, setExamenes] = useState("");
  // const [genero, setGenero] = useState("");
  // const [edad_inicial, setEdadInicial] = useState(0);
  // const [edad_final, setEdadFinal] = useState(0);
  // const [sintomas, setSintomas] = useState("");
  // const [causas, setCausas] = useState("");
  // const [tratamiento, setTratamiento] = useState("");
  // const [medicos, setMedicos] = useState("");

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  useEffect(() => {
    getUserStudyCases();
  }, [getUserStudyCases]);

  const initialValuesCasodeEstudio = {
    nombre: '',
    video: '',
    descripcion: '',
    examenes: '',
    genero: '',
    edad_incial: '',
    edad_final: '',
    sintomas: '',
    causas: '',
    tratamiento: '',
    medicos: '',
  };

  // var thisMonth = new Date().getMonth()+1;

  // const selectArticle = (scId, nombref, videof, descripcionf, examenesef, generof, edad_inicialf, edad_finalf, sintomasf, causasf, tratamientof, medicosf) => {
  //   setScid(scId)
  //   setNombre(nombref)
  //   setVideo(videof);
  //   setDescripcion(descripcionf)
  //   setExamenes(examenesef)
  //   setGenero(generof)
  //   setEdadInicial(edad_inicialf)
  //   setEdadFinal(edad_finalf)
  //   setSintomas(sintomasf)
  //   setCausas(causasf)
  //   setTratamiento(tratamientof)
  //   setMedicos(medicosf)

  //   handleShow()
  // }

  const study_case_Schema = Yup.object().shape({
    nombre: Yup.string().required('Campo es necesario'),
    video: Yup.string().required('Campo es necesario'),
    descripcion: Yup.string().required('Campo es necesario'),
    examenes: Yup.string().required('Campo es necesario'),
    genero: Yup.string().required('Campo es necesario'),
    edad_inicial: Yup.number().required('Campo es necesario'),
    edad_final: Yup.number().required('Campo es necesario'),
    sintomas: Yup.string().required('Campo es necesario'),
    causas: Yup.string().required('Campo es necesario'),
    tratamiento: Yup.string().required('Campo es necesario'),
    medicos: Yup.string().required('Campo es necesario'),
  });

  const submitForm = (values) => {
    const data = {
      user_id: user.id,
      nombre: values.nombre,
      video: values.video,
      descripcion: values.descripcion,
      examenes: values.examenes,
      genero: values.genero,
      edad_inicial: values.edad_inicial,
      edad_final: values.edad_final,
      sintomas: values.sintomas,
      causas: values.causas,
      tratamiento: values.tratamiento,
      medicos: values.medicos,
    };
    console.log(data);
    createStudyCase(data);
    handleClose();
  };

  return (
    <div className="flex-inline">
      <div
        className={
          show
            ? 'z-10 fixed inline-block bg-white w-64 h-screen inset-0 transform duration-200 translate-x-0 lg:-translate-x-0'
            : 'fixed lg:inline-block hidden bg-white w-64 h-screen inset-0 transform duration-200 -translate-x-full lg:-translate-x-0'
        }
      >
        {/* <SideNavBar /> */}
        <nav className="h-full">
          <ul className="">
            <li className="flex flex-col">
              <div className="flex m-4 items-center justify-around">
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
          </ul>
        </nav>
      </div>
      <div className="lg:w-64 hidden lg:inline-block" />

      <section className="inline-block absolute mx-6 justify-center">
        <nav className="border rounded border-gray-200 bg-white flex flex-wrap items-center justify-start lg:justify-around ">
          <button
            onClick={() => setShow(!show)}
            className="lg:hidden rounded px-2 py-2 focus:bg-indigo-600 focus:outline-none hover:bg-indigo-600 hover:text-white mx-2"
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

          <div></div>

          <p className="text-indigo-400 py-2 mx-2">
            {logged_in ? (
              <div>
                <Link to="/perfil">Bienvenido : {user.name}</Link>{' '}
                <span className="mx-4 xy-4">Logout</span>
              </div>
            ) : (
              <Link to="/login">
                ¿Listo para tomar el control de tu salud y de los demás? INGRESA
                AQUÍ
              </Link>
            )}
          </p>
        </nav>

        <div className="grid gridcols-1 lg:grid-cols-2 gap-4 my-2 py-2 bg-white rounded text-center self-center">
          <div className="border rounded my-2 py-4">
            <p className="text-indigo-600 my-2 text-xl font-bold w-full self-center">
              Ayudanos a Ayudar
            </p>
            <p className="text-black my-2 text-md w-full self-center py-2 px-2">
              Hay millones de personas con enfermedades sin diagnósitco. Se
              parte de nuestra red de crowdsourcing conformada por especialistas
              médicos de todo el mundo, y ayudanos a analizar exámenes, sugerir
              diagnósticos y recomendar tratamiento de difícil resolución.
            </p>
            <button onClick={() => handleShow()}>
              <p className="text-indigo-600 my-2 text-md font-bold w-full self-center">
                Para compartir un CASO y que otro médicos te ayuden has CLICK
                AQUÍ
              </p>
            </button>
          </div>
          <div className="border rounded my-2 py-4">
            <p className="text-indigo-600 my-2 text-xl font-bold w-full self-center">
              Número de casos de estudio
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 w-full justify-items-center my-2 py-4 rounded border bg-indigo-300">
          <h2 className="text-black font-bold text-lg">Casos de estudio</h2>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 w-full justify-items-center self-items-center"></div>

        <section className="my-2 px-2 flex-wrap items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-6">
          {allStudyCases
            ? allStudyCases.map((sc) => (
                <article
                  key={sc?.study_case?.id}
                  className="my-10 relative shadow p-4 mb-5 bg-white rounded mx-auto border w-full"
                >
                  <div className="px-2 absolute bg-white -right-5 -top-10 border rounded border-info d-flex flex-column justify-content-center h-auto w-40 ">
                    <img
                      src="http://www.option2health.com/assets/img/logo.png"
                      className="border-0 img-thumbnail mx-auto w-10"
                      alt="Responsive logo"
                    />
                    <p className="text-center mt-2 mb-2">
                      <a
                        className="text-dark"
                        href="https://option2health.com/index.html"
                      >
                        Dr. O2H
                      </a>
                    </p>
                  </div>
                  <h6 className="text-left font-bold mt-3 mr-20">
                    {sc?.study_case?.nombre}
                  </h6>
                  {/* <p className="text-left font-semibold mb-2">Síntomas Uterinos</p> */}
                  <hr className="text-black"></hr>
                  <div className="flex items-center content-center flex-col">
                    <p className="my-3 mr-16 pr-2">
                      {sc?.study_case?.descripcion}
                      <a
                        href="https://medlineplus.gov/spanish/ency/article/000914.htm"
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-400"
                      >
                        Ver más...
                      </a>
                    </p>
                    <div className="aspect-w-16 aspect-h-9 max-w-full w-full">
                      <iframe
                        src={sc?.study_case?.video}
                        title="YouTube video player"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div>
                      <p className="my-2 font-bold text-center text-lg">
                        Comentarios recientes:
                      </p>
                      {sc?.comments?.map((com) => (
                        <div className="flex flex-col my-2">
                          <p>{com.user}:</p>
                          <p className="ml-2 my-2">{com.texto}</p>
                          <hr />
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))
            : null}
        </section>

        <section className="">
          <Modal
            show={showForm}
            animation={true}
            onHide={handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header>
              <Modal.Title id="example-modal-sizes-title-lg">
                Formulario para crear un Caso de Estudio
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Formik
                className=""
                initialValues={initialValuesCasodeEstudio}
                validationSchema={study_case_Schema}
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
                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="nombre" className="mb-1 mt-3 mx-2">
                              Ingresa el título o nombre de la publicación:(*)
                            </label>
                            <Field
                              type="string"
                              name="nombre"
                              id="nombre"
                              className={`${
                                errors.nombre && touched.nombre
                                  ? 'is-invalid'
                                  : 'is-valid'
                              } form-control border rounded bg-gray-200 mx-2 my-4 py-2 px-2`}
                              placeholder="Problemas de sueño"
                            />

                            <ErrorMessage
                              name="nombre"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className="form-group flex flex-col justify-center">
                            <label htmlFor="video" className="mb-1 mt-3 mx-2">
                              Enlace de video en Youtube:(*)
                              <br /> 1. Haz click en compartir en la página del
                              video.
                              <br />
                              2. Copia el link que te proporciona Youtube.
                              <br />
                              3. Pegalo aquí.
                              <br />
                              4. Debe verse algo así. Ej.:
                              "https://youtu.be/XNpBVXJry8I"
                              <br />
                              5. Ingresa la palabra "embed" antes del código.
                              Ej.: "/embed/XNpBVXJry8I"
                              <br />
                              6. Listo, Gracias!
                            </label>
                            <Field
                              type="string"
                              name="video"
                              id="video"
                              className={`${
                                errors.video && touched.video
                                  ? 'is-invalid'
                                  : 'is-valid'
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 lowercase`}
                              placeholder="https://youtu.be/embed/XNpBVXJry8I"
                            />

                            <ErrorMessage
                              name="video"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className=" ">
                            <FormikControl
                              control="textarea"
                              label="Texto de descripción del caso de estudio(*)"
                              name="descripcion"
                              id="descripcion"
                              className="bg-gray-200"
                            />
                            <ErrorMessage
                              name="descripcion"
                              component="span"
                              className="text-red-600 mt-2 mb-4 flex justify-center"
                            />
                          </div>

                          <div className=" ">
                            <FormikControl
                              control="textarea"
                              label="Exámenes realizados(*)"
                              name="examenes"
                              id="examenes"
                              className="bg-gray-200"
                            />
                            <ErrorMessage
                              name="examenes"
                              component="span"
                              className="text-red-600 mt-2 mb-4 flex justify-center"
                            />
                          </div>

                          <hr className="w-full my-4" />

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
                                  ? 'is-invalid'
                                  : 'is-valid'
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
                            <label
                              htmlFor="edad_inicial"
                              className="mb-1 mt-3 mx-2"
                            >
                              Edad inicial que inicia la enfermedad:(*)
                            </label>
                            <Field
                              type="number"
                              name="edad_inicial"
                              id="edad_inicial"
                              className={`${
                                errors.edad_inicial && touched.edad_inicial
                                  ? 'is-invalid'
                                  : 'is-valid'
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
                            <label
                              htmlFor="edad_final"
                              className="mb-1 mt-3 mx-2"
                            >
                              Edad final que se estima la enfermedad:(*)
                            </label>
                            <Field
                              type="number"
                              name="edad_final"
                              id="edad_final"
                              className={`${
                                errors.edad_final && touched.edad_final
                                  ? 'is-invalid'
                                  : 'is-valid'
                              } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 lowercase`}
                              placeholder="85"
                            />

                            <ErrorMessage
                              name="edad_final"
                              component="span"
                              className="text-red-600 text-center mt-2 mb-4"
                            />
                          </div>

                          <div className=" ">
                            <FormikControl
                              control="textarea"
                              label="Síntomas que se presentan:(*)"
                              name="sintomas"
                              id="sintomas"
                              className="bg-gray-200"
                            />
                            <ErrorMessage
                              name="sintomas"
                              component="span"
                              className="text-red-600 mt-2 mb-4 flex justify-center"
                            />
                          </div>

                          <div className="">
                            <FormikControl
                              control="textarea"
                              label="Causas de la enfermedad:(*)"
                              name="causas"
                              id="causas"
                              className="bg-gray-200"
                            />
                            <ErrorMessage
                              name="causas"
                              component="span"
                              className="text-red-600 mt-2 mb-4 flex justify-center"
                            />
                          </div>

                          <div className=" ">
                            <FormikControl
                              control="textarea"
                              label="Tratamiento usado:(*)"
                              name="tratamiento"
                              id="tratamiento"
                              className="bg-gray-200"
                            />
                            <ErrorMessage
                              name="tratamiento"
                              component="span"
                              className="text-red-600 mt-2 mb-4 flex justify-center"
                            />
                          </div>

                          <div className="">
                            <FormikControl
                              control="textarea"
                              label="Médicos visitados anteriormente:(*)"
                              name="medicos"
                              id="medicos"
                              className="bg-gray-200"
                            />
                            <ErrorMessage
                              name="medicos"
                              component="span"
                              className="text-red-600 mt-2 mb-4 flex justify-center"
                            />
                          </div>

                          <div className="grid justify-items-end">
                            <button
                              type="submit"
                              className={`${
                                !(dirty && isValid)
                                  ? 'disabled:opacity-50'
                                  : 'text-white bg-green-400 hover:text-white hover:bg-indigo-300'
                              } border rounded border-indigo-600 text-indigo-700 w-2/5 py-2 mx-4 mt-4 hover:text-white hover:bg-indigo-300`}
                              disabled={!(dirty && isValid)}
                            >
                              Guardar y Publicar
                            </button>
                          </div>
                        </section>
                      </Form>
                      <div className="grid justify-items-end mx-4 py-1">
                        <button
                          onClick={handleClose}
                          className="border rounded border-indigo-600 text-indigo-700 w-2/5 py-2 mx-4  my-4 hover:text-black hover:bg-gray-300"
                        >
                          Cancelar
                        </button>
                      </div>
                      <div />
                    </div>
                  );
                }}
              </Formik>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </section>
      </section>
    </div>
  );
};

Ayudar.defaultProps = {
  logged_in: PropTypes.bool,
  updateStudyCase: PropTypes.func,
  getUserStudyCases: PropTypes.func,
};

Ayudar.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  allStudyCases: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  logged_in: state.user.logged_in,
  user: state.user.user,
  allStudyCases: state.study_cases.study_cases,
  medico: state.user.medico,
  empresa: state.user.empresa,
});

const mapDispatchToProps = (dispatch) => ({
  getUserStudyCases: () => dispatch(getUserStudyCases()),
  createStudyCase: (caseInfo) => dispatch(createStudyCase(caseInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ayudar);
