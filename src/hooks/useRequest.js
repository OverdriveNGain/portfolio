import { useState, useEffect } from "react";
import axios from 'axios';

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
            const jsonDB = true;

            if (options.enable === true)
                return;
            let uriToUse = uri;
            if (jsonDB) {
                if (options.alt != null)
                    uriToUse = options.alt;
                else
                    console.error(`useRequest: jsonDB flat is set to true, but an alternate URI is not provided for the following URI: ${uri}`);
            }

            console.log("Get request to " + uriToUse);
            axios.get(uriToUse).then((res) => {
                setResponse(res.data);
            });
        }
        getDataFromServer();
    }, [response, uri, options.alt, options.enable]);
    return { response };
};

export default useRequest;