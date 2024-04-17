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
        // La primera vez que el usuario ingresa a WorkPage se van a cargar los documentos desde la base de datos. Es decir, se va a ejecutar getDocuments(). Ahora bien, cuando se carguen los documentos por primera vez, se van a guardar en el localStorage y de esa manera la segunda vez que se carguen los documentos no se va a llamar nuevamente a la base de datos. FIJARSE COMO HACER PARA QUE SE ACTUALICE CUANDO CAMBIE LOS DOCUMENTOS PORQUE DE ESTA MANERA NUNCA MAS VUELVE A LLAMARSE A LA BASE DE DATOS Y NO SE SABE SI SE AGREGÓ UN ELEMENTO.

        let docsFromLS = JSON.parse(localStorage.getItem('documents'));

        if (!docsFromLS) {
            getDocuments();
            
            docs.length > 0 && localStorage.setItem('documents', JSON.stringify(docs)); 
        } else {
            setDocs(docsFromLS);
        }

    }, []);

    return { documents: docs, loading };
}
