"use strict";
{
    const arr1 = [1, 2, 3, 4];
    const arr2 = [5, 6, 7, 8];
    console.log(arr1);
    console.log(arr2);
    arr1.push(...arr2);
    console.log(arr1);
}
