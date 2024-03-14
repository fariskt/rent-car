import React, { useState } from "react";
import "./RenterForm.css";
import PersonalDetails from "./PersonalDetails";
import VehicleDetails from "./VehicleDetails";

const Renter = () => {
  const [selectedPickupDate, setSelectedPickupDate] = useState("");
  const [selectedReturnDate, setSelectedReturnDate] = useState("");
  const [formData, setFormData] = useState({
    car_name: "",
    car_brand: "",
    pickup_date: "",
    return_date: "",
    price: "",
    location: "",
    transmission: "",
    segment: "",
    air_condition: "",
    seat_capacity: "",
    fuel: "",
    img: "",
  });

  const [imageSrc, setImageSrc] = useState(null);

  const formDataToSend = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    console.log(value);
    formDataToSend.append(key, value);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      const response = await fetch(
        "https://rent-car-api.vercel.app/api/renter-vehicle",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      if (response.ok) {
        setFormData({
          car_name: "",
          car_brand: "",
          pickup_date: "",
          return_date: "",
          price: "",
          location: "",
          transmission: "",
          segment: "",
          air_condition: "",
          seat_capacity: "",
          fuel: "",
          img: "",
        });

        console.log("Vehicle data uploaded successfully");
      } else {
        console.error("Failed to upload Vehicle data");
      }
    } catch (error) {
      console.error("Error uploading Vehicle data:", error);
    }
  };

  const handleChange = (e) => {
    const { type, name, value } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      setFormData((prevData) => ({ ...prevData, [name]: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleDatePickUpChange = (name, value) => {
    setSelectedPickupDate(value);
    const stringValue = value.toLocaleDateString();
    setFormData((prevData) => ({ ...prevData, [name]: stringValue }));
  };
  const handleDateReturnDateChange = (name, value) => {
    setSelectedReturnDate(value);
    const stringValue = value.toLocaleDateString();
    setFormData((prevData) => ({ ...prevData, [name]: stringValue }));
  };

  const handleDeleteImage = () => {
    setFormData((prevData) => ({
      ...prevData,
      img: "",
    }));
    setImageSrc(null);
  };

  return (
    <>
      <h1 style={{ paddingTop: "90px", textAlign: "center" }}>Rent Your Car</h1>
      <div className="renter-form-container">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <VehicleDetails
            formData={formData}
            setFormData={setFormData}
            setImageSrc={setImageSrc}
            handleChange={handleChange}
            handleDatePickUpChange={handleDatePickUpChange}
            handleDateReturnDateChange={handleDateReturnDateChange}
            imageSrc={imageSrc}
            selectedPickupDate={selectedPickupDate}
            selectedReturnDate={selectedReturnDate}
            handleDeleteImage={handleDeleteImage}
          />
          <PersonalDetails />
          <div className="renter-btn">
            <button type="submit" className="renter-form-btn">
              Rent Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Renter;
