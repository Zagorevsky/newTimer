import React, { useCallback, useMemo } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

import TaskContext, { CardTime } from "./app/models/CardTime";
import IntroText from "./app/components/IntroText";
import AddTaskForm from "./app/components/AddTaskForm";
import TaskList from "./app/components/TaskList";
import colors from "./app/styles/colors";
import Main from "./app/screens/MainScreen";

const { useRealm, useQuery, RealmProvider } = TaskContext;

function App() {
  const realm = useRealm();
  const result = useQuery(CardTime);

  const handleAddTask = useCallback(
    (description: string): void => {
      if (!description) {
        return;
      }
      realm.write(() => {
        realm.create("Task", CardTime.generate(description));
      });
    },
    [realm]
  );

  const handleToggleTaskStatus = useCallback(
    (task: CardTime): void => {
      realm.write(() => {
        task.isComplete = !task.isComplete;
      });
    },
    [realm]
  );

  const handleDeleteTask = useCallback(
    (task: CardTime): void => {
      realm.write(() => {
        realm.delete(task);
      });
    },
    [realm]
  );

  return (
    <Main />
    // <SafeAreaView style={styles.screen}>
    //   <View style={styles.content}>
    //     <AddTaskForm onSubmit={handleAddTask} />
    //     {tasks.length === 0 ? (
    //       <IntroText />
    //     ) : (
    //       <TaskList
    //         tasks={tasks}
    //         onToggleTaskStatus={handleToggleTaskStatus}
    //         onDeleteTask={handleDeleteTask}
    //       />
    //     )}
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

function AppWrapper() {
  if (!RealmProvider) {
    return null;
  }
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
}

export default AppWrapper;
