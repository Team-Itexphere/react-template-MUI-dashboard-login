import React, { Component, ReactElement } from 'react';

interface Props {
  style?: React.CSSProperties;
}

export default function Loading(props: Props): ReactElement {
  const { style } = props;
  return (
    <div style={style}>
      Loarding...
    </div>
  );
}
