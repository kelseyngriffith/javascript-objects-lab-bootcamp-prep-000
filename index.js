var recipes = {
  prop: 1
};
function destructivelyUpdateObjectWithKeyAndValue(recipes, prop, value) {
  recipes.prop2 = 2;
  return recipes;
}
function deleteFromObjectByKey(recipes, prop) {
  delete recipes.prop;
}
