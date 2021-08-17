import { Container, Navbar } from "react-bootstrap";
import StateSelect from "./components/StateSelect";



function App() {
  return (
    <div className="App">
     <Navbar className="bg-secondary justify-content-center">
       <h3>Covid-19 Daily Report</h3>
     </Navbar>
     <Container fluid className="border border-dark d-flex justify-content-end">
       <input type="date" ></input>
     </Container>
     <Container >
      <StateSelect/>
     </Container>
    </div>
  );
}

export default App;
