import CategoryMap from './CategoryMap';

function Dropdown({
  difficulty, 
  onDifficultyChange, 
  type, 
  onTypeChange, 
  categoryList, 
  onCategoryChange, 
  setShowQuestions
}) {

  return (
    <div>
      <form action=" " className="dropDown">
        <label className="srOnly" htmlFor="difficulty">
          Select a Difficulty
        </label>
        <select
          value={difficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
          // defaultValue=""
          name="difficulty"
          id="difficulty"
          required
        >
          <option value="" disabled>
            Difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <label className="srOnly" htmlFor="category">
          Select a Category
        </label>
        <select
        // value={categoryList}
          onChange={(e) => {
            onCategoryChange(e.target.value);}}
          defaultValue=""
          name="category"
          id="category"
          required
        >
          <option defaultValue="" default disabled>
            Select a Category
          </option>
          <CategoryMap categoryList={categoryList} />
        </select>

        <label className="srOnly" htmlFor="">
          Select a Quiz Type
        </label>
        <select
        value={type}
          onChange={(e) => {onTypeChange(e.target.value);}}
          // defaultValue=""
          name="category"
          id="type"
          required
        >
          <option value="" disabled>
            Quiz Type
          </option>
          <option value="boolean">True / False</option>
          <option value="multiple">Multiple Choice</option>
        </select>
        <button type='submit' onClick={
          (e)=>{
            e.preventDefault();
            setShowQuestions(true);
          }
          }>Go!</button>
      </form>
    </div>
  );
}

export default Dropdown;
