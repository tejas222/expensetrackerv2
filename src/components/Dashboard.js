import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Row,
  Spinner,
} from "reactstrap";
import { useGetExpenseQuery } from "../redux/features/expense";
import ViewByCategory from "./ViewByCategory";

const Dashboard = () => {
  const { data, isLoading, isFetching } = useGetExpenseQuery();
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState({
    Petrol: "",
    Rent: "",
    Shopping: "",
    SIP: "",
    ToMom: "",
    Recharge: "",
    Salary: "",
    Food: "",
  });
  const [expenseData, setExpenseData] = useState({
    balance: "",
  });

  useEffect(() => {
    let credit,
      debit,
      balance = 0;
    if (!isFetching) {
      credit = data
        .filter((item) => item.type === "Credit")
        .map((item) => parseInt(item.amount))
        .reduce((prev, curr) => prev + curr, 0);

      debit = data
        .filter((item) => item.type === "Debit")
        .map((item) => parseInt(item.amount))
        .reduce((prev, curr) => prev + curr, 0);

      setExpenses(data);
      balance = credit - debit;
      setExpenseData({ credit, debit, balance });

      let petrol = data
        .filter((item) => item.category === "Petrol")
        .map((item) => parseInt(item.amount))
        .reduce((prev, curr) => prev + curr, 0);

      let shopping = data
        .filter((item) => item.category === "Shopping")
        .map((item) => parseInt(item.amount))
        .reduce((prev, curr) => prev + curr, 0);

      let food = data
        .filter((item) => item.category === "Food")
        .map((item) => parseInt(item.amount))
        .reduce((prev, curr) => prev + curr, 0);

      let rent = data
        .filter((item) => item.category === "Rent")
        .map((item) => parseInt(item.amount))
        .reduce((prev, curr) => prev + curr, 0);

      let sip = data
        .filter((item) => item.category === "SIP")
        .map((item) => parseInt(item.amount))
        .reduce((prev, curr) => prev + curr, 0);

      let mom = data
        .filter((item) => item.category === "To Mom")
        .map((item) => parseInt(item.amount))
        .reduce((prev, curr) => prev + curr, 0);

      let recharge = data
        .filter((item) => item.category === "Recharge")
        .map((item) => parseInt(item.amount))
        .reduce((prev, curr) => prev + curr, 0);

      let salary = data
        .filter((item) => item.category === "Salary")
        .map((item) => parseInt(item.amount))
        .reduce((prev, curr) => prev + curr, 0);

      setCategories({
        Petrol: petrol,
        Rent: rent,
        Shopping: shopping,
        SIP: sip,
        ToMom: mom,
        Recharge: recharge,
        Salary: salary,
        Food: food,
      });
    }
  }, [data]);
  const { balance } = expenseData;

  return (
    <>
      <header className="mb-3">
        <Row>
          {/* <Col className="d-flex justify-content-between bg-warning "> */}
          <Col
            lg={{ offset: 0, size: 6 }}
            className="p-2 bg-warning "
            sm={{
              offset: 1,
              size: "auto",
            }}
          >
            <h3 className="px-3">Expense Tracker Dashboard</h3>
          </Col>
          <Col
            lg={{ offset: 0, size: 6 }}
            className=" d-flex  p-2 justify-content-end bg-warning  "
            sm={{
              offset: 1,
              size: "auto",
            }}
          >
            <h3> Balance: {balance} Rs.</h3>
            <Link to="/" className="btn btn-dark mx-3">
              Add Expense
            </Link>
          </Col>
          {/* </Col> */}
        </Row>
      </header>

      <Row className="g-2">
        <Col md={4} className=" border-end border-secondary border-1">
          <Col className="p-3 transactionContainer">
            <h3 className="text-light mb-3">Transactions</h3>
            {isFetching ? (
              <Spinner>Loading...</Spinner>
            ) : (
              data.map((item) => (
                <>
                  <Col
                    key={item.id}
                    className={`bg-light p-2 rounded border-end  border-5 mb-3 ${
                      item.type === "Credit"
                        ? "border-success"
                        : "border-danger"
                    }`}
                  >
                    <Row>
                      <Col
                        className="d-flex justify-content-between "
                        key={item.id}
                      >
                        <span>
                          <h5>{item.title}</h5>
                        </span>
                        <span>
                          <h5> {item.amount} Rs. </h5>
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <span className="text-muted">{item.Trasdate}</span>
                    </Row>
                  </Col>
                </>
              ))
            )}
          </Col>
        </Col>
        <Col md={8}>
          <Col className="p-3 ">
            <h3 className="text-light mb-3">Top Categories</h3>
            <ViewByCategory categories={categories} />
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
