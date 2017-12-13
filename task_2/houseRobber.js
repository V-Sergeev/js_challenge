function houseRobber(nums) {
    t=nums.sort(function(a, b){return a-b});
    return t.pop()+t.pop();
    }
    