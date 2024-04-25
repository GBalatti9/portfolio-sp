import _ from 'lodash';
import isEqual from 'lodash/isEqual';

import { getDocumentsFromFirebase } from "./getDocumentsFromFirebase"

export const compareDocuments = async () => {
    const documentsFromLS = JSON.parse(localStorage.getItem('documents'));
    const { documents: documentsFromFirebase } = await getDocumentsFromFirebase();
    
    if (!documentsFromLS) {
        return true;
    }
    if (documentsFromFirebase?.length !== documentsFromLS?.length) {
        return false;
    }
    if (documentsFromFirebase?.length === 0 && documentsFromLS?.length === 0) {
        return true;
    }
    
    let objAreEqual;
    documentsFromLS.forEach(( doc, i ) => {
        const docFirebase = documentsFromFirebase[i];
        objAreEqual = _.isEqual(doc, docFirebase);
        if (!objAreEqual) {
            return objAreEqual;
        }
    });

    return objAreEqual;
}
