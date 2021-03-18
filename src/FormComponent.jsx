import CategoryMap from './CategoryMap';
import InstructionComponent from './InstructionComponent'

function FormComponent({
  handleDifficultyChange,
  handleCategoryChange,
  categoryList,
  handleGoSubmit,
}) {
  return (
    <div>
      <InstructionComponent />
      <form onSubmit={handleGoSubmit} className="dropDown">
        <label className="srOnly" htmlFor="difficulty">
          Select a Difficulty
        </label>
        <select
          defaultValue=""
          onChange={handleDifficultyChange}
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
          onChange={handleCategoryChange}
          defaultValue=""
          name="category"
          id="category"
          required
        >
          <option value="" default disabled>
            Category
          </option>
          <CategoryMap categoryList={categoryList} />
        </select>

        <button>Go!</button>
      </form>
    </div>
  );
}

export default FormComponent;
