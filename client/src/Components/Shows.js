import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export default function Shows() {
  const [showDetails, setShowDetails] = useState([]);
  const [showname, setShowName] = useState("");
  const [showgenre, setShowGenre] = useState("");
  const [showinfo, setShowInfo] = useState("");
  const [showdate, setShowDate] = useState("");
  const [showTime, setShowTime] = useState("");
  const [showvenue, setShowVenue] = useState("");
  const [venueaddress, setVenueAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [showcap, setShowCap] = useState(0);
  const [posterurl, setPosterUrl] = useState("");
  let role;
  role = localStorage.getItem("role");
  console.log(role);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [deleteData, setDeleteData] = useState("");

  const handlePoster = async (event) => {
    const presetKey = "dt7e2phg";
    const cloudName = "dti31w70n";
    const files = event.target.files[0];
    const formData = new FormData();
    formData.append("file", files); // Use "file" instead of "files"
    formData.append("upload_preset", presetKey);
    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set Content-Type header
          },
        }
      );
      setPosterUrl(res.data.secure_url);
      console.log(res.data.secure_url);
    } catch (err) {
      console.log(err);
    }
  };
  const handleFinalClick = async () => {
    try {
      let token;

      if (localStorage.getItem("token")) {
        token = localStorage.getItem("token");
      }
      await axios
        .post(
          "http://localhost:8080/api/shows/addEvent",
          {
            showname: showname,
            showgenre: showgenre,
            showinfo: showinfo,
            showdate: showdate,
            time: showTime,
            showvenue: showvenue,
            venueaddress: venueaddress,
            price: price,
            showcap: showcap,
            posterurl: posterurl,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
          console.log(response);
          setModal(false);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const getShowEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/shows/showAllEventsDisplay"
        );
        setShowDetails(response.data.shows);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };
    getShowEvents();
  }, []);
  const handleClick = async () => {
    setModal(true);
  };
  const handleDeleteClick = (details) => {
    setDeleteModal(true);
    setDeleteData(details);
  };
  const handleConfirmDelete = async () => {
    let token;
    if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");
    }
    await axios
      .delete(`http://localhost:8080/api/shows/${deleteData.showid}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          setDeleteModal(false);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Modal show={modal} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
          <h1>Add Event</h1>
        </Modal.Header>
        <Modal.Body>
          Enter Show Name:
          <input type="text" onChange={(e) => setShowName(e.target.value)} />
          <br />
          Enter Show Genre:
          <input type="text" onChange={(e) => setShowGenre(e.target.value)} />
          <br />
          Enter Show Description:
          <input type="text" onChange={(e) => setShowInfo(e.target.value)} />
          <br />
          Enter Show Date:
          <input type="Date" onChange={(e) => setShowDate(e.target.value)} />
          <br />
          Enter Show Time:
          <input type="text" onChange={(e) => setShowTime(e.target.value)} />
          <br />
          Enter Show Venue:
          <input type="text" onChange={(e) => setShowVenue(e.target.value)} />
          <br />
          Enter Venue Address:
          <input
            type="text"
            onChange={(e) => setVenueAddress(e.target.value)}
          />
          <br />
          Enter Show Price:
          <input type="number" onChange={(e) => setPrice(e.target.value)} />
          <br />
          Enter Show Capacity:
          <input type="number" onChange={(e) => setShowCap(e.target.value)} />
          <br />
          Enter Show poster:
          <input type="file" onChange={handlePoster} />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleFinalClick}>ADD EVENT</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={deleteModal}
        onHide={() => {
          setDeleteModal(false);
        }}
      >
        <Modal.Header closeButton>
          Are you sure You want to delete {deleteData && deleteData.name} ?
        </Modal.Header>
        <Modal.Body>
          <Button variant="secondary" onClick={() => setDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Body>
      </Modal>

      <h1>Shows</h1>
      {showDetails &&
        showDetails.map((details, index) => (
          <div
            className="card"
            key={index}
            style={{
              width: "18rem",
              zIndex: 1, // Add z-index
              margin: "20px", // Add margin
              padding: "10px", // Add padding
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow
            }}
          >
            <img src={details.img} className="card-img-top" alt={index} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">{details.name}</p>
              <Link to="/showFullDetails" state={{ showid: details.showid }}>
                Click Here
              </Link>
              {role === "admin" ? (
                <Button
                  className="mt-3 ml-5"
                  onClick={() => handleDeleteClick(details)}
                >
                  Delete Event
                </Button>
              ) : (
                <p> </p>
              )}
            </div>
          </div>
        ))}

      {role === "admin" ? (
        <Button onClick={handleClick}>Add Event</Button>
      ) : (
        <p> </p>
      )}
    </>
  );
}
