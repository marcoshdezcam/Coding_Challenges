function jumpingOnClouds(c) {
    let path = [];
    c.forEach((item, index) => {
        if (item == 0) {
            path.push(index);
            if (path.length >= 3) {
                if (path[path.length - 3] + 1 == path[path.length - 2] &&
                    path[path.length - 2] == path[path.length - 1] - 1) {
                    path.splice(path.length - 2, 1);
                }
            }
        }
    });
    let jumps = path.length - 1;
    return jumps;
}
//console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));
//# sourceMappingURL=jumpingOnTheClouds.js.map