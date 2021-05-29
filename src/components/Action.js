import React from 'react';

const Action = (props) => (
  <div>
    <button className="big-button"
    disabled={props.options.length == 0}
    onClick={props.handleDecision}
    >
      What should I do?
    </button>
  </div>  
)

export default Action;

