import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ActiveLink = ({ children, ...props }) => {
  const { asPath, isReady } = useRouter()
  const activeClassName = 'border-brand-iridescent-blue'
  const className = 'border-transparent'
  const [computedClassName, setComputedClassName] = useState(className)

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(props.as || props.href, location.href).pathname
      console.log('linkPathname: ', linkPathname)

      const activePathname = new URL(asPath, location.href).pathname
      console.log('activePathname: ', activePathname)

      const newClassName = linkPathname === activePathname ? `${activeClassName}`.trim() : className
      console.log('newClassName: ', newClassName)

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName)
      }
    }
  }, [asPath, isReady, props.as, props.href, activeClassName, className, computedClassName])

  return (
    <Link
      className={`${computedClassName} pb-1 border-b-2 transition-color duration-300 hover:text-brand-white hover:border-brand-white`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
