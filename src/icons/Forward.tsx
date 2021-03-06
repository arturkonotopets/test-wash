import * as React from 'react';

function SvgForward(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        d="M15.5 11v-1c0-.6.4-1 1-1 .3 0 .6.1.8.4l1.5 1.9c.3.4.3.9 0 1.2l-1.5 1.9c-.3.4-1 .5-1.4.2-.2-.2-.4-.5-.4-.8v-1H6c-.5 0-1-.4-1-1 0-.5.4-1 1-1h9.5z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgForward;
