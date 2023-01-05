var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (target === nums[i] + nums[j]) {
          return [i, j];
        }
      }
    }
  };

  console.log (twoSum([1,3,4,8], 8));

  var twoSum = function (nums, target) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
      let a = nums[i];
  
      if (arr[target - a] >= 0) {
        console.log(arr[target - a]);
        return [arr[target - a], i];
      } else {
        arr[a] = i;
      }
    }
  };