const findTheOldest = function (peoples) {
  const oldestPeople = peoples.sort((a, b) => {
    const lastPeople =
      (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
    const nextPeople =
      (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
    return lastPeople > nextPeople ? -1 : 1;
  });

  return oldestPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;

// ODIN SOLUTION
// const findTheOldest = function (array) {
//     return array.reduce((oldest, currentPerson) => {
//       const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//       const currentAge = getAge(
//         currentPerson.yearOfBirth,
//         currentPerson.yearOfDeath
//       );
//       return oldestAge < currentAge ? currentPerson : oldest;
//     });
//   };

//   const getAge = function (birth, death) {
//     if (!death) {
//       death = new Date().getFullYear();
//     }
//     return death - birth;
//   };
