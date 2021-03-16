function CategoryMap({ categoryList }) {
  return (
    <>
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
