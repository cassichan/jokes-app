import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Joke from "./components/Joke";
import PunchLine from "./components/PunchLine";
import Another from "./components/Another";
import styles from "./styles";

export default function App() {
  const [jokeList, setJokeList] = useState();
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const getNextJoke = () => {
    if (currentJokeIndex < jokeList.length - 1) {
      setCurrentJokeIndex(currentJokeIndex + 1);
    } else {
      setCurrentJokeIndex(0);
    }
  };
  useEffect(() => {
    fetch("https://api.sampleapis.com/jokes/goodJokes")
      .then((result) => result.json())
      .then(setJokeList)
      .catch(alert);
  }, []);
  return (
    <View style={styles.container}>
      {jokeList && jokeList.length ? (
        <>
          <Joke joke={jokeList[currentJokeIndex].setup} />
          <PunchLine punchLine={jokeList[currentJokeIndex].punchline} />
        </>
      ) : null}
      <Another getNextJoke={getNextJoke} />
      <StatusBar style="auto" />
    </View>
  );
}
