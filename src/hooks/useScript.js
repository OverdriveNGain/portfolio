import { useEffect } from 'react';

const useScript = (url, after) => {
    useEffect(() => {
        const script = document.createElement('script');
        setTimeout(() => {
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
        }, after);
        return () => {
            document.body.removeChild(script)
        }
    }, [url, after]);
};

export default useScript;