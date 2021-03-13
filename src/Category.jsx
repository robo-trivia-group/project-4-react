function Category({ categoryName }) {
  return (
    <>
      {categoryName.map((name, index) => {
        const { category } = name;

        return (
          <option key={index} value={category}>
            {category}
          </option>
        );
      })}
    </>
  );
}

export default Category;
