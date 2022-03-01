import React, { useEffect, useState } from "react";

import { Col, Container, Row } from "reactstrap";
import { useGetExpenseQuery } from "../redux/features/expense";
import AddExpense from "./AddExpense";
import ViewExpenses from "./ViewExpenses";

const Home = () => {
  const { data, isLoading, isFetching } = useGetExpenseQuery();
  const [expenseData, setExpenseData] = useState({
    credit: "",
    debit: "",
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

      balance = credit - debit;
      setExpenseData({ credit, debit, balance });
    }
  }, [data]);

  return (
    <div>
      <Container fluid className="py-3 ">
        <h2 className="text-center text-light">Expense Tracker</h2>
        <Row>
          <Col className="mt-3">
            <Col lg={3} className="m-auto  ">
              <AddExpense />
              <ViewExpenses
                data={data}
                isFetching={isFetching}
                expenseData={expenseData}
              />
              ;
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
