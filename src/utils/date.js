import moment from 'moment';

const formatDate = (date) => {
  if (date && moment(new Date(date)).isValid()) {
    return moment(date).format('MM/DD/YYYY');
  } else {
    return '?';
  }
};

const formatYearDate = (date) => {
  if (date && moment(new Date(date)).isValid()) {
    return moment(new Date(date)).format('YYYY');
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
