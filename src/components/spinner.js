import React from 'react';

function Spinner() {
  return (
    <div className="spinner-border spinner-border-sm mr-2 flex mx-auto w-full" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;