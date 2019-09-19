import React from 'react';

export default props => (
  <div className="modal-entities-container">
    {props.entities.map((entity, i) => (
      <button
        key={i}
        className="modal-entity"
        onClick={entity.onClick}
      >
        {entity.iconName && entity.iconName}
        <span className="modal-entity-text">
          {entity.text}
          {entity.remark && <small>{entity.remark}</small>}
        </span>
      </button>
    ))}
  </div>
);
