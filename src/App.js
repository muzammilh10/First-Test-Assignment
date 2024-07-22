import './App.css';
import Button from './Component/Button';
import CheckboxGroup from './Component/FormCheckboxLabel';

function App() {
  return (
    <div class="container">
      <div class="centered-div">
        <CheckboxGroup  label="All Pages" />
        <div className="underline"></div>
        <CheckboxGroup label="Page 1"/>
        <CheckboxGroup label="Page 2"/>
        <CheckboxGroup label="Page 3"/>
        <CheckboxGroup label="Page 4"/>
        <div className="underline"></div>
        <Button >Done</Button>
      </div>

    </div>
  );
}

export default App;
