import React from 'react';
import PropTypes from 'prop-types';

const Info = ({name, step, quiz}) => (
  <div className="info">
    {
      name && (
        <label>
          Name:
          <input type="text" defaultValue={name}/>
        </label>
      )
    }
    {
      step && (
        <label>
          Step:
          <input type="text" value={step} readOnly/>
        </label>
      )
    }
    {
      quiz && (
        <div className="info-quiz">
          <img src={quiz} alt=""/>
        </div>
      )
    }
  </div>
);

Info.defaultProps = {
  name: null,
  step: null,
  quiz: null
}

Info.propTypes = {
  name: PropTypes.string,
  step: PropTypes.string,
  quiz: PropTypes.string,
};

export default Info;
