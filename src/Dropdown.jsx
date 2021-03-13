import Category from './Category';

function Dropdown(props) {
  return (
    <div>
      <form action=" " className="difficulty">
        <label className="srOnly" htmlFor="">
          Difficulty
        </label>
        <select onChange={props.onChange} name="difficulty" id="difficulty">
          <option value="" disabled>
            Difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <label className="srOnly" htmlFor="">
          Category
        </label>
        <select onChange={props.onChange} name="category" id="category">
          <option value="" disabled>
            Category
          </option>
          <Category categoryName={props.data}/>
        </select>
      </form>
    </div>
  );
}

export default Dropdown;
