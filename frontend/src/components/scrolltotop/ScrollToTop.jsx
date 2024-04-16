import { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";


 const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-10 right-5 ">
      <button
        type="button"
        onClick={handleScrollToTop}
        className={isVisible ? 'bg-theme-green text-white  rounded p-4':'hidden'}
      > 
        <FaArrowUp className='h-6 w-6 ' />
      </button>
    </div>
  )
}

export default ScrollToTop