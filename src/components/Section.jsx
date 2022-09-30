import React from 'react';

export default function Section({ id, children }) {
  return (
    <div className="section" id={id}>
      {children}
    </div>
  );
}
