import React, { useEffect } from 'react';
import { RegisterAction } from '../redux/actions/userActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import FormikControl from './formik/FormikControl';

const RegisterProdServ = ({
  RegisterAction,
  loading,
  error,
  status,
  registered,
}) => {
  let history = useNavigate();

  useEffect(() => {
    console.log(registered);
    if (registered) {
      history.push('/login');
    }
  });

  const initialValues = {
    name: '',
    telefono: '',
    titulo_profesional: '',
    nacimiento: '',
    email: '',
    introduccion: '',
    cedula: '',
    password: '',
    referido: '',
    intereses: [],
    medico: true,
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string().required('Nombre es necesario'),
    telefono: Yup.number()
      .min(9, 'Debe al contener 9 dígitos')
      .max(10, 'Debe al contener 9 dígitos')
      .required('Campo es necesario'),
    titulo_profesional: Yup.string().required('Título es requerido'),
    nacimiento: Yup.date().required('Fecha es necesaria'),
    email: Yup.string().required('Correo es necesario'),
    introducción: Yup.string()
      .max(150, 'Máximo 150 caracteres')
      .required('Campo es necesario'),
    cedula: Yup.string()
      .min(10, '10 caracteres necesarios')
      .max(10, '10 caracteres necesarios')
      .required('Campo es necesario'),
    password: Yup.string().required('Campo es necesario'),
    referido: Yup.string(),
    check: Yup.array(),
    medico: Yup.boolean(),
  });

  const submitForm = (values) => {
    const data = {
      name: values.name,
      telefono: values.telefono,
      titulo_profesional: values.titulo_profesional,
      nacimiento: values.nacimiento,
      email: values.email,
      introduccion: values.introduccion,
      cedula: values.cedula,
      password: values.password,
      referido: values.referido,
      intereses: values.check,
      medico: true,
    };
    console.log(data);
    RegisterAction(data);
  };

  const message = () =>
    loading === false && status === 'registered' ? (
      <span className="text-green-600 border rounded border-green-200 mx-2 my-2 px-4 py-4 flex items-center justify-center">
        Registrado con éxito
      </span>
    ) : (
      <span className="text-red-600 border rounded border-red-200 mx-2 my-2 px-4 py-4 flex items-center justify-center">
        {error}
      </span>
    );

  return (
    <div className="flex justify-center flex-col items-center content-center mb-12">
      <section className="mr-2 ">
        <Link to="/">
          <img
            src="https://option2health.com/assets/img/logo2.png"
            className="max-w-xs"
            alt="logo medium"
          />
        </Link>
      </section>

      <div className="flex flex-col border border-gray-500 bg-white max-w-screen-lg rounded mx-6 px-8">
        <p className="border rounded border-indigo-300 mt-4 mx-4 text-center flex items-center justify-center">
          {' '}
          <Link to="/" className="font-bold text-indigo-600 w-full my-2">
            <i className="fas fa-home"></i> Regresa al Inicio
          </Link>
        </p>
        {/* <LoginForm /> */}
        <section>
          <h3 className="text-lg my-4 px-4 font-bold">
            Registro de Productos o Servicios
          </h3>
          <Formik
            className=""
            initialValues={initialValues}
            validationSchema={registerSchema}
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
                      <label htmlFor="name" className="mb-3 mx-2 px-2">
                        Ingresa tu nombres y apellidos
                      </label>
                      <Field
                        type="string"
                        name="name"
                        id="name"
                        className={`${
                          errors.name && touched.name
                            ? 'is-invalid'
                            : 'is-valid'
                        } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 capitalize`}
                        placeholder="Alex Paredes"
                      />

                      <ErrorMessage
                        name="name"
                        component="span"
                        className="text-red-600 text-center mt-2 mb-4"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="form-group flex flex-col justify-center">
                        <label htmlFor="telefono" className="mb-3 mx-2 px-2">
                          Ingresa tu teléfono celular (Whatsapp habilitado*):
                        </label>
                        <Field
                          type="number"
                          name="telefono"
                          id="telfono"
                          className={`${
                            errors.password && touched.password
                              ? 'is-invalid'
                              : 'is-valid'
                          } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 w-2/3`}
                        />

                        <ErrorMessage
                          name="telefono"
                          component="span"
                          className="text-red-600 text-center mt-2 mb-4"
                        />
                      </div>

                      <div className="form-group flex flex-col justify-center">
                        <label htmlFor="titulo" className="mb-2 mx-2 px-2">
                          Título Profesional
                        </label>
                        <Field
                          type="string"
                          name="titulo"
                          id="titulo"
                          className={`${
                            errors.titulo && touched.titulo
                              ? 'is-invalid'
                              : 'is-valid'
                          } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 capitalize`}
                          placeholder="Cirujano Oncólogo"
                        />

                        <ErrorMessage
                          name="titulo"
                          component="span"
                          className="text-red-600 text-center mt-2 mb-4"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="form-group flex flex-col justify-center">
                        <label htmlFor="nacimiento" className="mb-2 mx-2 px-2">
                          Ingresa tu fecha de nacimiento:
                        </label>
                        <Field
                          type="date"
                          name="nacimiento"
                          id="nacimiento"
                          className={`${
                            errors.nacimiento && touched.nacimiento
                              ? 'is-invalid'
                              : 'is-valid'
                          } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 w-2/3`}
                        />

                        <ErrorMessage
                          name="nacimiento"
                          component="span"
                          className="text-red-600 text-center mt-2 mb-4"
                        />
                      </div>

                      <div className="form-group flex flex-col justify-center">
                        <label htmlFor="email" className="mb-3 mx-2 px-2">
                          Ingresa tu correo electrónico
                        </label>
                        <Field
                          type="string"
                          name="email"
                          id="email"
                          className={`${
                            errors.email && touched.email
                              ? 'is-invalid'
                              : 'is-valid'
                          } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 lowercase`}
                          placeholder="alex@email.com"
                        />

                        <ErrorMessage
                          name="email"
                          component="span"
                          className="text-red-600 text-center mt-2 mb-4"
                        />
                      </div>
                    </div>

                    <div className="form-control ">
                      <FormikControl
                        control="textarea"
                        label="Ingrese una introducción de su perfil(se mostrará en la ficha personal)"
                        name="introduccion"
                        className="bg-gray-200"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="form-group flex flex-col justify-center">
                        <label htmlFor="cedula" className="mx-2 px-2 mt-4 mb-4">
                          Ingresa tu cédula de identidad:
                        </label>
                        <Field
                          type="number"
                          name="cedula"
                          id="cedula"
                          className={`${
                            errors.cedula && touched.cedula
                              ? 'is-invalid'
                              : 'is-valid'
                          } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 w-2/3`}
                        />

                        <ErrorMessage
                          name="cedula"
                          component="span"
                          className="text-red-600 text-center mt-2 mb-4"
                        />
                      </div>

                      <div className="form-group flex flex-col justify-center">
                        <label
                          htmlFor="password"
                          className="mt-4 mb-4 mx-2 px-2"
                        >
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
                          } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2`}
                        />

                        <ErrorMessage
                          name="password"
                          component="span"
                          className="text-red-600 text-center mt-2 mb-4"
                        />
                      </div>
                    </div>

                    <div className="form-group flex flex-col justify-center">
                      <label htmlFor="referido" className="mt-4 mb-4 mx-2 px-2">
                        Ingresa tu referido:
                      </label>
                      <Field
                        type="string"
                        name="referido"
                        id="referido"
                        className={`${
                          errors.referido && touched.referido
                            ? 'is-invalid'
                            : 'is-valid'
                        } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 w-1/3`}
                      />

                      <ErrorMessage
                        name="referido"
                        component="span"
                        className="text-red-600 text-center mt-2 mb-4"
                      />
                    </div>

                    <div id="checkbox-group mx-2 px-2 my-4 py-4">
                      Temas de interés
                    </div>
                    <hr />
                    <div
                      role="group"
                      aria-labelledby="checkbox-group"
                      className="grid grid-cols-2 md:grid-cols-3"
                    >
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Alergología"
                          className="mx-1 my-2"
                        />
                        Alergología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Bariatría"
                          className="mx-1 my-2"
                        />
                        Bariatría
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Cardiología"
                          className="mx-1 my-2"
                        />
                        Cardiología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Cirugía cardíaca"
                          className="mx-1 my-2"
                        />
                        Cirugía cardíaca
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Cirugía General"
                          className="mx-1 my-2"
                        />
                        Cirugía General
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Cirugía Ortopédica"
                          className="mx-1 my-2"
                        />
                        Cirugía Ortopédica
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Cirugía Plástica"
                          className="mx-1"
                        />
                        Cirugía Plástica
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Cirugía Vascular"
                          className="mx-1 my-2"
                        />
                        Cirugía Vascular
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Cuidado del bebe y madres"
                          className="mx-1 my-2"
                        />
                        Cuidado del bebe y madres
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Cuidado Personal"
                          className="mx-1 my-2"
                        />
                        Cuidado Personal
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Dermatología"
                          className="mx-1 my-2"
                        />
                        Dermatología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Endicronología"
                          className="mx-1 my-2"
                        />
                        Endicronología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Farmacología"
                          className="mx-1 my-2"
                        />
                        Farmacología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Gastroenterología"
                          className="mx-1 my-2"
                        />
                        Gastroenterología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Genética"
                          className="mx-1 my-2"
                        />
                        Genética
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Geriatría"
                          className="mx-1 my-2"
                        />
                        Geriatría
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Ginecología"
                          className="mx-1 my-2"
                        />
                        Ginecología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Hematología"
                          className="mx-1 my-2"
                        />
                        Hematología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Hemodinámica"
                          className="mx-1 my-2"
                        />
                        Hemodinámica
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Hemoterapia"
                          className="mx-1 my-2"
                        />
                        Hemoterapia
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Inmunología"
                          className="mx-1 my-2"
                        />
                        Inmunología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Medicina General"
                          className="mx-1 my-2"
                        />
                        Medicina General
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Medicina Interna"
                          className="mx-1 my-2"
                        />
                        Medicina Interna
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Medicina Naturista"
                          className="mx-1 my-2"
                        />
                        Medicina Naturista
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Microbiología "
                          className="mx-1 my-2"
                        />
                        Microbiología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Nefrología "
                          className="mx-1 my-2"
                        />
                        Nefrología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Neurocirugía"
                          className="mx-1 my-2"
                        />
                        Neurocirugía
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Neurología"
                          className="mx-1 my-2"
                        />
                        Neurología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Nutriología"
                          className="mx-1 my-2"
                        />
                        Nutriología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Oftalmología"
                          className="mx-1 my-2"
                        />
                        Oftalmología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Oncología"
                          className="mx-1 my-2"
                        />
                        Oncología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Ortopedia"
                          className="mx-1 my-2"
                        />
                        Ortopedia
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Otorrinolaringología"
                          className="mx-1 my-2"
                        />
                        Otorrinolaringología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Pediatría"
                          className="mx-1 my-2"
                        />
                        Pediatría
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Prevención"
                          className="mx-1 my-2"
                        />
                        Prevención
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Psicología"
                          className="mx-1 my-2"
                        />
                        Psicología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Psiquiatría"
                          className="mx-1 my-2"
                        />
                        Psiquiatría
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Reumatología"
                          className="mx-1 my-2"
                        />
                        Reumatología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Sexología"
                          className="mx-1 my-2"
                        />
                        Sexología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Otorrinolaringología"
                          className="mx-1 my-2"
                        />
                        Otorrinolaringología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Suplementos Alimenticios"
                          className="mx-1 my-2"
                        />
                        Suplementos Alimenticios
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Suplementos Vitaminicos"
                          className="mx-1 my-2"
                        />
                        Suplementos Vitaminicos
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Traumatología"
                          className="mx-1 my-2"
                        />
                        Traumatología
                      </label>
                      <label>
                        <Field
                          type="checkbox"
                          name="intereses"
                          value="Urología"
                          className="mx-1 my-2"
                        />
                        Urología
                      </label>
                    </div>

                    <div className="hidden form-group flex flex-col justify-center">
                      <label htmlFor="medico" className="mt-4 mb-4">
                        MEDICO:
                      </label>
                      <Field
                        type="boolean"
                        name="medico"
                        id="medico"
                        className={`${
                          errors.medico && touched.medico
                            ? 'is-invalid'
                            : 'is-valid'
                        } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2`}
                      />

                      <ErrorMessage
                        name="medico"
                        component="span"
                        className="text-red-600 text-center mt-2 mb-4"
                      />
                    </div>

                    <div className="flex justify-center items-center flex-col my-4">
                      <button
                        type="submit"
                        className={`${
                          !(dirty && isValid)
                            ? 'disabled:opacity-50 bg-green-100 w-1/3'
                            : 'bg-green-400'
                        } border rounded  mx-2 my-2 px-2 py-2`}
                        disabled={!(dirty && isValid)}
                      >
                        Registrarse
                      </button>
                      <p className="flex text-center self-center my-4">
                        &nbsp; Ya tiene cuenta?{' '}
                        <Link to="/login" className="font-bold text-indigo-600">
                          &nbsp; Iniciar Sesión
                        </Link>
                      </p>
                    </div>
                  </Form>
                  <div />
                  <p className="block">{loading ? '' : message()}</p>
                </div>
              );
            }}
          </Formik>
        </section>
      </div>
    </div>
  );
};

RegisterProdServ.defaultProps = {
  RegisterAction: PropTypes.func,
  LoginTest: PropTypes.func,
  registered: PropTypes.bool,
};

RegisterProdServ.propTypes = {
  RegisterAction: PropTypes.func,
  LoginTest: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  registered: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  error: state.user.error,
  status: state.user.status,
  registered: state.user.registered,
});

const mapDispatchToProps = (dispatch) => ({
  RegisterAction: (loginDetails) => dispatch(RegisterAction(loginDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterProdServ);
