import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [joke, setjoke] = useState("loading");
  const [fname, setFname] = useState("john");
  const [lname, setLname] = useState("doe");


  const nextJoke = () => {
    const result = fetch(`http://api.icndb.com/jokes/random?firstName=${fname}&lastName=${lname}`)
      .then(res => res.json())
      .then(res2 => {
        //console.log(res2)
        setjoke(res2.value.joke)
      })

  }

  // useEffect( ()=>{
  //   nextJoke();

  // },[]) call only once durng the reload---my

  useEffect(() => {
    nextJoke();

  }, [fname, lname])
  // now whenever fname and lname is update useEffect will call nextJoke()


  return (
    <>
      <h1>Jokes API</h1>

      <div className="base_container">
        <div className="fname">
          <span>First Name:</span><input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
        </div>

        <div className="lname">
          <span>Last Name:</span><input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
        </div>

        <div className="joke_container">
          <h4>{joke}</h4>
        </div>

        <button type='button' onClick={nextJoke}>Next</button>
      </div>
     
    </>
  );
}

export default App;
