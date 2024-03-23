import { profileAtom } from '../store/atoms/profileAtom.jsx'
import { useRecoilValue } from 'recoil'

export function Profile() {
  const profile = useRecoilValue(profileAtom);
  const Name = profile.name;
  const age = profile.age;
  const city = profile.city;
  const followers = profile.followers;
  const likes = profile.likes;
  const photos = profile.photos;
  const imgSrc = profile.imgSrc;

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    borderRadius: '50%', // Make the container round
    overflow: 'hidden'
  };

  const bodyStyle = {
    backgroundImage: "url('/background.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '0',
    height: '50vh'
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "25%",
    borderRadius: "50%"
  };

  const nameStyle = {
    fontWeight: '550',
    fontFamily: '"Arial", sans-serif',
    color: '#4e4e4e',
    fontSize: '4vh'
  }

  const ageStyle = {
    fontWeight: '500',
    fontFamily: '"Arial", sans-serif',
    color: "#a7a7a7",
    fontSize: '4vh'

  }

  const cityStyle = {
    fontWeight: '550',
    fontFamily: '"Arial", sans-serif',
    color: '#a7a7a7',
    marginTop: '0px',
    fontSize: '4vh'
  }

  const biocontainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
    marginBottom: '0px',
    marginTop: '10vh',
  }

  const namecontainerStyle = {
    display: 'flex',
    gap: '2vh',
  }

  const lineStyle = {
    border: 'none',
    height: '1px',
    backgroundColor: '#a7a7a7',
    margin: '0px 0',
  }

  const countcontainerStyle = {
    margin:'0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap:'40vh',
  }

  const numStyle={
    fontWeight: '550',
    fontFamily: '"Arial", sans-serif',
    color: '#4e4e4e',
    fontSize: '4.5vh'
  }

  const topStyle={
    margin:"0px",
    padding:"0px",
  }

  const biocontainerStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
    marginBottom: '0px',
  }

  return (
    <div>
      <div style={topStyle}>
      <div style={bodyStyle}>
        <div style={containerStyle}>
          <img src={imgSrc} alt="Profile Image" style={imageStyle} />
        </div>
      </div>
      <div style={biocontainerStyle}>
        <div style={namecontainerStyle}>
          <p style={nameStyle}>{Name} </p>
          <p style={ageStyle}>{age}</p>
        </div>
        <h4 style={cityStyle}>{city}</h4>
      </div>
      <hr style={lineStyle}></hr>
      </div>

      <div style={countcontainerStyle}>
        <div style={biocontainerStyle2}>      
            <p style={numStyle}>{followers}</p>
            <p style={cityStyle}>Followers</p>
        </div>
        <div style={biocontainerStyle2}>        
          <p style={numStyle}>{likes} </p>
          <p style={cityStyle}>Likes</p>
        </div>
        <div style={biocontainerStyle2}>        
          <p style={numStyle}>{photos}</p>
          <p style={cityStyle}>Photos</p>
        </div>
      </div>
    </div>
  )
}