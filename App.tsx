import React, { useCallback, useMemo } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

import CardTimeContext, { CardTime } from "./app/models/CardTime";

import colors from "./app/styles/colors";
import Main from "./app/screens/MainScreen";

const { useRealm, useQuery, RealmProvider } = CardTimeContext;

function App() {

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
