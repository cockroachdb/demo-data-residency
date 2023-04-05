import React from 'react'
import PropTypes from 'prop-types'

const SiloLogo = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 600 250"
      aria-label="Silo Logo"
      className={`fill-brand-iridescent-blue ${className}`}
    >
      <g>
        <path
          d="M99.12,180.35c-9.93,0-17.08-2.47-21.47-7.41s-6.58-12.81-6.58-23.6v-10.62h21.5v13.59c0,2.51,0.38,4.48,1.14,5.9
		c0.76,1.42,2.09,2.13,3.98,2.13c1.98,0,3.35-0.58,4.11-1.73c0.76-1.15,1.14-3.05,1.14-5.68c0-3.34-0.33-6.13-0.99-8.37
		c-0.66-2.24-1.8-4.39-3.43-6.42c-1.63-2.04-3.88-4.42-6.76-7.13l-9.76-9.27c-7.29-6.88-10.93-14.74-10.93-23.6
		c0-9.27,2.15-16.33,6.46-21.19c4.3-4.86,10.53-7.29,18.69-7.29c9.97,0,17.04,2.66,21.22,7.97c4.18,5.31,6.27,13.38,6.27,24.22
		H101.6v-7.47c0-1.48-0.42-2.63-1.27-3.46c-0.84-0.82-1.99-1.24-3.43-1.24c-1.73,0-3,0.48-3.8,1.45c-0.8,0.97-1.2,2.21-1.2,3.74
		c0,1.52,0.41,3.17,1.24,4.94c0.82,1.77,2.45,3.81,4.88,6.12l12.54,12.05c2.51,2.39,4.82,4.91,6.92,7.57
		c2.1,2.66,3.79,5.74,5.07,9.27c1.28,3.52,1.91,7.81,1.91,12.88c0,10.21-1.88,18.21-5.65,24
		C115.03,177.46,108.47,180.35,99.12,180.35z"
        />
        <path d="M226.67,179.36V70.64h21v108.72H226.67z" />
        <path d="M349.89,179.36V70.64h21.74v90.19H394v18.53H349.89z" />
        <path
          d="M500.7,180.35c-8.69,0-15.33-2.63-19.92-7.88c-4.59-5.25-6.89-12.84-6.89-22.76V98.07c0-9.31,2.28-16.37,6.83-21.19
		c4.55-4.82,11.21-7.23,19.98-7.23s15.43,2.41,19.98,7.23c4.55,4.82,6.83,11.88,6.83,21.19v51.64c0,9.93-2.3,17.51-6.89,22.76
		C516.03,177.72,509.39,180.35,500.7,180.35z M500.88,160.33c3.29,0,4.94-3.19,4.94-9.57V97.7c0-5.35-1.61-8.03-4.82-8.03
		c-3.62,0-5.44,2.74-5.44,8.22v53c0,3.38,0.41,5.8,1.24,7.26C497.63,159.6,498.99,160.33,500.88,160.33z"
        />
        <path d="M600,249.93H-0.5V0.07H600V249.93z M9.42,240.01h580.66V9.99H9.42V240.01z" />
      </g>
      <g id="icon">
        <path d="M2530.7,519.79h-610.48v-789.59h610.48V519.79z M1951.33,488.69h548.27v-727.38h-548.27V488.69z" />
        <path
          d="M2229.67,299.02c-31.12,0-53.55-7.75-67.3-23.24c-13.75-15.49-20.63-40.15-20.63-73.98v-33.31h67.39v42.61
		c0,7.88,1.19,14.04,3.58,18.49c2.39,4.45,6.55,6.68,12.49,6.68c6.2,0,10.49-1.81,12.88-5.42c2.39-3.61,3.58-9.55,3.58-17.82
		c0-10.46-1.03-19.2-3.1-26.24c-2.07-7.04-5.65-13.75-10.75-20.14c-5.1-6.39-12.17-13.85-21.21-22.37l-30.6-29.05
		c-22.85-21.56-34.28-46.22-34.28-73.98c0-29.05,6.75-51.19,20.24-66.43c13.49-15.23,33.02-22.85,58.58-22.85
		c31.24,0,53.42,8.33,66.52,24.98c13.1,16.66,19.66,41.96,19.66,75.92h-69.33V29.44c0-4.65-1.33-8.26-3.97-10.85
		c-2.65-2.58-6.23-3.87-10.75-3.87c-5.42,0-9.39,1.52-11.91,4.55c-2.52,3.03-3.78,6.94-3.78,11.72c0,4.78,1.29,9.94,3.87,15.49
		c2.58,5.55,7.68,11.94,15.3,19.17l39.31,37.76c7.87,7.49,15.11,15.4,21.69,23.72s11.88,18.01,15.88,29.05c4,11.04,6,24.5,6,40.38
		c0,32.02-5.91,57.1-17.72,75.24C2279.54,289.95,2258.98,299.02,2229.67,299.02z"
        />
      </g>
    </svg>
  )
}

SiloLogo.defaultProps = {
  className: 'fill-brand-iridescent-blue'
}

SiloLogo.propTypes = {
  /** Tailwind class names */
  className: PropTypes.string
}

export default SiloLogo