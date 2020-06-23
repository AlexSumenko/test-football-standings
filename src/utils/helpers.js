import moment from 'moment';

export const calculateAgeInYears = dateOfBirth => {
  const currentDate = moment(Date.now());
  const birthDate = moment(dateOfBirth);
  return currentDate.diff(birthDate, 'years');
};
