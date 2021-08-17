
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import DisplayData from "./DisplayData";

const api = "https://data.covid19india.org/v4/min/data.min.json";
const StateSelect = () => {
  const [selectAll, SetSelectAll] = useState(true);
  const [selectIndi, SetSelectIndi] = useState(true);
let abc;
  const stateNames=["AN","AP","AR","AS","BR","CH","CT","DL","DN","GA","GJ","HP","HR","JH",
                    "JK","KA","KL","LA","LD","MH","ML","MN","MP","MZ","NL","OR","PB","PY","RJ","SK",
                    "TG","TN","TR","TT","UN","UP","UT","WB"];
 const selectedStateNames=[];

  const apiHandler = async (api) => {
     abc = await fetch(api).then((res) => res.json());

    console.log(abc);
  };
  const btnHandlerAll = () => {
   
    SetSelectAll(!selectAll);
    SetSelectIndi(!selectAll);
    apiHandler(api);
    
  };
  console.log(selectAll);

const stateNameHandler=()=>{

        // if(selectAll=== true){
        //     SetSelectIndi(true)
        // }
        // else{
        //     SetSelectIndi(false)
        // }
}

  return (
    <div className="stateSelect">
      <Container>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Select All"
            id="selectAll"
            onChange={btnHandlerAll}
            checked={selectAll}
          />
          <div>
          {stateNames.map((item,key) =>{
             return <div>
                        <Form.Check
                            type="checkbox"
                            label={item}
                            id={key}
                            onChange={stateNameHandler}
                            checked={selectIndi}
                            />
                        </div>
          })}
          </div>
        </Form.Group>
      </Container>
      <Container>
          <DisplayData all={selectAll? stateNames: selectedStateNames} data={abc}/>
      </Container>
    </div>
  );
};
export default StateSelect;
