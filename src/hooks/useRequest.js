import { useState, useEffect } from "react";
import axios from 'axios';

const useRequest = (uri, options = {}) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        if (response != null)
            return;
        const getDataFromServer = async () => {
            if (options.enable === true)
                return;
            let uriToUse = uri;
            axios.get(uriToUse).then((res) => {
                setResponse(res.data.data);
            });
        }
        getDataFromServer();
    }, [response, uri, options.alt, options.enable]);
    return { response };
};

export default useRequest;