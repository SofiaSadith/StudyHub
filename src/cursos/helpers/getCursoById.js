import courses from '../data/courses.json';

export const getCursoById = (id) => {
    return courses.data.find(curso => curso.id === id)
}