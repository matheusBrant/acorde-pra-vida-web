import { Card, Row, Col } from "antd";

function RankingPage(props){
    return (
        <>
        <Row gutter={[16, 16]}>
            <Col span={8} offset={4}><Graphs/>
            
            </Col>
            <Col span={8} offset={4}><h1>teste</h1>
            
            </Col>

            <Col span={8} offset={4}><h1>teste</h1>
            
            </Col>
            <Col span={8} offset={4}><Graphs/>
            
            </Col>
        </Row>
        </>
    );
}

function Graphs(props){
    const [countView, setcountView] = useState([]);

    return(
        <h1>testando</h1>
    );
}

export default RankingPage;