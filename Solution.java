
public class Solution {

    int[][] grid;
    int height;
    int width;

    public int orangesRotting(int[][] grid) {

        this.grid = grid;
        this.height = grid.length;
        this.width = grid[0].length;
        int daysToRottenAll = 0;
        boolean freshTurnedIntoRotten = true;
        int codeOfRottenInPreviousRound = 2;//to keep track of rotten in each step.

        while (freshTurnedIntoRotten) {

            freshTurnedIntoRotten = false;
            for (int r = 0; r < height; r++) {
                for (int c = 0; c < width; c++) {
                    if (grid[r][c] == 1 && freshIsNeighbourToRotten(r, c, codeOfRottenInPreviousRound)) {
                        grid[r][c] = codeOfRottenInPreviousRound + 1;
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
    }

    public boolean freshIsNeighbourToRotten(int r, int c, int codeOfRottenInPreviousRound) {
        return (r - 1 >= 0 && grid[r - 1][c] == codeOfRottenInPreviousRound)
                || (r + 1 < height && grid[r + 1][c] == codeOfRottenInPreviousRound)
                || (c - 1 >= 0 && grid[r][c - 1] == codeOfRottenInPreviousRound)
                || (c + 1 < width && grid[r][c + 1] == codeOfRottenInPreviousRound);
    }

    public boolean gridHasNoFreshOranges() {
        for (int r = 0; r < height; r++) {
            for (int c = 0; c < width; c++) {
                if (grid[r][c] == 1) {
                    return false;
                }
            }
        }
        return true;
    }
}
