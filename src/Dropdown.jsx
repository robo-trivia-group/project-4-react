import CategoryMap from './CategoryMap';

function Dropdown({
  difficulty,
  onDifficultyChange,
  type,
  onTypeChange,
  categoryList,
  onCategoryChange,
  setShowQuestions,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowQuestions(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action=" " className="dropDown">
        <label className="srOnly" htmlFor="difficulty">
          Select a Difficulty
        </label>
        <select
          value={difficulty}
          onChange={(e) => {
            onDifficultyChange(e.target.value);
            setShowQuestions(false);
          }}
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
          onChange={(e) => {
            onCategoryChange(e.target.value);
            setShowQuestions(false);
          }}
          defaultValue=""
          name="category"
          id="category"
          required
        >
          <option value="" default disabled>
            Select a Category
          </option>
          <CategoryMap categoryList={categoryList} />
        </select>

        <label className="srOnly" htmlFor="">
          Select a Quiz Type
        </label>
        <select
          value={type}
          onChange={(e) => {
            onTypeChange(e.target.value);
            setShowQuestions(false);
          }}
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

        <button>Go!</button>
      </form>
    </div>
  );
}

export default Dropdown;
