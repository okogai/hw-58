import React from 'react';
import { AlertProps } from '../../../types';

const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
  return (
    <div
      className={`alert alert-${type} d-flex justify-content-between align-items-center`}
      role="alert"
      style={{ cursor: 'default' }}
    >
      <div>{children}</div>
      {onDismiss && (
        <button type="button" className="btn-close" onClick={onDismiss}></button>
      )}
    </div>
  );
};

export default Alert;
