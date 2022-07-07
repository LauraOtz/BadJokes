import React, {useState} from 'react';
import App from 'App.css'

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
           <h1>Bad Jokes⚡</h1>




                   {joke.map((j, index) => (
                     <div className="data" key={index}>
                         {j}
                        </div>
                    ))}

                    <button className='btn' onClick={fetchData}>Load jokes</button>


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

