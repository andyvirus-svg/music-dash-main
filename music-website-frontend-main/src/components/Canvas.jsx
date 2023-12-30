import { useState, useEffect, useRef } from 'react'
import RINGS from 'vanta/dist/vanta.rings.min'
import * as THREE from 'three'

const Canvas = () => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  const [height, _setHeight] = useState(document.documentElement.clientHeight)
  const [width, _setWidth] = useState(document.documentElement.clientWidth)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: height,
          minWidth: width,
          scale: 1.0,
          scaleMobile: 1.0,
          forceAnimate: true,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className="canvas-container" ref={vantaRef}></div>
}

export default Canvas
