import { useState, useEffect } from "react";

const useResize = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }

        let timer;
        const debounce = (func) => {
            return () => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func();
                }, 300);
            };
        }

        const debouncedHandleResize = debounce(handleResize);
        window.addEventListener('resize', debouncedHandleResize)


        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        }
    }, [dimensions]);

    return { dimensions };
};

export default useResize;