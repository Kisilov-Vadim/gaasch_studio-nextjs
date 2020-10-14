import React, { ReactElement, useState } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
  styles?: any
  handleClick?: (e:any) => void
}

export default function LoadImage({src, alt, className, styles, handleClick}: Props): ReactElement {
  const [load, setLoad] = useState<boolean>(false)

  return (
    <img 
      src={'http://gaasch-studio.lu/' + src} 
      alt={alt}
      onLoad={() => setLoad(true)}  
      style={styles}
      className={`image ${className ? className : ''} ${load ? 'loaded-image' : ''}`}
      onClick={handleClick}
    />
  )
}
