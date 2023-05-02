import React, { useRef, useEffect, useState } from 'react';

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/15086344/pexels-photo-15086344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15566155/pexels-photo-15566155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14768108/pexels-photo-14768108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15679627/pexels-photo-15679627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
  ]
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.src = images[imageIndex];
  }, [imageIndex]);

  const ChangeImage = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1)
    }
    else {
      alert('no more umage')
    }
  };

  return (
    <>
      <img ref={imageRef} alt='default image' />
      <button onClick={ChangeImage}>Change imahe</button>
    </>
  )

}
export default App;
