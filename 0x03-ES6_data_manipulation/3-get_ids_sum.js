const getStudentIdsSum = (students) => {
  if (students instanceof Array) {
    return students.reduce(
      (acc, value) => acc + value.id,
      0,
    );
  }
  return 0;
}

export default getStudentIdsSum;
