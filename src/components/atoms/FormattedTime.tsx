import React from 'react';

const FormattedTime = ({ dateString }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return (
    <time
      style={{ marginLeft: '4px', color: 'rgb(83, 100, 113)' }}
      dateTime={dateString}
    >
      {formatDate(dateString)}
    </time>
  );
};

export default FormattedTime;
