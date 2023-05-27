import './App.css';
import {Button, Stack} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Test start</p>
        <Stack direction="row" spacing={2}>
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;
