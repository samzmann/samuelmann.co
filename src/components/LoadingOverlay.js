import React, { useContext, useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import animationData from '../assets/lottie/loading.json'
import { GlobalStateContext } from '../context/globalContext'

/**
 * Overlay styling taken from TailwindUI docs
 * https://tailwindui.com/components/application-ui/overlays/modals
 * */

export const LoadingOverlay = () => {
  const { globalLoading } = useContext(GlobalStateContext)

  const [showLoading, setShowLoading] = useState(globalLoading)
  const [animClass, setAnimClass] = useState('')
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    let isMounted = true
    let timeout

    if (globalLoading) {
      setShowLoading(true)
      setAnimClass('ease-out duration-300')
      setOpacity(100)
    } else {
      setAnimClass('ease-in duration-500')
      setOpacity(0)
      timeout = setTimeout(() => {
        isMounted && setShowLoading(false)
      }, 500)
    }

    return () => {
      isMounted = false
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [globalLoading])

  if (showLoading) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center transition-opacity ${animClass} opacity-${opacity}`}
      >
        <div className="absolute inset-0 bg-gray-200 opacity-75"></div>

        <div className="sm:max-w-lg sm:w-full">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            width={150}
            height={150}
          />
        </div>
      </div>
    )
  }

  return null
}
