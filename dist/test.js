function majorityElement(nums) {
    let len = nums.length;
    if (len === 1) {
        return nums[0];
    }
    let map = new Map;
    for (let i = 0; i < len; i++) {
        let n = nums[i];
        if (map.has(n)) {
            let get = map.get(n);
            map.set(n, get + 1);
            if (get + 1 >= Math.ceil(len / 2)) {
                return n;
            }
        }
        else {
            map.set(n, 1);
        }
    }
}
;
majorityElement([3, 2, 3]);
//# sourceMappingURL=test.js.map