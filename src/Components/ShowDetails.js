import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import MovieTicketBooking from "./TicketBooking";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShowDetails();
  }, [id]);

  if (!show) {
    return <p className="text-center m-2">Loading...</p>;
  }

  return (
    <div className="container-fluid mt-5">
      <h1 className="title text-center m-5"> TV Show Details</h1>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
          <Card>
            <Card.Img
              variant="top"
              src={show.image ? show.image.original : "/images/placeholder.jpg"}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
          <Card>
            <Card.Body>
              <Card.Title className="title">{show.name}</Card.Title>
              <Card.Text>
                <strong>Language:</strong> {show.language}
                <br />
                <strong>Genres:</strong> {show.genres.join(", ")}
                <br />
                <strong>Runtime:</strong> {show.runtime} minutes
                <br />
                <strong>Premiered:</strong> {show.premiered}
                <br />
                <strong>Rating:</strong> {show.rating.average || "N/A"}
                <br />
                <strong>Official Site:</strong>{" "}
                <a
                  href={show.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {show.officialSite}
                </a>
              </Card.Text>
              <Card.Text dangerouslySetInnerHTML={{ __html: show.summary }} />
              {/* <Button onClick={handleBooking}>Book Ticket</Button> */}
              <MovieTicketBooking movieName={show.name} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ShowDetails;
