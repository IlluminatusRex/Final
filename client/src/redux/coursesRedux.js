import { API_URL } from '../config';
import axios from 'axios';

//SECTION selectors
export const getAllCourses = ({ courses }) => courses.courses;
export const getCourseById = ({ courses }, id) =>
courses.courses.filter((course) => course.id === id);

export const getRequest = ({ request }) => request;

//SECTION actions
const createActionName = (name) => `app/course/${name}`;

//SECTION action types

const LOAD_COURSES = createActionName('LOAD_COURSES');
const ADD_COURSE = createActionName('ADD_COURSES');
const EDIT_COURSE = createActionName('EDIT_COURSES');

// action creators

export const loadCourses = (payload) => ({ payload, type: LOAD_COURSES });
export const addCourse = (payload) => ({ payload, type: ADD_COURSE });
export const editCourse = (payload) => ({
  type: EDIT_COURSE,
  payload,
});

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COURSE:
      return { ...statePart, courses: [...statePart.courses, { ...action.payload }] };
    case EDIT_COURSE:
      return statePart.courses.map((course) =>
        course.id === action.payload.id ? { ...course, ...action.payload } : course,
      );
    case LOAD_COURSES:
      return { ...statePart, courses: [...action.payload] };

    default:
      return statePart;
  }
}