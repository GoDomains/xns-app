import React from 'react'

function LoadingAnimation() {
  return (
    <div style={{ width: 'auto', height: 'auto' }}>
      <lottie-player
        src="https://assets1.lottiefiles.com/packages/lf20_fyye8szy.json"
        mode="bounce"
        background="transparent"
        speed="1.5"
        loop
        autoplay
      />
    </div>
  )
}

export default LoadingAnimation
