import React from "react";

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message")
  };

  // Send the form data to the backend server
  fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server if needed
      console.log("Email sent successfully!", data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the process
      console.error("Error sending email:", error);
    });
}

function Message() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="container" id="signup-container">
        <h1>Contact Us</h1>

        <div className="test">
          <label htmlFor="name">
            <b>Your Name</b>
          </label>

          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          ></input>

          <label htmlFor="email">
            <b>Email</b>
          </label>

          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          ></input>

          <label htmlFor="phone">
            <b>Phone</b>
          </label>
          <input type="text" placeholder="Phone" name="phone" required></input>

          <label htmlFor="message">
            <b>Message</b>
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <div className="clearfix">
          <a href="index.html">
            <button type="submit" className="signupbtn">
              Submit
            </button>
          </a>
        </div>
      </div>
    </form>
  );
}

export default Message;
