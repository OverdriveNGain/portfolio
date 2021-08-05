import { useState, useEffect } from "react";
import axios from 'axios';

const useRequest = (uri, ignore) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const getDataFromServer = async () => {
            if (ignore === true)
                return;
            axios.get(uri).then((res) => {
                setResponse(res.data);
            });
        }
        getDataFromServer();
    }, [ignore, uri]);
    return { response };
};

export default useRequest;