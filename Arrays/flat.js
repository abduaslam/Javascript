//    To flatten an array containing nested arrays into a single-level
//  array in JavaScript 
    
    
    const deeplyNestedArray = [1, [2, [3, 4]], 5];
    const partiallyFlattened = deeplyNestedArray.flat(2); // [1, 2, 3, 4, 5]