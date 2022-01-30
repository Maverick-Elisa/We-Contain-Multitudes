function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: 'franklin gothic book', color: '#00635c' }}>
        {"We Contain Multitudes"}
      </h1>
      <h2
        style={{
          fontFamily: 'franklin gothic book',
          color: '#00635c' }}
      >
       {"I'm very glad you decided to embark on a journey to further explore oneself"}
      </h2>
      <button
        style={{
          fontFamily: 'standard-block',
          padding: '1rem',
          fontSize: '2rem',
          background: '#00635c',
          color: 'white',
          width: '100%'
        }}
        onClick={() => alert('They say I is the hardest word to define')}
      >
        First off, Hello there
      </button>
      <button
        style={{
          fontFamily: 'standard-block',
          padding: '1rem',
          fontSize: '2rem',
          background: '#00635c',
          color: 'white',
          marginTop: '2rem',
          width: '100%'
        }}
        onClick={() => {
          let name = prompt("How would you define yourself?");
          if (name) {
            alert('Thank you for sharing, + name + 😆 You are on your way.');
          } else {
            alert('All the best for you 😄');
          }
        }}
      >
        {"What's your name?"}
      </button>
      <h2
        style={{
          fontFamily: 'franklin gothic book',
          color: '#00635c' }}
      >
        {"This is all I've got so far 😅 I'll come back with an update"}
      </h2>
    </div>
  );
}

export default HomePage;