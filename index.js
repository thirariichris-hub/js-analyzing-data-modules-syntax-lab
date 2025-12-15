


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


// Step 6: Require datejs (outside the function)
require('datejs');

// Step 1: Create combineUsers function with rest argument
function combineUsers(...args) {
  // Step 2: Initialize the return object
  const combinedObject = {
    users: []
  };

  // Step 3: Loop through args (array of arrays)
  for (let userArray of args) {
    // Step 4: Merge arrays using spread operator
    combinedObject.users.push(...userArray);
  }

  // Step 5: Get today's date using datejs (M/d/yyyy format)
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

// Export the function
module.exports = {
  combineUsers
};
