import React from 'react'
import { Card, Row, Col } from "antd";
import { Bar } from 'react-chartjs-2';
import "./Ranking.css";
import { FaStar } from "react-icons/fa";

function RankingPage(){
    return (
        <div>
            <Row className="title" gutter={[16, 16]}>
                <Col span={18} offset={3}>
                    <Card
                        className="card"
                        title="Ranking de Avaliações e Acessos"
                    > 
                    <input className="tam-input" type="text" placeholder="Busque um artista ou música"></input>
                    </Card>  
                </Col> 
            </Row>
            <Row gutter={[16, 16]}>
                <Col className="adjust" span={9} offset={3}>
                    <Card
                        className="card"
                        title="Por avaliação"
                    >
                        <Row><Col flex="10px"/><h3>1. Batom de Cereja</h3><Col  flex="auto"/> <Star/></Row>
                        <Row><Col flex="10px" /><h3>2. Tempo Perdido</h3><Col flex="auto" /> <Star/></Row>
                        <Row><Col flex="10px" /><h3>3. Borboletas</h3><Col flex="auto" /> <Star/></Row>
                        <Row><Col flex="10px"/><h3>4. Meu Abrigo</h3><Col  flex="auto" /> <Star/></Row>
                        <Row><Col flex="10px" /><h3>5. Boate Azul</h3><Col flex="auto" /> <Star/></Row>
                        <Row><Col flex="10px" /><h3>6. Sozinho</h3><Col flex="auto" /> <Star/></Row>
                        <Row><Col flex="10px"/><h3>7. Eu sei</h3><Col  flex="auto" /> <Star2/></Row>
                        <Row><Col flex="10px" /><h3>8. More Than Words</h3><Col flex="auto" /> <Star2/></Row>
                        <Row><Col flex="10px" /><h3>9. Será</h3><Col flex="auto" /> <Star2/></Row>
                        <Row><Col flex="10px"/><h3>10. Dormi Na Praça</h3><Col  flex="auto" /> <Star2/></Row>
                        <Row><Col flex="10px" /><h3>11. Eu Te Devoro</h3><Col flex="auto" /> <Star2/></Row>
                        <Row><Col flex="10px" /><h3>12. Vida Boa</h3><Col flex="auto" /> <Star3/></Row>
                        <Row><Col flex="10px"/><h3>13. Gostava Tanto De Você</h3><Col  flex="auto" /> <Star3/></Row>
                        <Row><Col flex="10px" /><h3>14. Por Enquanto</h3><Col flex="auto" /> <Star3/></Row>
                        <Row><Col flex="10px" /><h3>15. Otherside</h3><Col flex="auto"/> <Star3/></Row>
                    </Card>  
                </Col>      
                <Col span={9}>
                    <Card
                        className="card"
                        title="Por acesso"
                    >
                        <Col offset={1} /><Graphs/>
                        <Col offset={1}/><Graphs/>
                        <Col offset={1}/><Graphs/>
                    </Card>  
                </Col>      
            </Row>
        </div>        
    )
}

function* Gen(i){
    yield i + 10;
}

const Star = () =>{
    return (
        <div>
            {[...Array(10)].map((star) => {
                return ( 
                    <FaStar                       
                        color="rgba(229, 230, 25, 1)"
                        size={25}
                    />
                )            
            })}         
        </div>
    )
}

const Star2 = () =>{
    return (
        <div>
            {[...Array(9)].map((star) => {
                return ( 
                    <FaStar
                        color="rgba(229, 230, 25, 1)"
                        size={25}
                    />
                )            
            })}         
        </div>
    )
}
const Star3 = () =>{
    return (
        <div>
            {[...Array(8)].map((star) => {
                return ( 
                    <FaStar
                        color="rgba(229, 230, 25, 1)"
                        size={25}
                    />
                )            
            })}         
        </div>
    )
}


const Graphs = () => {
    return (
        <div>
            <Bar 
                data={{
                    labels:['Red','Blue','Yellow','Green',
                    'Purple','Orange'],
                    datasets:[
                        {
                            label: '# de acessos',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor:[
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]                
                }}
                height={200}
                width={300}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />
        </div>
    )
}
export default RankingPage;