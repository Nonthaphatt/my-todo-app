import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormModal({ nameBtn, view, onSubmitTask, task}) {
  const [validated, setValidated] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (task && view === 'edit') {
      setTaskName(task.taskName);
      setDescription(task.description);
      setStartDate(new Date(task.dueDate));
    }
  }, [task, view]);

  const handleSubmit = (event) => {
    setValidated(true);
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } 

    if(taskName !== '' && description !== ''){
      setValidated(false);
      onSubmitTask({
        id:task?.id || 0,
        taskName,
        description,
        dueDate: startDate,
        status: task?.status || 'incomplete',
      });
      setTaskName('');
      setDescription('');
      setShow(false);
    }
    
  };

  return (
    <>
      <Button variant={view === 'add' ? 'primary' : 'success'} onClick={() => setShow(true)}>
        <h5 hidden={view === 'edit'}>{nameBtn}</h5>
        <img width={'30px'} hidden={view === 'add'} src="https://www.svgrepo.com/show/347266/pencil.svg" alt="" />
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title className="me-auto">{view === 'add' ? 'Add Task' : 'Edit Task'}</Modal.Title>
          <Button variant="danger" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="taskName">
              <Form.Label>Task *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description *</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Due Date *</Form.Label><br />
              <DatePicker
                className="text-center bg-white text-black border p-2 rounded w-100"
                minDate={new Date()}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                required
              />
            </Form.Group>

            <Button type="submit" className="w-100" variant={view === 'add' ? 'primary' : 'success'} onClick={handleSubmit}>
              {view === 'add' ? 'Add Task' : 'Update Task'}
            </Button>
            
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormModal;
