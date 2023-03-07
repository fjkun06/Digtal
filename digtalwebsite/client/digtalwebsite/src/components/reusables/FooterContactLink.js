import React from 'react'

const FooterContactLink = ({children,text=window.location}) => {
  return (
    <span className='footer__link-contact footer__link' onClick={() =>
      (window.location.href = text)
    }>
      {children}
    </span>
  )
}

export default FooterContactLink
