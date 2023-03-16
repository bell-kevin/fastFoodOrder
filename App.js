import React, { useReducer } from "react";
import { Text, Button, StatusBar, StyleSheet, View } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function ItemCounter({ title, count, dispatch }) {
  return (
    <View style={styles.itemPlusMinus}>
      <Text style={styles.textNumber}>{title}: {count}</Text>
      <Button
        title="+"
        onPress={() => dispatch({ type: "increment" })}
        color="green"
        style={styles.button}
      />
      <Button
        title="-"
        onPress={() => dispatch({ type: "decrement" })}
        color="red"
        style={styles.button}
        disabled={count === 0}
      />
    </View>
  );
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, {
    hamburgerCount: 0,
    cheeseburgerCount: 0,
    friesCount: 0,
    drinksCount: 0,
  });

  const total = state.hamburgerCount * 3 +
    state.cheeseburgerCount * 4 +
    state.friesCount * 2 +
    state.drinksCount;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.textTitle}>Fast Food Order</Text>
      <Text style={styles.textMenu}>Hamburger $3</Text>
      <Text style={styles.textMenu}>Cheeseburger $4</Text>
      <Text style={styles.textMenu}>Fries $2</Text>
      <Text style={styles.textMenu}>Drink $1</Text>
      <ItemCounter title="Hamburger" count={state.hamburgerCount} dispatch={dispatch} />
      <ItemCounter title="Cheeseburger" count={state.cheeseburgerCount} dispatch={dispatch} />
      <ItemCounter title="Fries" count={state.friesCount} dispatch={dispatch} />
      <ItemCounter title="Drink" count={state.drinksCount} dispatch={dispatch} />
      <View style={styles.total}>
        <Text style={styles.textTitle}>Total: ${total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tan",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  textMenu: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  textNumber: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  itemPlusMinus: { 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center' 
  },
  total: {
    backgroundColor: 'tan',
    paddingVertical: 10,
    alignItems: 'center',
    fontWeight: "bold",
    textAlign: "center",
  }
});

export default Reducer;