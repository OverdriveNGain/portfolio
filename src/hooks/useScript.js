import { useEffect } from 'react';

const useScript = (url, parentId) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script)
        }
    }, [url, parentId]);
};

export default useScript;