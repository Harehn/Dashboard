export default function Task() {
  try{
  people = ['Alice', 'Bob', 'Charlie'];
  const listItems = people.map(person => <li>{person}</li>);
  }catch {

  }
  return (
    <div id='taskcontainer'>
      <div id='tasks'>
        {/* {listItems} */}
        <input type="checkbox" id="task1" name="task1" value=""/>
        <label htmlFor="task1">Read emails</label> <br/>
        <input type="checkbox" id="task2" name="task2" value=""/>
        <label htmlFor="task2">House chores</label> <br/>
        <input type="checkbox" id="task3" name="task3" value=""/>
        <label htmlFor="task3"> Exercise</label> <br/>
        <input type="checkbox" id="task4" name="task4" value=""/>
        <label htmlFor="task4">Journal</label> <br/>
      </div>
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
