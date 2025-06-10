import { Container, Row, Col } from "react-bootstrap";
import Item from "../Components/Item"

const items = [
    {
        id: 1, name: "Pen", description: "It's a pen", price: "RM 10"
    },
    {
        id: 2,
        name: "Laptop",
        description: "I think it's a laptop",
        price: "RM1200",

    },
    { id: 3, name: "iPhone2", description: "Might be iPhone3", price: "RM 30" },

];

export default function Home() {
    return (
        <>
            <Container>
                <Row>
                    {items.map((item) => (
                        <Col key={item.id} md={3}>
                            <Item item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}