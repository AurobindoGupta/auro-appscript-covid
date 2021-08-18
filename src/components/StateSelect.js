
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import DisplayData from "./DisplayData";
import PanelInfodata from "./PanelInfoData";

const stateNames= [ {name:"AN", isChecked: true} , {name: "AP", isChecked: true } ,  {name:"AR", isChecked: true } , {name:"AS", isChecked: true } , {name:"BR", isChecked: true } , {name:"CH", isChecked: true } , 
  {name:"CT", isChecked: true } , {name:"DL", isChecked: true } , {name:"DN", isChecked: true } , {name:"GA", isChecked: true } , {name:"GJ", isChecked: true } , {name:"HP", isChecked: true } , {name:"HR", isChecked: true } , {name:"JH", isChecked: true } ,
  {name:"JK", isChecked: true } , {name:"KA", isChecked: true } , {name:"KL", isChecked: true } , {name:"LA", isChecked: true } , {name:"LD", isChecked: true } , {name:"MH", isChecked: true } , {name:"ML", isChecked: true } , {name:"MN", isChecked: true } , 
  {name:"MP", isChecked: true } , {name:"MZ", isChecked: true } , {name:"NL", isChecked: true } , {name:"OR", isChecked: true } , {name:"PB", isChecked: true } , {name:"PY", isChecked: true } , {name:"RJ", isChecked: true } , {name:"SK", isChecked: true },
  {name:"TG", isChecked: true } , {name:"TN", isChecked: true } , {name:"TR", isChecked: true } , {name:"TT", isChecked: true } , {name:"UN", isChecked: true } , {name:"UP", isChecked: true } , {name:"UT", isChecked: true } , {name:"WB", isChecked: true },];

  const api = "https://data.covid19india.org/v4/min/data.min.json";
const StateSelect = () => {
  const [selectAll, SetSelectAll] = useState(true);
  // const [selectIndi, SetSelectIndi] = useState([]);
  const [selectState, SetSelectState] = useState([])
let abc;
  let selectIndi = [];
 
 
 const [confirmedCases, SetConfirmedCases]= useState([]);
//default allselect checkboxes
 useEffect(() => {
   SetSelectState(stateNames);
   dataCleaning();
 }, [])
//get data from api
 const apiHandler = async (api) => {
  return await fetch(api).then((res) => res.json());
 
};
  
//sorting through data separating confirmed cases total, also tried to separate selected states wwas unsuccesful
  const dataCleaning=async ()=>{
    abc = await apiHandler(api)
    
    
      if(selectState.filter((stname)=> stname?.isChecked !== true).length < 1){
        Object.keys(abc).map((item,id)=>{
          let x = item;
         
         let newarr = [abc[item].total.confirmed];
            
               SetConfirmedCases(arr=>[...arr, newarr ]);
             
         })
      }
      //tried to separate selected individual states data
      else{
        selectState.map((stname)=>{
          if(stname.isChecked === true ){
           selectIndi.push(stname);
          }
          else{
            selectIndi.pop(stname);
          }
        })
        
      }
  }
  

 
//checkbox handler
const checkHandler=(e)=>{
   const { name, checked} = e.target;

  if(name === "selectAll"){
      let tempState = selectState.map((stname)=>{
        return {...stname, isChecked:checked };
      });
      SetSelectState(tempState);
  }
   else{
    let tempState = selectState.map((stname)=>{
      return stname.name === name ? { ...stname, isChecked: checked} : stname
     }
       
     );
     
     SetSelectState(tempState);
   }
   
};

  return (
    <div className="stateSelect">
    <Row>
    <Col xs='2' className="border border-dark">
            <Container>
                <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    name="selectAll"
                    label="SelectAll"
                    id="selectAll"
                    onChange={checkHandler}
                   checked= {selectState.filter((stname)=> stname?.isChecked !== true).length < 1}
                    
                    
                />
                <div>
                {selectState.map((item,key) =>{
                    return <div>
                                <Form.Check
                                    type="checkbox"
                                    name={item.name}
                                    label={item.name}
                                    id={key}
                                    onChange={checkHandler}
                                    checked={item?.isChecked || false}
                                    />
                                </div>
                })}
                </div>
                </Form.Group>
            </Container>
        </Col>
        <Col  xs='10'>
        <Row>
                <PanelInfodata num="selected state data"/>
        </Row>
        <Row>
          <Container className="border border-dark">
              <DisplayData data={confirmedCases}/>
          </Container>
        </Row>
        
        </Col>
      </Row>
    </div>
  );
};
export default StateSelect;
