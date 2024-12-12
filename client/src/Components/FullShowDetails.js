import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

export default function FullShowDetails() {
  const [details, setDetail] = useState([]);
  const location = useLocation();
  const showid = location.state.showid;
  const [modal, setModal] = useState(false);
  const [noTicket, setNoTicket] = useState(0);

  const handleClick = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios
      .patch(
        "http://localhost:8080/api/shows/bookTicket",
        {
          showid: details.showid,
          noTicket: noTicket,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response);
      });
    setModal(false);
  };

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/shows/showAllEvents/${showid}`
        );
        console.log("API response:", response?.data.data);
        setDetail(response?.data.data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };
    getEvent();
  }, []);

  return (
    <>
      {details && (
        <>
          <Modal show={modal} onHide={() => setModal(false)}>
            <Modal.Header closeButton>
              <h1 className="text-xl font-bold">
                Book Tickets for {details.showname}
              </h1>
            </Modal.Header>
            <Modal.Body>
              <div className="flex justify-center items-center space-x-4">
                <Button
                  onClick={() => {
                    if (noTicket > 2) setNoTicket(noTicket - 1);
                  }}
                >
                  -
                </Button>
                <input
                  type="number"
                  value={noTicket}
                  className="w-16 text-center border border-gray-400 rounded-md"
                />
                <Button
                  onClick={() => {
                    if (noTicket <= details.ticketrem)
                      setNoTicket(noTicket + 1);
                  }}
                >
                  +
                </Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={handleClick}
                className="bg-yellow-500 text-white hover:bg-yellow-600"
              >
                Book Ticket
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src={details.posterurl}
              alt="Picture"
              width="600"
              height="300"
            />
            <p className="text-2xl font-bold mb-4">{details.showname}</p>
            <p className="text-lg mb-2">Venue: {details.showvenue}</p>
            <p className="text-lg mb-2">Address: {details.venueaddress}</p>
            <p className="text-lg mb-2">Date: {details.showdate}</p>
            <p className="text-lg mb-2">Genre: {details.showgenre}</p>
            <p className="text-lg mb-2">Description: {details.showinfo}</p>
            <p className="text-lg mb-2">Time: {details.time}</p>
            <p className="text-lg mb-2">Capacity:{details.showcap}</p>
            <p className="text-lg mb-2">Price per Ticket:{details.price}/-</p>

            <Button
              onClick={() => setModal(true)}
              className="bg-yellow-500 text-white hover:bg-yellow-600"
            >
              Book Tickets
            </Button>
          </div>
        </>
      )}
    </>
  );
}
