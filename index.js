var recipes = {
  prop: 1
};
function destructivelyUpdateObjectWithKeyAndValue(recipes, prop, value) {
  recipes.prop2 = 2;
  return recipes;
}
updateObjectWithKeyAndValue(recipes);
console.log(recipes);
