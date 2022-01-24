import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome React</h1>
      <Button text={"Send"} />
    </div>
  );
}

export default App;
