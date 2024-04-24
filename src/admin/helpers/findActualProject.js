

export const findActualProject = ( projects, id ) => {
    return projects.find(( project ) => project.id === id);
}
