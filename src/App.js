import { MenuItem, FormControl, Select } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select varient="outlined" value="abc">
            <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
            <MenuItem value="worldwide">Option 4</MenuItem>
            <MenuItem value="worldwide">WorldWide</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/** HEADER */}
      {/** Title + Dropdown field */}
      {/** InfoBoxs */}
      {/** InfoBoxs */}
      {/** InfoBoxs */}

      {/** Table */}
      {/** Graph */}

      {/** Map */}
    </div>
  );
}

export default App;
