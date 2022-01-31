import { useEffect } from 'react';

const importUseEffect = scriptSource => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptSource;
    script.async = true;
    document.appendChild(script)
    return () => {
    document.body.removeChild(script)
}

 }, [scriptSource]);
};

export default importUseEffect;


