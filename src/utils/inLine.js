import arrayIncluded from "./arrayIncluded"

export default function inLine(arr1, arr2, puzzle) {
    let maxrow = Math.max(...puzzle.map((item, index) => index))
    let maxcol = Math.max(...puzzle[0].map((item, index) => index))
    
    if ( arr1.length === 0) return true
    else if (arr1.length === 1) {
        let possibilities = []
        for (let i = 1; i <= maxrow && i <= maxcol; i ++) {
            if (arr1[0][0]-i >= 0 && arr1[0][1]-i >=0) possibilities.push([arr1[0][0] - i, arr1[0][1] -i])
            if (arr1[0][0] + i <= maxrow && arr1[0][1]-i >=0) possibilities.push([arr1[0][0] + i, arr1[0][1] -i])
            if (arr1[0][0] -i >= 0 && arr1[0][1]+i <= maxcol) possibilities.push([arr1[0][0] - i, arr1[0][1] +i])
            if (arr1[0][0] + i <= maxrow && arr1[0][1]+i <= maxcol) possibilities.push([arr1[0][0] + i, arr1[0][1] +i])
        }
        if (arr1[0][0] === arr2[0]) return true
        else if (arr1[0][1] === arr2[1]) return true
        else if (arrayIncluded(possibilities, arr2)) return true
        return false
    }

    else if (arr1.length > 1) {
        let firstpoint = arr1[0]
        let secondpoint = arr1[1]
        // if they're on the same row
        if (firstpoint[0] === secondpoint[0] && firstpoint[0] === arr2[0]) return true
        // if they're on the same column
        if (firstpoint[1] === secondpoint[1] && firstpoint[1] === arr2[1]) return true
        //  if they're diagona down-right
        if (firstpoint[0] + arr2[0] === firstpoint[1] + arr2[1]) return true
        // if they're diagonal up-right
        if (Math.abs(firstpoint[0] - arr2[0]) === Math.abs(firstpoint[1] - arr2[1])) return true
        return false
    }

}