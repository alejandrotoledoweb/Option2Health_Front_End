import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser } from '../redux/actions/userActions';

const PerfilMedico = ({
  logged_in,
  user,
  loading,
  status,
  error,
  updateUser,
}) => {
  return (
    <div className="flex-inline ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full justify-items-center self-items-center mx-2">
        <aside className="col-span-1 justify-self-stretch">
          <div className=" my-4 py-2 bg-white border rounded flex flex-col justify-center items-center max-w-2xl w-full">
            {/* <img src="http://www.option2health.com/assets/img/logo.png" className="img-thumbnail w-24" alt="Responsive logo" /> */}
            <span>
              <i class="far fa-user-circle text-lg md:text-8xl my-2"></i>
            </span>
            <div>
              <ul className="flex space-x-2 m-2 text-4xl text-blue-700">
                <li>
                  <button>
                    <i class="fab fa-facebook-square"></i>
                  </button>
                </li>
                <li>
                  <button>
                    <i class="fab fa-twitter-square"></i>
                  </button>
                </li>
                <li>
                  <button>
                    <i class="fab fa-linkedin"></i>
                  </button>
                </li>
              </ul>
            </div>

            <h4 className="text-indigo-600 my-2 ">
              Datos Personales del Médico
            </h4>
            <hr className="text-indigo-300 py-2" />
            <p className="flex justify-between my-2 px-2 text-xl">
              Nombre: &nbsp;<span>{user.name}</span>
            </p>
            <p className="flex justify-between my-2 px-2">
              Email: &nbsp;<span>{user.email}</span>
            </p>
            <p className="flex justify-between my-2 px-2">
              Título: &nbsp;<span>{user.titulo_profesional}</span>
            </p>
          </div>
        </aside>
        <section className="col-span-1 justify-self-stretch bg-white rounded my-4 py-2 px-4 grid place-content-center">
          <Link to="/datosmedico">
            <button className="mx-4 my-4 py-4 px-4 rounded border border-indigo-400 text-indigo-500 hover:bg-indigo-500 hover:text-white">
              <h3>Editar datos del perfil</h3>
            </button>
          </Link>
          <Link to="/articulosmedico">
            <button className="mx-4 my-4 py-4 px-4 rounded border border-indigo-400 text-indigo-500 hover:bg-indigo-500 hover:text-white">
              <h3>Ver y editar publicaciones</h3>
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

PerfilMedico.defaultProps = {
  logged_in: PropTypes.bool,
  updateUser: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

PerfilMedico.propTypes = {
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
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userDetails) => dispatch(updateUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PerfilMedico);
