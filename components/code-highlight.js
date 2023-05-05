import React from 'react'
import { CodeBlock, far } from 'react-code-blocks'
import PropTypes from 'prop-types'

const CodeHighlight = ({ codeBlock, language, showLineNumbers }) => {
  return (
    <article className='relative flex flex-col '>
      <div className='absolute right-0 -top-10 flex justify-end text-xs uppercase'>
        <div className='flex gap-2 items-center bg-depth-2 p-3 border-t-2 border-l-2 border-r-2 border-depth-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='#ffff00'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
            />
          </svg>
          <span className='select-none'>{language}</span>
        </div>
      </div>
      <CodeBlock
        text={codeBlock}
        language={language}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        theme={far}
        className='not-prose'
        customStyle={{
          height: '400px',
          overflow: 'scroll',
          borderRadius: '0px',
          border: '2px solid #302748',
          padding: '1rem',
          background: '#271d3f',
          fontSize: '0.85rem'
        }}
      />
    </article>
  )
}

CodeHighlight.defaultProps = {
  language: 'json',
  showLineNumbers: true
}

CodeHighlight.propTypes = {
  /** The code to display */
  codeBlock: PropTypes.any.isRequired,
  /** The language to use */
  language: PropTypes.string,
  /** Determines if line numbers are show */
  showLineNumbers: PropTypes.bool
}

export default CodeHighlight
