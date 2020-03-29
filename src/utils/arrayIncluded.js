import arrayEqual from "./arrayEqual";

export default function arrayIncluded(arr1, arr2) {
    return arr1.filter(item => arrayEqual(item, arr2)).length > 0;
}