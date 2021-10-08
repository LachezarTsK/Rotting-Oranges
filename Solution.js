
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {

    this.grid = grid;
    this.height = grid.length;
    this.width = grid[0].length;
    var daysToRottenAll = 0;
    var freshTurnedIntoRotten = true;
    var codeOfRottenInPreviousRound = 2;//to keep track of rotten in each step.

    while (freshTurnedIntoRotten) {

        freshTurnedIntoRotten = false;
        for (let r = 0; r < this.height; r++) {
            for (let c = 0; c < this.width; c++) {
                if (this.grid[r][c] === 1 && freshIsNeighbourToRotten(r, c, codeOfRottenInPreviousRound)) {
                    this.grid[r][c] = codeOfRottenInPreviousRound + 1;
                    freshTurnedIntoRotten = true;
                }
            }
        }

        if (freshTurnedIntoRotten) {
            codeOfRottenInPreviousRound++;
            daysToRottenAll++;
        }
    }
    return gridHasNoFreshOranges() ? daysToRottenAll : -1;
};

/**
 * @param {number} r
 * @param {number} c
 * @param {number} codeOfRottenInPreviousRound
 * @return {boolean}
 */
function freshIsNeighbourToRotten(r, c, codeOfRottenInPreviousRound) {
    return (r - 1 >= 0 && this.grid[r - 1][c] === codeOfRottenInPreviousRound)
            || (r + 1 < this.height && this.grid[r + 1][c] === codeOfRottenInPreviousRound)
            || (c - 1 >= 0 && this.grid[r][c - 1] === codeOfRottenInPreviousRound)
            || (c + 1 < this.width && this.grid[r][c + 1] === codeOfRottenInPreviousRound);
}

/**
 * @return {boolean}
 */
function gridHasNoFreshOranges() {
    for (let r = 0; r < this.height; r++) {
        for (let c = 0; c < this.width; c++) {
            if (this.grid[r][c] === 1) {
                return false;
            }
        }
    }
    return true;
}
