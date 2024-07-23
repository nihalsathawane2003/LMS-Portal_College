import React from 'react';
import './courselist.css';

// Sample data extracted from the image with URLs added
const courses = [
    { id: 1, name: 'Computer Organization and Architecture', url: '/department/:name/computer-organization-and-architecture' },
    { id: 2, name: 'Programming and Data Structures', url: "/department/:name/programming-and-data-structures" },
    { id: 3, name: 'Algorithms', url: '/department/:name/algorithms' },
    { id: 4, name: 'Theory of Computation', url: '/department/:name/theory-of-computation' },
    { id: 5, name: 'Operating System', url: '/department/:name/operating-system' },
    { id: 6, name: 'Databases', url: '/department/:name/databases' },
    { id: 7, name: 'Computer Networks', url: '/department/:name/computer-networks' },
    { id: 8, name: 'Digital Logic and Design', url: '/department/:name/digital-logic-and-design' },
    { id: 9, name: 'Compiler Design', url: '/department/:name/compiler-design' },
];

const CourseList = () => {
    return (
        <div className="course-list-container">
            <h1>Course List</h1>
            <ul className="course-list">
                {courses.map(course => (
                    <li key={course.id}>
                        <a style={{textDecoration: 'none', color: 'inherit'}} href={course.url}>{course.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;