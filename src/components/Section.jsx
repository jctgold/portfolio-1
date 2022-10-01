import React from 'react';

export default function Section({ id, children }) {
  return (
    <div className="section overflow-hidden" id={id}>
      {children}
    </div>
  );
}
