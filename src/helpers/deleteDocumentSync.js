

export const deleteDocumentSync = ( documents, id ) => {
    return documents.filter(( document ) => document.id !== id);
}