function cakes(recipe, available) {
  let result = null;

  for (let ingredient in recipe) {

    if (available[ingredient]) {
      const possibleCakesToBakeCount = Math.floor(available[ingredient] / recipe[ingredient] || 0);
      
      if (!result || possibleCakesToBakeCount < result) {
        result = possibleCakesToBakeCount;
      }
    } else {
      return 0;
    }
  }
  //console.log(result); //result must equal 2
  return result;
}

cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);