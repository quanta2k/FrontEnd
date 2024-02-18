import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='mainDiv'>
        <div className='secDiv'>
          <img src='src\assets\images\image-omelette.jpeg'></img>
          <h1 className='mainHeading'>Simple Omelette Recipe</h1>
          <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          <div className='pinkDiv'>
            <h3 className='pinkHead'>Preparation Time</h3>
              <ul className='firstList'>
                <li>Total: Approximately 10 minutes</li>
                <li>Preparation: 5 minutes</li>
                <li>Cooking: 5 minutes</li>
              </ul>
          </div>
          <div>
            <h2 className='allHeads'>Ingredients</h2>
              <ul className='secondList'>
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
              </ul>
            <hr></hr>
          </div>
          <div>
            <h2 className='allHeads'>Instructions</h2>
            <ol>
              <li>Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                You can add a tablespoon of water or milk for a fluffier texture.</li>

              <li>Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.</li>

              <li>Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
              the eggs evenly coat the surface.</li>

              <li>Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the 
              middle, sprinkle your chosen fillings over one half of the omelette.</li>

              <li>Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the 
              fillings. Let it cook for another minute, then slide it onto a plate.</li>

              <li>Enjoy: Serve hot, with additional salt and pepper if needed.</li>
            </ol>
          </div>
          <div>
            <h2 className='allHeads'>Nutrition</h2>
            <p>The table below shows nutritional values per serving without the additional fillings.</p>
            <table>
              <tr>         
                <td>Calories</td>
                <td>277kcal</td> 
              </tr>
              <tr>         
                <td>Carbs</td>
                <td>0g</td> 
              </tr>
              <tr>         
                <td>Protien</td>
                <td>20g</td> 
              </tr>
              <tr>         
                <td>Fat</td>
                <td>22g</td> 
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>  
  )
}

export default App
