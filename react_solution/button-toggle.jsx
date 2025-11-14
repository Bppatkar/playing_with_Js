import { useState } from 'react';
import { createRoot } from 'react-dom/client';

const Toggle = () => {
  const [toogle, setToogle] = useState(false);

  const handleClick = () => {
    setToogle(!toogle);
  };

  return (
    <button type="button" onClick={handleClick}>
      {toogle ? 'On' : 'Off'}
    </button>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<Toggle />);
