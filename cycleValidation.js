//storage
let collectedGraphComponent = [];
let graphComponentMatrix = [];
// for(let i=0;i<rows;i++) {
//     let row = [];
//     for(let j=0;j<cols;j++) {
//         // more than 1 child therefore, array
//         row.push([]);
//     }
//     graphComponentMatrix.push(row);
// }

function isGraphCyclic(graphComponentMatrix) {
    // dependency -> visited, dfsvisited 2D arr
    let visited = [];
    let dfsVisited = [];

    for(let i=0;i<rows;i++)
    {
        let visitedRow = [];
        let dfsVisitedRow = [];
        for(let j=0;j<cols;j++)
        {
            visitedRow.push(false);
            dfsVisitedRow.push(false);
        }
        visited.push(visitedRow);
        dfsVisited.push(dfsVisitedRow);
    }

    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<cols;j++)
        {
            if(visited[i][j] === false) {
                let response = dfsCycleDetection(graphComponentMatrix,i,j,visited,dfsVisited);
                if(response===true) return [i, j];
            }
            
        }
    }
    return null;
}

// strt -> vis=T and dfsVis=T
//end -> dfsVis=F
// if(vis===T) return
// condn -> if(vis===T && dfsVis===T) ===> cycle
function dfsCycleDetection(graphComponentMatrix,srcr,srcc,visited,dfsVisited) {
    visited[srcr][srcc] = true;
    dfsVisited[srcr][srcc] = true;

    for(let children=0;children<graphComponentMatrix[srcr][srcc].length;children++)
    {
        let [nbrr,nbrc] = graphComponentMatrix[srcr][srcc][children];
        if(visited[nbrr][nbrc] === false) {
            let response = dfsCycleDetection(graphComponentMatrix,nbrr,nbrc,visited,dfsVisited);
            if(response===true) return true;
        }
        else if(visited[nbrr][nbrc]===true && dfsVisited[nbrr][nbrc]===true) {
            return true;
        }
    }
    dfsVisited[srcr][srcc] = false;
    return false;
}