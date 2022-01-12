import React from "react";
import Form from "../shared/Form";
import Joi from "joi-browser";
//import PopUpModal from "../Shared/PopUpModal";
//import { sendEmailContact } from "../../services/emailService";
import { toast } from "react-toastify";
import { Panel, FlexboxGrid, Form as Wrapper } from "rsuite";
class ContactForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      message: "",
    },
    errors: {},
    show: false,
  };

  schema = {
    name: Joi.string().required().min(1).max(25).label("Name"),
    email: Joi.string().email().min(3).max(50).required().label("Email"),
    message: Joi.string().required().min(5).max(255).label("Message"),
  };

  //   handleModalClick = () => {
  //     this.setState({ show: !this.state.show });
  //   };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      //   const result = await sendEmailContact(
      //     data.email,
      //     data.message,
      //     data.name
      //   );
      const result = true; //for now
      if (result) {
        const data = {
          name: "",
          email: "",
          message: "",
        };
        this.setState({ data, show: true });
      }
    } catch (ex) {
      if (ex.response.stauts === 400 || ex.response.status === 404)
        toast.error("Error sending message");
      else if (ex.response.stauts === 500)
        toast.error("There was an unexpected error");
    }
  };

  render() {
    return (
      <>
        <FlexboxGrid align="center" justify="center">
          <form onSubmit={this.handleSubmit}>
            {this.renderRSInputFormGroupItem(
              "Name",
              "avatar",
              "text",
              "name",
              false
            )}
            {this.renderRSInputFormGroupItem(
              "Email",
              "envelope",
              "text",
              "email",
              false
            )}
            {this.renderRSTextArea(4, "Message", "message", "text", false)}
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                {this.renderBtn("Submit", "submit", "primary")}
              </div>
            </div>
          </form>
        </FlexboxGrid>
      </>
    );
  }
}

export default ContactForm;
