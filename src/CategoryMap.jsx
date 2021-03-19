function CategoryMap({ categoryList }) {
  return (
    <>
    {/* Map through categories and assigns values to each category */}
      {categoryList.map((category, index) => {
        const { id, name } = category;
        return (
          <option key={index} value={id}>
            {name}
          </option>
        );
      })}
    </>
  );
}

export default CategoryMap;
