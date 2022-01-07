import React from 'react';

const MeGusta = ({ createLikeBtn, arId, likes }) => {
  return (
    <>
      <button
        onClick={() => createLikeBtn(arId)}
        type="button"
        className="rounded border-2 flex items-center content-around my-2 mx-2 px-2 py-2 border-indigo-500 text-white bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600"
      >
        <i className="fas fa-heartbeat"></i>&nbsp;{likes} &nbsp; Me Gusta
      </button>
    </>
  );
};

export default MeGusta;
