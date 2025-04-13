/**
 * @param {number[][]} meetings
 * @return {number}
 */

/**
 * Less Optimized Method
 */

// function meetingRooms(meetings) {
//     if(meetings.length == 0) return 0;
//     meetings.sort((a,b) => a[0] - b[0]);
//     let result = [];
//     result.push(meetings[0][1]);
//     for(let i=1; i<meetings.length; i++){
//         if(meetings[i][0] >= result[0])
//             result.shift();
//         result.push(meetings[i][1]);
//         result.sort((a,b) => a-b);
//     }
//     return result.length;
   
// }


function meetingRooms(meetings) {
    let list = [], minRoom = 0, meetingInProgress = 0;
    for(let meeting of meetings){
        list.push({'timeStamp':meeting[0], 'roomChangeFreq': +1})
        list.push({'timeStamp':meeting[1], 'roomChangeFreq': -1})
    }
    list.sort((a,b) => a.timeStamp - b.timeStamp);
    for(let onGoingMeets of list){
        meetingInProgress +=onGoingMeets.roomChangeFreq;
        minRoom = Math.max(minRoom,meetingInProgress)
    }
    return minRoom;
}





let n = 3;
let meetings = [[0, 20],[5, 10],[10, 15]];   
console.log(meetingRooms(meetings));
