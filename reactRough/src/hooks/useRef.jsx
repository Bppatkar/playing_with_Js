import { useRef } from 'react';

const Check = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input type="text" placeholder="Write something" ref={inputRef} />
      <button onClick={handleClick}>focus</button>
    </>
  );
};

export default Check;
