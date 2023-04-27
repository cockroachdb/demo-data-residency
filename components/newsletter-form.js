import React, { useState, useReducer } from 'react'
import PropTypes from 'prop-types'

import { initialState, reducer } from '../hooks/use-reducer'

import CockroachLabsIcon from './cockroach-labs-icon'
import MarketoForm from './marketo-form'

const NewsletterForm = ({ formId }) => {
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch({
      type: 'isSubmitting'
    })

    window.MktoForms2.getForm(formId)
      .vals({ Email: email })
      .onSuccess(() => {
        dispatch({
          type: 'success'
        })
        setEmail('')
        return false
      })
      .submit()
  }

  return (
    <section className='grid gap-8'>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-center mx-auto'>
          <CockroachLabsIcon className={'w-12 h-12 sm:w-16 sm:h-16'} />
        </div>
        <h2 className='heading-md'>newsletter</h2>
        <p className='m-0 text-sm text-center mx-auto max-w-lg'>
          The latest news, blogs, webinars, videos and what we're reading.
        </p>
      </div>
      <div className='flex flex-col mx-auto w-full sm:max-w-lg gap-2'>
        <form onSubmit={handleSubmit} className='flex gap-2 items-end'>
          <label className='flex flex-col gap-1 grow text-xs text-brand-white font-medium'>
            <span className="after:content-['*'] after:mt-0.5 after:text-red-500 flex gap-1 grow text-xs text-brand-white font-medium">
              Email
            </span>
            <input
              className='bg-brand-deep-purple border-2 border-brand-evening-hush p-2 text-sm text-brand-white placeholder:text-brand-evening-hush disabled:text-brand-evening-hush disabled:cursor-not-allowed'
              type='email'
              required
              placeholder='you@example.xyz'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </label>

          <button
            type='submit'
            className='text-sm min-w-fit border-brand-electric-purple bg-brand-electric-purple text-brand-white disabled:border-brand-evening-hush disabled:bg-brand-evening-hush disabled:text-brand-white disabled:cursor-not-allowed px-2 transition-color duration-300 hover:text-brand-white hover:border-brand-white'
            disabled={state.isSubmitting || !checked}
            aria-label='Newsletter subscribe'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
              />
            </svg>
          </button>
        </form>

        <span className='flex items-start py-1 h-6'>
          {state.isSubmitting ? <span className='text-xs text-brand-warning'>Submitting...</span> : null}
          {state.success ? <span className='text-xs text-green-500'>Thanks for signing up.</span> : null}
        </span>

        <div className='flex flex-col gap-4'>
          <div className='flex gap-2 items-start sm:items-center justify-center'>
            <input
              checked={checked}
              id='checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 bg-red-400 mt-.5 focus:ring-0'
              onChange={() => setChecked(!checked)}
            />
            <label
              htmlFor='checkbox'
              className='flex flex-col sm:flex-row gap-1 text-xs font-medium text-brand-neutral-400'
            >
              <span>
                I agree to the{' '}
                <a
                  href='https://www.cockroachlabs.com/cloud-terms-and-conditions/'
                  rel='noopener'
                  target='_blank'
                  className='text-brand-evening-hush transition-color duration-300 hover:text-brand-white'
                >
                  terms of service
                </a>
              </span>
              <span className='text-center sm:text-left'>
                and{' '}
                <a
                  href='https://www.cockroachlabs.com/privacy/'
                  rel='noopener'
                  target='_blank'
                  className='text-brand-evening-hush transition-color duration-300 hover:text-brand-white'
                >
                  privacy policy
                </a>
              </span>
            </label>
          </div>

          <small className='block text-xs text-center text-brand-neutral-400'>
            To update your email preferences visit{' '}
            <a
              href='https://www.cockroachlabs.com/email-preferences/'
              target='_blank'
              rel='noreferrer'
              className='text-brand-evening-hush transition-color duration-300 hover:text-brand-white'
            >
              cockroachlabs.com
            </a>
          </small>
        </div>
        <MarketoForm debug={false} formId={formId} />
      </div>
    </section>
  )
}

NewsletterForm.propTypes = {
  /** The Marketo Form Id */
  formId: PropTypes.string.isRequired
}

export default NewsletterForm
