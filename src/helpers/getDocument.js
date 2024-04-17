

export const getDocument = ( id ) => {
    let docsFromLS = JSON.parse(localStorage.getItem('documents'));

    const document = docsFromLS?.find(( doc ) => doc.id === id);
    console.log(document);
    return { document }
}
