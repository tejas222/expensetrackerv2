import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Form, FormGroup, Input, Spinner } from "reactstrap";
import { useAddExpenseMutation } from "../redux/features/expense";

const AddExpense = () => {
  const [addExpense, { isLoading, isSuccess }] = useAddExpenseMutation();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const newdate = new Date();
  const year = newdate.getFullYear();
  const month = newdate.getMonth() + 1;
  const date = newdate.getDate();
  const Trasdate = date + "-" + month + "-" + year;
  const Transmonth = months[newdate.getMonth()];
  const [data, setData] = useState({
    title: "",
    amount: "",
    type: "",
    category: "",
  });

  const handleChange = (e) => {
    setData({ ...data, Trasdate, Transmonth, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExpense(data);

    setData({
      title: "",
      amount: "",
      type: "",
      category: "",
    });
    // history.push("/");
  };

  useEffect(() => {
    if (isLoading) {
      <Spinner>Loading....</Spinner>;
    }
    if (isSuccess) {
      console.log("data added");
    }
  }, [isLoading, isSuccess]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            placeholder="Enter Title"
            value={data.title}
            onChange={handleChange}
            name="title"
            required
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="number"
            placeholder="Enter Amount"
            value={data.amount}
            onChange={handleChange}
            name="amount"
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="select"
            value={data.type}
            onChange={handleChange}
            name="type"
          >
            <option>Select</option>
            <option>Credit</option>
            <option>Debit</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="select"
            value={data.category}
            onChange={handleChange}
            name="category"
          >
            <option>Select Category</option>
            <option>Food</option>
            <option>Petrol</option>
            <option>Rent</option>
            <option>Shopping</option>
            <option>SIP</option>
            <option>To Mom</option>
            <option>Recharge</option>
            <option>Salary</option>
          </Input>
        </FormGroup>
        <Input type="submit" value="Add Expense" className="btn btn-success" />
      </Form>
    </>
  );
};

export default AddExpense;
