import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormModal from './modal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function App() {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addTask = (newTask) => {
    const id = new Date();
    newTask.id = id;
    setTasks([...tasks, newTask]);
    console.log(id)
    
  };


  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    )));
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = updatedTasks[index].status === 'complete'
      ? 'incomplete'
      : 'complete';
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
      handleClose();
  };

  return (
    <div className="align-items-center vh-100 vw-100 mt-5 pt-5">
      <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
        <div className="border w-50 p-5 rounded shadow">
          <h1>To-Do List</h1>
          <div className="d-flex">
            <div className="me-auto">
              <h5>My tasks</h5>
              <h6>You have {tasks.filter(t => t.status === 'incomplete').length} tasks left!</h6>
            </div>
            <FormModal nameBtn="Add Task" view="add" onSubmitTask={addTask} />
          </div>

          <ul className="mt-3 list-group">
            {tasks
            .sort((a, b) => {
              if (a.status === 'incomplete' && b.status === 'complete') return -1;
              if (a.status === 'complete' && b.status === 'incomplete') return 1;
              return new Date(a.dueDate) - new Date(b.dueDate);  
            }).map((task, index) => (
              <li key={index} className="list-group-item mb-2">
                <div className='d-flex'>

                  <div className="form-check">
                    <input type="checkbox" className='form-check-input'
                    checked={task.status === 'complete'}
                    onChange={() => toggleTaskStatus(index)}
                     />
                  </div>

                  <div className='me-auto'>
                    <h5 className={task.status === 'complete' ? 'text-decoration-line-through' : ''}>{task.taskName} </h5> 
                    <h6>{task.description} </h6>
                    <small className="text-muted">Due: {new Date(task.dueDate).toLocaleDateString()}</small>
                  </div>

                  <div className="mt-2">
                    <FormModal
                        nameBtn="Edit Task"
                        view="edit"
                        onSubmitTask={updateTask}
                        task={task}
                        id={index}
                      />
                  </div>

                  <div className="mt-2 ms-1">
                    <Button variant="danger" onClick={handleShow}>
                      <img width={'30px'} src="https://www.v0.app/api/image/ion-trash-icon.png?id=eyJmbiI6ImdldEljb25IZXJvSW1hZ2UiLCJhcmdzIjp7Imljb25TZXRTbHVnIjoiaW9uIiwiaWNvblNsdWciOiJ0cmFzaCJ9fQ" alt="" />
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Do you want to delete item.</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" className='border' onClick={handleClose}>
                          No
                        </Button>
                        <Button variant="danger" onClick={() => handleDelete(task.id)}>
                          Yes
                        </Button>
                      </Modal.Footer>
                    </Modal>

                  </div>
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;