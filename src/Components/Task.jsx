export default function Task() {
  function listFromArray(){
  try{
    let tasks = ['Read Email', 'House chores', 'Exercise', 'Journal'];
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
  return (
    <div id='taskcontainer'>
      {listFromArray()}
      <div id="empty"></div>
      <div className='buttons'>
        <button className='clear'>Clear checked tasks</button>
      </div>
      <div id='adder'>
        <input type="text" id='enter' placeholder="Eg. Buy Groceries"/>
        <button id="add">Add New</button>
      </div>
    </div>

    );
}
