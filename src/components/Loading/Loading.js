import React from 'react';
import './Loading.css';
// import Loading from './../../components/Layout/Loading'

const Loading = () => {
  return (
    <div className="loading d-flex flex-column justify-content-center align-items-center">
      <div className="loader text-center"></div>
      <h6 className="mt-3">Loading your movies...</h6>
    </div>
  );
};

export default Loading;
