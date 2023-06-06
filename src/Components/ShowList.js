import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Button, Row, Col } from "react-bootstrap";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-center">TV Shows </h1>
      <Row className="p-5 m-3">
        {shows.map((show) => (
          <Col key={show.show.id} sm={12} md={6} lg={4} xl={3}>
            <Card className="show-card m-3" style={{ width: "18rem" }}>
              <Card.Img
                className="p-2"
                variant="top"
                src={
                  show.show.image
                    ? show.show.image.original
                    : "/images/placeholder.jpg"
                }
                style={{ width: "285px", height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="title">
                  Title: {show.show.name}
                </Card.Title>
                <Card.Text>
                  <strong>Language:</strong> {show.show.language}
                  <br />
                  <strong>Genre:</strong> {show.show.genres.join(", ")}
                  <br />
                  <strong>Premiered:</strong> {show.show.premiered}
                </Card.Text>
                <Link to={`/show/${show.show.id}`}>
                  <Button variant="primary">View Summary</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ShowList;
