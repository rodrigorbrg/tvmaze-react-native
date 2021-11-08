import moment from 'moment';

const formatDate = (date) => {
  if (date) {
    return moment(date).format('MM/DD/YYYY');
  } else {
    return '?';
  }
};

const formatYearDate = (date) => {
  if (date) {
    return moment(date).format('YYYY');
  } else {
    return '?';
  }
};

const formatPeriodDate = (started, ended) => {
  return `${formatYearDate(started)} - ${formatYearDate(ended)}`;
};

export {
  formatDate,
  formatYearDate,
  formatPeriodDate,
}
