import { letters } from "./data/letters";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Welcome to My CI/CD Project 🚀</h1>
      <p>Yeh table CI/CD pipeline se automatically update hogi.</p>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          {letters.map((letter, index) => (
            <tr key={letter}>
              <td>{index + 1}</td>
              <td>{letter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;