import { useState, useEffect } from "react";
import axios from 'axios';
import { fromJsonDB } from "./db_debug";

//options
// {
//     enable: true,
//     alt: "http://localhost:3004"
// }
const useRequest = (uri, options = {}) => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        if (response != null)
            return;
        const getDataFromServer = async () => {
            if (options.enable === true)
                return;
            let uriToUse = uri;
            if (fromJsonDB) {
                if (options.alt != null)
                    uriToUse = options.alt;
                else
                    console.error(`useRequest: jsonDB flat is set to true, but an alternate URI is not provided for the following URI: ${uri}`);
            }
            axios.get(uriToUse).then((res) => {
                if (fromJsonDB)
                    setResponse(res.data);
                else
                    setResponse(res.data.data);
            });
        }
        getDataFromServer();
    }, [response, uri, options.alt, options.enable]);
    return { response };
};

export default useRequest;