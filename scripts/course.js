const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and web development.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students learn functions, debugging, and testing.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Introduction to classes and objects.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students create dynamic websites with JavaScript.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focus on accessibility, performance, and APIs.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const courseContainer = document.querySelector('#courses');
const totalCredits = document.querySelector('#totalCredits');

function displayCourses(courseList) {

    courseContainer.innerHTML = '';

    courseList.forEach(course => {

        const courseCard = document.createElement('div');

        courseCard.classList.add('course-card');

        if (course.completed) {
            courseCard.classList.add('completed');
        } else {
            courseCard.classList.add('not-completed');
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>${course.credits} Credits</p>
        `;

        courseContainer.appendChild(courseCard);
    });

    const credits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    totalCredits.textContent = credits;
}

document.querySelector('#all').addEventListener('click', () => {
    displayCourses(courses);
});

document.querySelector('#wdd').addEventListener('click', () => {

    const wddCourses = courses.filter(
        course => course.subject === 'WDD'
    );

    displayCourses(wddCourses);
});

document.querySelector('#cse').addEventListener('click', () => {

    const cseCourses = courses.filter(
        course => course.subject === 'CSE'
    );

    displayCourses(cseCourses);
});

displayCourses(courses);