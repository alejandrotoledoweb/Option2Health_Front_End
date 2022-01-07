import React, {useEffect} from 'react';
import { RegisterAction } from '../redux/actions/userActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from 'react-router-dom';

const Register = ({ RegisterAction, loading, error, status, registered }) => {

  let history = useHistory();

  useEffect(() => {
    console.log(registered)
    if (registered) {
      history.push("/login");
    }
  }, );

  const initialValues = {
    name: "",
    genero: "",
    ciudad: "",
    email: "",
    password: "",
    nacimiento: "",
    hijos: "",
    telefono: "",
    paciente: true,
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string().required("Nombre es necesario"),
    genero: Yup.string().required("Campo es necesario"),
    ciudad: Yup.string().required("Campo es necesario"),
    email: Yup.string().required("Correo es necesario"),
    password: Yup.string().required("Campo es necesario"),
    nacimiento: Yup.date().required("Fecha es necesaria"),
    hijos: Yup.string(),
    telefono: Yup.number().min(9, 'Debe al contener 9 dígitos'),
    paciente: Yup.boolean(),
  });

  const submitForm = (values) => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
      ciudad: values.ciudad,
      nacimiento: values.nacimiento,
      genero: values.genero,
      hijos: values.hijos,
      telefono: values.telefono,
      paciente: true,
    };
    console.log(data);
    RegisterAction(data);
  };

  const message = () =>
    loading === false && status === "registered" ? (
      <span className="text-green-600 border rounded border-green-200 mx-2 my-2 px-4 py-4 flex items-center justify-center">Registrado con éxito</span>
    ) : (
      <span className="text-red-600 border rounded border-red-200 mx-2 my-2 px-4 py-4 flex items-center justify-center">{error}</span>
    );

  return (
    <div className="flex justify-center flex-col items-center content-center mb-12">
      <section className="mr-2 ">
        <Link to="/"><img src="https://option2health.com/assets/img/logo2.png" className="max-w-xs" alt="logo medium"/></Link>
      </section>

      <div className="flex flex-col border border-gray-500 bg-white max-w-screen-lg rounded mx-6 px-8">
      <p className="border rounded border-indigo-300 mt-4 mx-4 text-center flex items-center justify-center">  <Link to="/" className="font-bold text-indigo-600 w-full my-2"><i className="fas fa-home"></i> Regresa al Inicio</Link></p>
        {/* <LoginForm /> */}
        <section>
          <h3 className="text-lg my-4 px-4 font-bold">Registro de Usuario</h3>
          <Formik
            className=""
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={(values, {resetForm}) => {
              submitForm(values);
              resetForm({initialValues: ""})
            }}
          >
            {(formik) => {
              const { errors, touched, isValid, dirty } = formik;
              return (
                <div className="mx-4">
                  <Form>
                    <div className="form-group flex flex-col justify-center">
                      <label htmlFor="name" className="mb-3">
                      Ingresa tu nombre y apellido
                      </label>
                      <Field
                        type="string"
                        name="name"
                        id="name"
                        className={`${
                          errors.name && touched.name
                            ? "is-invalid"
                            : "is-valid"
                        } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 capitalize`}
                        placeholder="Alex Paredes"
                      />

                      <ErrorMessage
                        name="name"
                        component="span"
                        className="text-red-600 text-center mt-2 mb-4"
                      />
                    </div>

                    <div className="form-group flex flex-col justify-center">
                      <label htmlFor="email" className="mb-3">
                      Ingresa tu correo electrónico
                      </label>
                      <Field
                        type="string"
                        name="email"
                        id="email"
                        className={`${
                          errors.email && touched.email
                            ? "is-invalid"
                            : "is-valid"
                        } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2 lowercase`}
                        placeholder="alex@email.com"
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
                        <option value="Puyo">Puyo</option>
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
                    </div>

                    <div className="form-group flex flex-col justify-center">
                      <label htmlFor="nacimiento" className="mt-4 mb-4">
                        Ingresa tu fecha de nacimiento:
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
                      <label htmlFor="telefono" className="mt-4 mb-4">
                        Ingresa tu teléfono celular:
                      </label>
                      <Field
                        type="number"
                        name="telefono"
                        id="telfono"
                        className={`${
                          errors.telefono && touched.telefono
                            ? "is-invalid"
                            : "is-valid"
                        } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2`}
                      />

                      <ErrorMessage
                        name="telefono"
                        component="span"
                        className="text-red-600 text-center mt-2 mb-4"
                      />
                    </div>

                    <div className="hidden form-group justify-center">
                      <label htmlFor="paciente" className="mt-4 mb-4">
                        PACIENTE:
                      </label>
                      <Field
                        type="boolean"
                        name="paciente"
                        id="paciente"
                        className={`${
                          errors.password && touched.password
                            ? "is-invalid"
                            : "is-valid"
                        } form-control border rounded bg-gray-200 mx-2 mt-4 mb-4 py-2 px-2`}
                      />

                      <ErrorMessage
                        name="paciente"
                        component="span"
                        className="text-red-600 text-center mt-2 mb-4"
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
                          !(dirty && isValid) ? "disabled:opacity-50" : "bg-green-400"
                        } border rounded  mx-2 my-2 px-2 py-2`}
                        disabled={!(dirty && isValid)}
                      >
                        Registrarse
                      </button>
                      <p className="flex text-center self-center">&nbsp; Ya tiene cuenta? <Link to="/login" className="font-bold text-indigo-600">&nbsp; Iniciar Sesión</Link></p>
                    </div>
                  </Form>
                  <div  />
                  <p className="block">{loading ? "" : message() }</p>
                </div>
              );
            }}
          
          </Formik>
        </section>
      </div>
  </div>
  )
};

Register.defaultProps = {
  RegisterAction: PropTypes.func,
  LoginTest: PropTypes.func,
  registered: PropTypes.bool,
};

Register.propTypes = {
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
  registered : state.user.registered,
});

const mapDispatchToProps = (dispatch) => ({
  RegisterAction: (loginDetails) => dispatch(RegisterAction(loginDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);


