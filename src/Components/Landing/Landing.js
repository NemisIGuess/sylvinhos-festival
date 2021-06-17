import './Landing.css';

function Landing() {
  const clickHandler = () => {
    alert('Hola caraculo');
  };

  return (
    <div>
      <button onClick={clickHandler} className="sign-up-btn">
        Sign up!
      </button>
      {/* There should be a logo, a button to sign up for the festival and the poster with the events of the festival. Include a link to socials */}
    </div>
  );
}

export default Landing;
