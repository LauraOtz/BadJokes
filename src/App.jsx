import React, {useState} from 'react';
import './App.css'
import axios from 'axios';

const Joke = () => {
   const [joke, setJokes] = useState([]);


   const apiLink = "https://icanhazdadjoke.com/";

   const fetchData = async () => {
       const res = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
             setJokes([res.data.joke]);
   }
   return (
       
        <div className="container">
          <div className="row">
            <div className="col">
           <h1>Bad Jokes 🕶</h1>




                   {joke.map((j, index) => (
                     <div className="data mt-3" key={index}>
                         {j}
                        </div>
                    ))}

                    <button className='btn mt-3' onClick={fetchData}>Laugh again</button>


            </div>
          </div>
        </div>

            

       
   )
}
// return (
//  <div>
//     <h1>Jokes:</h1>
// </div>
// );

export default Joke

