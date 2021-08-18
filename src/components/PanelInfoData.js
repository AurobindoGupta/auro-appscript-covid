import { ControlPointDuplicateOutlined } from "@material-ui/icons";
import { Col, Row, Form } from "react-bootstrap"

const PanelInfodata = (props) =>{
    let c= props.num
    console.log(c.length);
    return(
        <div>
        <Row>
            <Col>
            <input type="text" value={c} ></input>
            </Col>
            <Col>
            <input type="text"></input>
            </Col>
            <Col>
            <input type="text"></input>
            </Col>
             <Col>
             <input type="text"></input>
            </Col>
            </Row>
        </div>
    )
}
export default PanelInfodata;