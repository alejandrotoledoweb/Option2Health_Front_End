import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCoins } from '../redux/actions/coinsActions';
import { logoutUserAction } from '../redux/actions/userActions';
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

const Coinsults = ({
  logged_in,
  user,
  coins,
  loadCoins,
  medico,
  empresa,
  logoutUserAction,
}) => {
  useEffect(() => {
    loadCoins();
  }, [loadCoins]);

  return (
    <div>
      <h2 className="my-10 relative  p-2 mb-2  max-w-3xl md:max-w-3xl mx-4 text-3xl text-indigo-400">
        Coinsults
      </h2>
      <div className="flex my-2 px-2 flex-wrap items-start justify-center">
        <div>
          <div className="my-8 relative shadow px-4 py-4 mb-5 bg-white rounded border max-w-3xl md:max-w-3xl mx-2">
            <section>
              <div className="flex my-6 flex-wrap justify-end lg:justify-between">
                <div className="w-24 mx-6">
                  <img
                    className="absolute bg-white left-10 -top-10 border border-info d-flex flex-column justify-content-center w-28 h-28 rounded-full"
                    src="https://option2health.com/assets/img/coinsults.jpeg"
                    alt="curtita de colores"
                  />
                </div>
                <div className="my-2 mx-6 pl-10 text-center">
                  <h3>Coinsults Actuales</h3>
                  <p className="text-sm">
                    Total de coinsults :{' '}
                    <span className="font-bold">
                      {coins.reduce((accu, item) => accu + item.value, 0)}
                    </span>
                  </p>
                </div>
                <div className="my-2 mx-6 text-center">
                  <h3>Movimientos</h3>
                  <p className="text-sm">
                    Total de movimientos:{' '}
                    <span className="font-bold">{coins.length}</span>
                  </p>
                </div>
              </div>
            </section>
            <div>
              <h4 className="text-indigo-600 my-4 ">
                ¿Sabes qué son los Coinsults?
              </h4>
              <hr className="text-indigo-300 my-2 py-2" />
              <p className="my-2">
                Son los puntos que ganas cada vez que interactúas con esta
                plataforma. Algunas maneras de obtener Coinsults son:
              </p>

              <ul className="my-2">
                <li className="my-2">
                  - Al crear tu cuenta en Option2health con lo cual ganas 5
                  Coinsults de bienvenida.
                </li>
                <li className="my-2">
                  - Primer “Like” en una publicación de la plataforma de
                  Option2health.
                </li>
                <li className="my-2">
                  - Creación de contenido de valor para tus pacientes, entre
                  otras.
                </li>
              </ul>

              <h4 className="my-4">¿Para qué sirven?</h4>
              <p className="my-2">
                Con tus Coinsults acumulados pordrás canjearlos por más
                publicaciones pautadas en nuestra plataforma y de esta manera
                llegar a más usuarios y potenciales pacientes que requieran de
                tus servicios.
              </p>
            </div>
          </div>
        </div>

        <div className="my-10 relative shadow p-4 mb-5 bg-white rounded mx-4 border max-w-3xl">
          <article>
            <div>
              <h3>Tus Movimientos son: {coins.length}</h3>
              <p>
                En esta sección podrás encontrar los mivimientos realizados en
                tu cuenta de O2H
              </p>
            </div>
            <div className="flex flex-col my-4">
              {coins.map((co) => (
                <div className="flex">
                  <p className="flex items-center bg-indigo-300 text-white justify-center text-3xl w-14 h-14 rounded-full">
                    +
                  </p>
                  <div className="flex-inline bg-white mx-6">
                    <p className="text-sm my-2">
                      Creado Fecha: {co.date_created}{' '}
                    </p>
                    <p className="text-sm my-2">
                      Has ganado{' '}
                      <span className="text-indigo-600 text-md font-bold">
                        {co.value}
                      </span>{' '}
                      coinsult
                    </p>
                    <p className="text-md my-2">{co.message}</p>
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

Coinsults.defaultProps = {
  logged_in: PropTypes.bool,
  user: PropTypes.object,
  coins: PropTypes.object,
};

Coinsults.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  coins: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  logged_in: state.user.logged_in,
  user: state.user.user,
  coins: state.coins.coins,
  medico: state.user.medico,
  empresa: state.user.empresa,
});

const mapDispatchToProps = (dispatch) => ({
  loadCoins: () => dispatch(loadCoins()),
  logoutUserAction: (userId) => dispatch(logoutUserAction(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Coinsults);
