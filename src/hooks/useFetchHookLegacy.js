import { useEffect, useState } from "react";
import { getDocumentsFromFirebase } from "../helpers/getDocumentsFromFirebase";
import { filterDocuments } from "../helpers/filterDocuments";
import { deleteItemFirebase } from "../admin/helpers";
import { useDispatch } from "react-redux";
import { getDocs } from "../store/projects/thunks";
import { setError, startLoading } from "../store/projects/projectsSlice";


export const useFetchHook = () => {

    const dispatch = useDispatch();

    
    const [ docs, setDocs ]       = useState([]);
    const [ loading, setLoading ] = useState(false);
    
    let docsFromLS = JSON.parse(localStorage.getItem('documents'));
    
    const deleteDocument = async ( id ) => {
        setLoading(true);
        const deleted = await deleteItemFirebase( id );
        if (deleted) {
            setDocs([]);
        }
        setLoading(false);
    }
    
    const getDocuments = async () => {
        setLoading(true);
        const { documents } = await getDocumentsFromFirebase();
        setDocs(documents);
        setLoading(false);
    };
    

    useEffect(() => {
        // La primera vez que el usuario ingresa a WorkPage se van a cargar los documentos desde la base de datos. Es decir, se va a ejecutar getDocuments(). Ahora bien, cuando se carguen los documentos por primera vez, se van a guardar en el localStorage y de esa manera la segunda vez que se carguen los documentos no se va a llamar nuevamente a la base de datos. FIJARSE COMO HACER PARA QUE SE ACTUALICE CUANDO CAMBIE LOS DOCUMENTOS PORQUE DE ESTA MANERA NUNCA MAS VUELVE A LLAMARSE A LA BASE DE DATOS Y NO SE SABE SI SE AGREGÓ UN ELEMENTO.

        if (!docsFromLS) {
            getDocuments();
            
            docs.length > 0 && localStorage.setItem('documents', JSON.stringify(docs)); 
        } else {
            setDocs(docsFromLS);
        }

    }, []);

    return { 
        documents: docs, 
        ads: filterDocuments(docs, 'ads'),
        projects: filterDocuments(docs, 'personal-project'),
        loading,
        deleteDocument };
}
