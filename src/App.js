import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';


// 1. 왼쪽에는 연락처 등록하는 폼, 
// 2. 오른쪽에는 연락처 리스트, search창(이름 검색 가능)
// 3. create 버튼으로 리스트에 유저 이름과 전화번호 추가
// 4. 리스트에 아이템 갯수 나타내기
function App() {
  return (
    <div>
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm/>
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
