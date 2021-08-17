
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
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
 const [confirmedCases, SetConfirmedCases]= useState([]);

 const apiHandler = async (api) => {
  return await fetch(api).then((res) => res.json());
 
};
  const btnHandlerAll = () => {
   
    SetSelectAll(!selectAll);
    SetSelectIndi(!selectAll);
    dataCleaning();
      
  };
  const dataCleaning=async ()=>{
    abc = await apiHandler(api)
    // JSON.stringify(abc)
     Object.keys(abc).map((item,id)=>{
       let x = item;
      //  console.log(x)
      // return console.log(abc[item].total.confirmed);
      let newarr = [abc[item].total.confirmed];
          
            SetConfirmedCases(arr=>[...arr, newarr ]);
          
      })
  }
  
  console.log(selectAll);
 
//  console.log(apiHandler(api));
 
const stateNameHandler=()=>{

        // if(selectAll=== true){
        //     SetSelectIndi(true)
        // }
        // else{
        //     SetSelectIndi(false)
        // }
}
console.log(confirmedCases);
  return (
    <div className="stateSelect">
    <Row>
    <Col xs='2' className="border border-dark">
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
        <Col  xs='10'>
        <Container className="border border-dark">
            <DisplayData allNames={selectAll? stateNames: selectedStateNames} data={abc}/>
        </Container>
        </Col>
      </Row>
    </div>
  );
};
export default StateSelect;
