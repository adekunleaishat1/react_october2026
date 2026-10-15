import hero from "./assets/hero.png"

function App(){
  return (
    <div>
        <h1 className="h1">hello this is my first react class</h1>
        <p>{Math.random()}</p>
        <p style={{color:"blue",fontSize:"50px",fontWeight:"bold"}}>Inline styling</p>
        <button className="btn btn-dark">Click</button>
        <input className="form-control w-50 py-3" type="text" name="" id="" />
        <img src={hero} alt="" />
    </div>
  )
}

export default App