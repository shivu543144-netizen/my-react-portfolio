import React ,{ useState } from 'react';
function ProfileCard(props) {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{
      border: '2px solid #646cff',
      borderRadius: '10px',
      padding: '20px',
      margin: '10px auto',
      maxWidth: '300px',
      backgroundColor: '@1a1a1a',
      color: 'white',
      fontFamily: 'Arial'
    }}>
      <h2>{props.name}</h2>
      <p>Favorite Language: <strong>{props.language}</strong></p>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)} style={{ cursor: 'pointer'}}>Like Profile</button>
    </div>
  );
}

function App() {
  return (
    <div style={{ textAlign: 'center',padding: '20px'}}>
      <h1>My React Team Showcase </h1>
      <ProfileCard name="SHIVU S" language="JavaScript" />
      <ProfileCard name="Mohit P" language="Python" />
    </div>
  );
}
export default App;