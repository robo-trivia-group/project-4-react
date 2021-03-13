import CategoryMap from './CategoryMap';

function Dropdown({onDifficultyChange, onCategoryChange, categoryList, onTypeChange}) {
  return (
    <div>
      <form action=" " className="dropDown">
        <label className="srOnly" htmlFor="difficulty">
          Select a Difficulty
        </label>
        <select
          onChange={(e) => onDifficultyChange(e.target.value)}
          defaultValue=""
          name="difficulty"
          id="difficulty"
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
          onChange={(e) => onCategoryChange(e.target.value)}
          defaultValue=""
          name="category"
          id="category"
        >
          <option value="" disabled>
            Select a Category
          </option>
          <CategoryMap categoryList={categoryList} />
        </select>

        <label className="srOnly" htmlFor="">
          Select a Quiz Type
        </label>
        <select
          onChange={(e) => onTypeChange(e.target.value)}
          defaultValue=""
          name="category"
          id="type"
        >
          <option value="" disabled>
            Quiz Type
          </option>
          <option value="boolean">True / False</option>
          <option value="multiple">Multiple Choice</option>
        </select>
      </form>
    </div>
  );
}

export default Dropdown;
