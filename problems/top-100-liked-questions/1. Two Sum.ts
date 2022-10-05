function twoSum(nums: number[], target: number): number[] {
  const ob = {};
  nums.forEach((num, index) => {
    ob[num] = index;
  });

  for (let i = 0; i < nums.length - 1; i += 1) {
    const num = nums[i];
    const j = target - num;
    if (ob[j] && ob[j] !== i) return [i, ob[j]];
  }

  return [];
}
