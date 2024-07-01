import PropTypes from 'prop-types';
import TaskItem from "./TaskItem";

const ItemsContainer = ({ taskList, removeFromList }) => {
  return (
    <div className='items-container'>
      {taskList.map((t, index) => (
        <TaskItem task={t} removeFromList={removeFromList} key={`task-item-${index}`} />
      ))}
    </div>
  );
};














ItemsContainer.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromList: PropTypes.func.isRequired,
};

ItemsContainer.defaultProps = {
  taskList: [],
};

export default ItemsContainer;
