import './App.css';

function App() {
   const currentDate = new Date();

   return (
     <div> 
           <h1> Hello World ..!</h1>
           <h2> the current time {currentDate.toLocaleTimeString()}</h2>
    </div>

  );
}

export default App;
