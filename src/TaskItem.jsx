import PropTypes from 'prop-types';

const TaskItem = ({ task, removeFromList }) => {
  return (
    <div className="task-item">
      <p>{task}</p>
      <button onClick={() => removeFromList(task)}>Apagar</button>
    </div>
  );
};


















TaskItem.propTypes = {
  task: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  removeFromList: PropTypes.func.isRequired,
};

export default TaskItem;







// const TaskItem = ({task, remremoveFromList}) => {
//     return <div className= "task-item">
//         <p>{task}</p>
//         <button onClick={() => remremoveFromList(task)}> Apagar </button>
//     </div>
// }

// export default TaskItem;