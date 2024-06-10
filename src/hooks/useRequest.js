import { useState, useEffect } from "react";
import axios from 'axios';

const useRequest = (uri, options = {}) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        if (response != null)
            return;
        const getDataFromServer = async () => {
            console.log(`Sending get request: ${uri}`);
            axios.get(uri).then((res) => {
                console.log(`Got response: ${res}`);
                setResponse(res.data.data);
            });
        }
        getDataFromServer();
    }, [response, uri, options.alt, options.enable]);
    return { response };
};

export default useRequest;