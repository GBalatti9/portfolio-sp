

export const filterDocuments = ( documents, filter ) => {
    return documents.filter(( document ) => document.project === filter );
}
