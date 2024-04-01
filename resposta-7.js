const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Sabrina Moreira',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gisele Tessari',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Tamara Simões',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };
function getValueByPosition(obj, position) {
    const keys = Object.keys(obj);
    if (position < keys.length) {
      const key = keys[position];
      return obj[key];
    } else {
      return undefined;
    }
}

function getTotalStudents(obj) {
  let total = 0;
  obj.lessons.forEach(lesson => {
    if (lesson.students) {
      total += lesson.students;
    }
  });
  return total;
}

function getTotalStudents(obj) {
    let total = 0;
    obj.lessons.forEach(lesson => {
      if (lesson.students) {
        total += lesson.students;
      }
    });
    return total;
}

function keyExistsInAllLessons(obj, keyName) {
    return obj.lessons.every(lesson => lesson.hasOwnProperty(keyName));
}

function changeShift(obj, courseName, newShift) {
    obj.lessons.forEach(lesson => {
      if (lesson.course === courseName) {
        lesson.shift = newShift;
      }
    });
}