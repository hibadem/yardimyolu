const handleSubmit = event => {
    event.preventDefault();
	var frm = new FormData();
	frm.append("Fullname", formData.Fullname);
	frm.append("Amount", formData.Amount);
	frm.append("Company", formData.Company);
	frm.append("NameListApprove", formData.NameListApprove);
	frm.append("Image", formData.Image);

	var requestOptions = {
	  method: 'POST',
	  body: frm,
	  redirect: 'follow'
	};

	fetch("https://localhost:7176/donation/", requestOptions)
	  .then(response => response.text())
	  .then(result => console.log(result))
	  .catch(error => console.log('error', error));
  };