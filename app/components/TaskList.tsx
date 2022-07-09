import { View, FlatList, StyleSheet } from 'react-native';
import { Realm } from '@realm/react';

import { CardTime } from '../models/CardTime';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Realm.Results<CardTime> | [];
  onToggleTaskStatus: (task: CardTime) => void;
  onDeleteTask: (task: CardTime) => void;
}

function TaskList({tasks, onToggleTaskStatus, onDeleteTask}: TaskListProps) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        keyExtractor={task => task._id.toString()}
        renderItem={({item}) => (
          <TaskItem
            description={item.description}
            isComplete={item.isComplete}
            onToggleStatus={() => onToggleTaskStatus(item)}
            onDelete={() => onDeleteTask(item)}
            // Don't spread the Realm item as such: {...item}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default TaskList;
