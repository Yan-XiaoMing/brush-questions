#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;


int maxAreaOfIsland(vector<vector<int>>& grid) {
    if (grid.empty() || grid[0].empty()) {
        return 0;
    }
	int res = 0;
	for (int r = 0; r < grid.size(); r++) {
		for (int c = 0; c < grid[0].size(); c++) {
			if (grid[r][c] == 1) {
				int a = area(grid, r, c);
				res = max(res, a);
			}
		}
	}
	return res;
}

int area(vector<vector<int>>& grid, int r, int c) {
    if (!(0 <= r && r < grid.size()
        && 0 <= c && c < grid[0].size())) {
        return 0;
    }
    if (grid[r][c] != 1) {
        return 0;
    }
    grid[r][c] = 2;
    return 1
        + area(grid, r - 1, c)
        + area(grid, r + 1, c)
        + area(grid, r, c - 1)
        + area(grid, r, c + 1);
}