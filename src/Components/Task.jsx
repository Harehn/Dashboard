import { useEffect, useState } from 'react'

export default function Task() {
  const [tasks, setTasks] = useState(['Read Email', 'House chores', 'Exercise', 'Journal']);

  useEffect(() => {
    //Runs only on the first render
    function setup() {
        setTasks(['Choose Weather API to use', 
          'Implement rate limiting with CORS proxy',
          'Fix project routing',
          'Documentation and attributions'])
    };
    setup();
  }, []);

  function listFromArray(){
  try{
    // let tasks = ['Read Email', 'House chores', 'Exercise', 'Journal'];
    let tasks2 = [];
    for (const [index, element] of tasks.entries()) {
      console.log(index, element);
      var key1 = 
      tasks2.push({index, element});
    }
    console.log(tasks2);
    let listTasks = tasks2.map(task =><div> <input type="checkbox" id={task['index']} name={task['index']} value=""/> 
                            <label htmlFor={task['index']}>{task['element']}</label> <br/></div>);
    console.log(listTasks);
    return (<div id='tasks'>{listTasks}</div>);
  }catch {
    console.log("Error in Tasks");
  }
}
function getChecked(){
  let checkedList = []
  for (let i = 0; i < tasks.length; i++){
    let cbox = document.getElementById(i);
    console.log(i, cbox.checked);
    if (!cbox.checked) checkedList.push(i);
  }
  // console.log(checkedList);
  // console.log(tasks.filter(task => checkedList.includes(tasks.indexOf(task))));
  setTasks(tasks.filter(task => checkedList.includes(tasks.indexOf(task))));
}
function addTask(){
  let itask = document.getElementById("enter");
  let val = itask.value;
  if (val == "") return 
  itask.value = "";
  let ntasks = [...tasks];
  ntasks.push(val);
  setTasks(ntasks);
}
  return (
    <div id='taskcontainer'>
      {listFromArray()}
      <div id="empty"></div>
      <div className='buttons'>
        <button className='clear' onClick={getChecked}>Clear checked tasks</button>
      </div>
      <div id='adder'>
        <input type="text" id='enter' placeholder="Eg. Buy Groceries"/>
        <button id="add" onClick={addTask}>Add New</button>
      </div>
    </div>
    );
}
