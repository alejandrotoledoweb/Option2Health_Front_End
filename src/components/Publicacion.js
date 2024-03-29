import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createPublicacion } from '../redux/actions/articleActions';
import FormikControl from './formik/FormikControl';

const Publicacion = ({ logged_in, user, arStatus, createPublicacion }) => {
  // const [show, setShow] = useState(false);
  // const [modalError, setModalError] = useState(false)

  const initialValuesPubicacion = {
    title: '',
    areas: '',
    video: '',
    description: '',
    information: '',
    genero: '',
    edad_inicial: '',
    edad_final: '',
    sintomas: '',
    causas: '',
    tratamiento: '',
    diagnostico: '',
    enfermedades_relacionales: '',
  };

  const publicacionSchema = Yup.object().shape({
    title: Yup.string().required('Campo es necesario'),
    areas: Yup.string().required('Campo es necesario'),
    video: Yup.string().required('Campo es necesario'),
    description: Yup.string().required('Campo es necesario'),
    information: Yup.string(),
    genero: Yup.string().required('Campo es necesario'),
    edad_inicial: Yup.number().required('Campo es necesario'),
    edad_final: Yup.number().required('Campo es necesario'),
    sintomas: Yup.string().required('Campo es necesario'),
    causas: Yup.string(),
    tratamiento: Yup.string(),
    diagnostico: Yup.string(),
    enfermedades_relacionales: Yup.string(),
  });

  const submitForm = (values) => {
    const data = {
      user_id: user.id,
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
      enfermedades_relacionales: values.enfermedades_relacionales,
    };
    console.log(data);
    createPublicacion(data);
    // arStatus === "created" ? resetForm({initialValues: ""}) : setModalError(true);
  };

  return (
    <div>
      <div className="bg-white rounded mx-2">
        <main className="my-6 py-6">
          <Formik
            className=""
            initialValues={initialValuesPubicacion}
            validationSchema={publicacionSchema}
            onSubmit={(values) => {
              submitForm(values);
            }}
          >
            {(formik) => {
              const { errors, touched, isValid, dirty } = formik;
              return (
                <div className="mx-4">
                  <Form>
                    {/* FORM 1 */}
                    <section className="block mx-4 py-4 rounded">
                      <p className="rounded mx-8 my-4 px-4 py-2 text-white bg-indigo-500 w-1/5">
                        1. Primer paso
                      </p>
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
                              ? 'is-invalid'
                              : 'is-valid'
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
                          Áreas directas o indirectas relacionadas con la
                          enfermedad:(*)
                        </label>
                        <Field
                          type="string"
                          name="areas"
                          id="areas"
                          className={`${
                            errors.areas && touched.areas
                              ? 'is-invalid'
                              : 'is-valid'
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
                          5. Ingresa la palabra "embed" antes del código. Ej.:
                          "/embed/XNpBVXJry8I"
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

                      <div className="form-control ">
                        <FormikControl
                          control="textarea"
                          label="Texto a presentar en la publicación:"
                          name="description"
                          id="description"
                          className="bg-gray-200"
                        />
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
                              ? 'is-invalid'
                              : 'is-valid'
                          } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 lowercase`}
                          placeholder="informacion"
                        />

                        <ErrorMessage
                          name="information"
                          component="span"
                          className="text-red-600 text-center mt-2 mb-4"
                        />
                      </div>
                      <p className="rounded mx-8 my-4 px-4 py-2 text-white bg-indigo-500 w-1/5">
                        2. Segundo paso
                      </p>

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
                        <label htmlFor="edad_final" className="mb-1 mt-3 mx-2">
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

                      <div className="form-control ">
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

                      <div className="form-control ">
                        <p className="rounded mx-8 my-4 px-4 py-2 text-white bg-indigo-500 w-1/5">
                          3. Tercer paso
                        </p>
                        <FormikControl
                          control="textarea"
                          label="Causas de la enfermedad:"
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

                      <div className="form-control ">
                        <FormikControl
                          control="textarea"
                          label="Tratamiento:"
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

                      <div className="form-control ">
                        <FormikControl
                          control="textarea"
                          label="Diagnóstico de la enfermedad:"
                          name="diagnostico"
                          id="diagnostico"
                          className="bg-gray-200"
                        />
                        <ErrorMessage
                          name="diagnostico"
                          component="span"
                          className="text-red-600 mt-2 mb-4 flex justify-center"
                        />
                      </div>

                      <div className="form-control ">
                        <FormikControl
                          control="textarea"
                          label="Enfermedades relacionadas:"
                          name="enfermedades_relacionales"
                          id="enfermedades_relacionales"
                          className="bg-gray-200"
                        />
                        <ErrorMessage
                          name="enfermedades_relacionales"
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
                          } border rounded border-indigo-600 text-indigo-700 w-1/5 py-2 mx-4 my-4 hover:text-white hover:bg-indigo-300`}
                          disabled={!(dirty && isValid)}
                        >
                          Guardar y Publicar
                        </button>
                      </div>
                    </section>
                  </Form>
                  <div />
                </div>
              );
            }}
          </Formik>
        </main>
      </div>
    </div>
  );
};

Publicacion.defaultProps = {
  logged_in: PropTypes.bool,
  user: PropTypes.object,
};

Publicacion.propTypes = {
  user: PropTypes.object.isRequired,
  arStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  logged_in: state.user.logged_in,
  user: state.user.user,
  arStatus: state.article.arStatus,
});

const mapDispatchToProps = (dispatch) => ({
  createPublicacion: (dataArticle) => dispatch(createPublicacion(dataArticle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Publicacion);
