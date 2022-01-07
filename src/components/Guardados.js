import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadRecords } from '../redux/actions/recordsActions';
import Spinner from './spinner';

const Guardados = ({
  logged_in,
  user,
  userRecords,
  loadRecords,
  reLoading,
  medico,
  empresa,
}) => {
  useEffect(() => {
    loadRecords();
  }, [loadRecords]);

  return (
    <div>
      <h1 className="text-indigo-600 my-4 text-xl mx-1 bg-white px-4 py-4 border rounded flex flex-col max-w-lg md:w-96">
        Articulos Guardados
      </h1>
      <div className="flex my-2 px-2 flex-wrap items-center justify-center">
        <section className="my-2 px-2 flex-wrap items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-6">
          {reLoading ? <Spinner className="" /> : ''}
          {/* <!-- Article 1 --> */}
          {userRecords.map((ar) => (
            <article
              key={ar.id}
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
              <h6 className="text-left font-bold mt-3 mr-20">{ar.title}</h6>
              <hr className="text-black"></hr>
              <div className="flex items-center content-center flex-col">
                <p className="my-3 mr-16 pr-2">
                  {ar.description}
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
                    src={ar.video}
                    title="YouTube video player"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <section className="flex items-center  justify-center my-3 flex-wrap"></section>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

Guardados.defaultProps = {
  logged_in: PropTypes.bool,
  loadRecords: PropTypes.func,
  reLoading: PropTypes.bool,
};

Guardados.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  userRecords: PropTypes.arrayOf(Object).isRequired,
  loadRecords: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  logged_in: state.user.logged_in,
  user: state.user.user,
  userRecords: state.records.records,
  reLoading: state.records.reLoading,
  medico: state.user.medico,
  empresa: state.user.empresa,
});

const mapDispatchToProps = (dispatch) => ({
  loadRecords: () => dispatch(loadRecords()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Guardados);
