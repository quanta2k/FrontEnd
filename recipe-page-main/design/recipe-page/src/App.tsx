import './App.css'

function App() {

  return (
    <>
      <div className='mainDiv'>
        <div className='secDiv'>
          <img src='src\assets\images\image-omelette.jpeg'></img>
          <h1 className='mainHeading'>Simple Omelette Recipe</h1>
          <p className='para'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          <div className='pinkDiv'>
            <h3 className='pinkHead'>Preparation Time</h3>
              <ul className='firstList'>
                <li><span className='heading1'>Total</span>: Approximately 10 minutes</li>
                <li><span className='heading1'>Preparation</span>: 5 minutes</li>
                <li><span className='heading1'>Cooking</span>: 5 minutes</li>
              </ul>
          </div>
          <div>
            <h2 className='allHeads'>Ingredients</h2>
              <ul className='secondList'>
                <li style={{'paddingLeft':'10px'}}>2-3 large eggs</li>
                <li style={{'paddingLeft':'10px'}}>Salt, to taste</li>
                <li style={{'paddingLeft':'10px'}}>Pepper, to taste</li>
                <li style={{'paddingLeft':'10px'}}>1 tablespoon of butter or oil</li>
                <li style={{'paddingLeft':'10px'}}>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
              </ul>
            <hr></hr>
          </div>
          <div>
            <h2 className='allHeads'>Instructions</h2>
            <ol >
              <li className='instList'><span className='heading1'>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                You can add a tablespoon of water or milk for a fluffier texture.</li>

              <li className='instList'><span className='heading1'>Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</li>

              <li className='instList'><span className='heading1'>Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
              the eggs evenly coat the surface.</li>

              <li className='instList'><span className='heading1'>Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the 
              middle, sprinkle your chosen fillings over one half of the omelette.</li>

              <li className='instList'><span className='heading1'>Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the 
              fillings. Let it cook for another minute, then slide it onto a plate.</li>

              <li className='instList'><span className='heading1'>Enjoy</span>: Serve hot, with additional salt and pepper if needed.</li>
            </ol>
          </div>
          <div>
            <h2 className='allHeads'>Nutrition</h2>
            <p>The table below shows nutritional values per serving without the additional fillings.</p>
            <table>
              <tr className='mainRow' >         
                <td className='rows'>Calories</td>
                <td className='row2'>277kcal</td> 

              </tr >
              <tr className='mainRow'>         
                <td className='rows'>Carbs</td>
                <td className='row2'>0g</td> 
              </tr>
              <tr className='mainRow'>         
                <td className='rows'>Protien</td>
                <td className='row2'>20g</td> 
              </tr>
              <tr>         
                <td className='rowFat'>Fat</td>
                <td className='row2'>22g</td> 
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>  
  )
}

export default App
