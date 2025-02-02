import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
  <SvgIcon {...props} viewBox="0 -4.5 24 24">
    <polygon
      id="Shape"
      transform="translate(0,2)"
      points="7.5 4.5 3 0 3 3 0 3 0 6 3 6 3 9"
      fill="#2b3990"
    />
    <polygon
      transform="translate(0,2)"
      points="24 4.5 19.5 0 19.5 3 16.5 3 16.5 6 19.5 6 19.5 9"
      fill="#2b3990"
    />
    <path d="m12.5 0-4 8h3v5l4-8h-3z" fill="#27aae1" fill-rule="evenodd" />
  </SvgIcon>
);
