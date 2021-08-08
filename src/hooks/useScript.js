import { useEffect } from 'react';

const useScript = (url, after) => {
    useEffect(() => {
        const script = document.createElement('script');
        let time = 0;
        if (after != null)
            time = after;
        setTimeout(() => {
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
        }, time);
        return () => {
            document.body.removeChild(script)
        }
    }, [url, after]);
};

export default useScript;