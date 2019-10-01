const constructProfileLabels = user => {
  return Object.entries(user).reduce((accumulator, detail) => {
    let [label, value] = detail;
    if (label === 'firstName') label = 'first name';
    if (label === 'lastName') label = 'last name';
    if (label === 'otherName') label = 'other name';
    if (label === '_id') return accumulator;
    accumulator.push({ label, value });
    return accumulator;
  }, []);
};

export default constructProfileLabels;
