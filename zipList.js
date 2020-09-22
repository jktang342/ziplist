function zipList(list1, list2) {
  let finished = [];
  for (let i = 0; i < list1.length; i++) {
    finished.push(list1[i], list2[i]);
  }
  return finished;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2)); //Assistance from E27 demonstration video
}

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];
console.log(zipList(testList1, testList2));
console.log(zipListTheSimpleWay(testList1, testList2));

//Attempt 1: 20:32
//Attempt 2: 20:20
//Attempt 3: 20:04
//Attempt 4: 19:47
//Attempt 5: 19:32
//Attempt 6: 19:21

