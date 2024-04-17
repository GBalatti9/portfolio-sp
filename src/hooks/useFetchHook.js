import { useEffect, useState } from "react";
import { getDocumentsFromFirebase } from "../helpers/getDocumentsFromFirebase";


export const useFetchHook = () => {

    const [ docs, setDocs ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const getDocuments = async () => {
        setLoading(true);
        const { documents } = await getDocumentsFromFirebase();
        setDocs(documents);
        setLoading(false);
    };
    
    useEffect(() => {
        getDocuments();
    }, []);


    return { documents: docs, loading };
}
