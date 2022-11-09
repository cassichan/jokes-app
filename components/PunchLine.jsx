import { useState, useEffect } from "react";
import { Text, TouchableOpacity} from "react-native";
import styles from "../styles";

export default function PunchLine({ punchLine }) {
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    setReveal(false)
  }, [punchLine])
  return (
    <TouchableOpacity onPress={() => setReveal(!reveal)} style={reveal ? styles.show : styles.hidden}>
      <Text style={styles.punchLine}>{punchLine}</Text>
    </TouchableOpacity>
  );
}
