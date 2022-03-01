import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Card,
  CardGroup,
  CardText,
  CardTitle,
  Col,
  Row,
  Spinner,
} from "reactstrap";
const ViewByCategory = ({ categories }) => {
  const { Petrol, Rent, Shopping, SIP, ToMom, Recharge, Salary, Food } =
    categories;

  const theData = [
    {
      title: "Petrol",
      total: Petrol,
      icon: <FontAwesomeIcon icon={faGasPump} />,
    },
    {
      title: "Rent",
      total: Rent,
    },
    {
      title: "Shopping",
      total: Shopping,
    },
    {
      title: "SIP",
      total: SIP,
    },
    {
      title: "ToMom",
      total: ToMom,
    },
    {
      title: "Recharge",
      total: Recharge,
    },
    {
      title: "Salary",
      total: Salary,
    },
    {
      title: "Food",
      total: Food,
    },
  ];

  return (
    <>
      <CardGroup>
        {theData.map((item) => (
          <Col md={3} key={item.id}>
            <Card className="p-2 text-center m-1 ">
              <CardText className="m-0">
                <span className="fs-1 "> {item.total} </span>
              </CardText>
              <CardText>
                <span className="fs-4 ">{item.title}</span>
              </CardText>
            </Card>
          </Col>
        ))}
      </CardGroup>
    </>
  );
};

export default ViewByCategory;
