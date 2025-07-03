const sendEmail = (e) => {
  e.preventDefault();

  console.log("📨 ContactMe.jsx: sendEmail function triggered"); // <-- temporary debug log

  emailjs
    .sendForm(
      "service_1uv3aua",
      "template_8gsr8z5",
      form.current,
      "DlT1ex2WuWBJNDTsr"
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      }
    );
};