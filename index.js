var recipes = {
  prop: 1
};
function updateObjectWithKeyAndValue(recipes, prop, value) {

}
function destructivelyUpdateObjectWithKeyAndValue(recipes, prop, value) {
  recipes.prop2 = 2;
  return recipes;
}
function deleteFromObjectByKey(recipes, prop) {
  
}
function destructivelyDeleteFromObjectByKey(recipes, prop) {
  delete recipes.prop;
  return recipes;
}
