import * as React from 'react';

function SvgPayment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        d="M20 9H4V7c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v2zm0 2v6c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-6h16z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPayment;
