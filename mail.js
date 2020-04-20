sendEmail = () => {
	try {

    const to = document.forms["myForm"]["to"].value;
    const subject = document.forms["myForm"]["subject"].value;
    const body = document.forms["myForm"]["body"].value;
    console.log(to);
    console.log(subject);
    console.log(body);

    Email.send({
        Host: "enter_host/server_here",
        Username: "enter_username_here",
        Password: "enter_password_here",
        To: to,
        From: "enter_from_address_here",
        Subject: subject,
        Body: body,
    }).then(
        message => alert("Email successfully sent!")
    );
} catch(err) {
      alert(`Error: ${err}`);
  }
}