var containsDuplicate = function (nums) {
  const newArr = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (newArr.has(nums[i])) return true;
    else newArr.set(nums[i], true);
  }
  return false;
};
