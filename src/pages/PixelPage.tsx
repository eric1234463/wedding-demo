import { ImagePixelated } from "react-pixelate"
import slider2 from '../assets/slider-2.jpg'
import { useCallback, useEffect, useState } from "react"

const PixelPage = () => {
  const [pixelSize, setPixelSize] = useState(159);
  const [width, setWidth] = useState(3);
  const [height, setHight] = useState(3);

  const handlePixelGeneration = useCallback((next: number) => {
    if (next === 1) {
      setPixelSize((prev) => prev -1)
      setWidth((prev) => prev + 12)
      setHight((prev) => prev + 8)
    } else {
      setPixelSize((prev) => prev + 1)
      setWidth((prev) => prev - 12)
      setHight((prev) => prev - 8)
    }
  }, [])

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handlePixelGeneration(1);
      }

      if (event.key == 'ArrowLeft') {
        handlePixelGeneration(-1);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [handlePixelGeneration]);


  return (
    <div>
      <ImagePixelated src={slider2} width={width} height={height} pixelSize={pixelSize} centered  />
    </div>
  )
}
export default PixelPage