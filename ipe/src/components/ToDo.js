import { useState } from 'react';

function ToDo() {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);

    function handleAdd() {
        if (task.trim()) {
            setList([...list, { text: task, completed: false }]);
            setTask('');
        }
    }

    function toggleComplete(index) {
        const updatedList = [...list];
        updatedList[index].completed = !updatedList[index].completed;
        setList(updatedList);
    }

    function handleDelete(index) {
        const updatedList = list.filter((_, i) => i !== index);
        setList(updatedList);
    }

    return (
        <>
            <h1>TO DO list</h1>
            <input
                type='text'
                name='task'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAdd}>Add Task</button>

            <h3>Task list:</h3>
            {
                list.map((item, index) => (
                    <div key={index} style={{ margin: 10 }}>
                        <span style={{
                            textDecoration: item.completed ? 'line-through' : 'none'
                        }}>
                            {item.text}
                        </span>
                        <button onClick={() => toggleComplete(index)}>
                            {item.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => handleDelete(index)}>
                            Delete
                        </button>
                    </div>
                ))
            }
        </>
    );
}

export default ToDo;
