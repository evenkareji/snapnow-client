const LineWithText = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: '16px',
        marginBottom: '10px',
      }}
    >
      <div
        style={{
          marginRight: '10px',
          flex: 1,
          height: '1px',
          backgroundColor: 'grey',
        }}
      />
      <span
        style={{
          background: 'white',
          color: 'grey',
          fontSize: '1rem',
          padding: '0 10px',
        }}
      >
        または
      </span>
      <div
        style={{
          marginLeft: '10px',
          flex: 1,
          height: '1px',
          backgroundColor: 'grey',
        }}
      />
    </div>
  );
};

export default LineWithText;
