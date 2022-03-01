import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

const ViewExpenses = ({ data, isFetching, expenseData }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (!isFetching) {
      data = data.map((item) => item).sort((a, b) => b.id - a.id);
      setExpenses(data);
    }
  }, [data, isFetching]);

  const { credit, debit, balance } = expenseData;
  return (
    <>
      <Row>
        <Col className="p-2 d-flex justify-content-between mt-4">
          <h4 className="text-success heading">Credit: {credit} Rs.</h4>
        </Col>
        <Col className="p-2 text-end mt-4">
          <h4 className="text-danger heading">Debit: {debit} Rs.</h4>
        </Col>
      </Row>

      <Row>
        <Col className="text-white d-flex justify-content-between mt-3 flex-row ">
          <Col md="8">
            <h3> Balance: {balance} Rs.</h3>
          </Col>
          <Col md="4" className="text-end ">
            <Link to="/dashboard" className="btn btn-success">
              View All
            </Link>
          </Col>
        </Col>
      </Row>
      <Col className="mt-4">
        <h2 className="text-light text-center mb-0">Transactions</h2>
        <Col className="expenseContainer">
          {expenses
            .map((item) => (
              <Row key={item.id}>
                <Col className="mt-3">
                  <Col
                    className={`d-flex justify-content-between bg-light p-2 rounded border-end border-5 ${
                      item.type === "Credit"
                        ? "border-success"
                        : "border-danger "
                    }`}
                  >
                    <span>
                      <h5>{item.title}</h5>
                    </span>
                    <span>
                      <h5>{item.amount} </h5>
                    </span>
                  </Col>
                </Col>
              </Row>
            ))
            .slice(0, 5)}
        </Col>
      </Col>
    </>
  );
};

export default ViewExpenses;
