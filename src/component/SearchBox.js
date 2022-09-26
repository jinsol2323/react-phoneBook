import React from 'react'
import { Button, Col, Row, Form } from 'react-bootstrap'
import { useDispatch , useSelector } from 'react-redux';
import { useState } from 'react';

const SearchBox = () => {

    let [keyword, setKeyword] = useState("");
    let dispatch = useDispatch();
    let { contact } = useSelector((state) => state);

    const searchByName = (event) => {
        event.preventDefault();
        dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
    };

  return (
    <Form onSubmit={searchByName}>
        <Row>
            <Col lg={10}>
                <Form.Control 
                type="text" 
                placeholder="이름을 입력해주세요" 
                onChange={(event) => setKeyword(event.target.value)}
                />
            </Col>
            <Col lg={2}>
                <Button type="submit">찾기</Button>
            </Col>
        </Row>
    </Form>
  )
}

export default SearchBox