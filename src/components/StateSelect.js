
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import DisplayData from "./DisplayData";


const StateSelect = () => {
  const [selectAll, SetSelectAll] = useState(true);
  const [selectIndi, SetSelectIndi] = useState(true);
let abc;
  const stateNames=["AN","AP","AR","AS","BR","CH","CT","DL","DN","GA","GJ","HP","HR","JH",
                    "JK","KA","KL","LA","LD","MH","ML","MN","MP","MZ","NL","OR","PB","PY","RJ","SK",
                    "TG","TN","TR","TT","UN","UP","UT","WB"];
 const selectedStateNames=[];

  
  const btnHandlerAll = () => {
   
    SetSelectAll(!selectAll);
    SetSelectIndi(!selectAll);

    
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
    <Row>
    <Col lg='2' className="border border-dark">
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
        </Col>
        <Col >
        <Container className="border border-dark">
            <DisplayData allNames={selectAll? stateNames: selectedStateNames} data={abc}/>
        </Container>
        </Col>
      </Row>
    </div>
  );
};
export default StateSelect;
