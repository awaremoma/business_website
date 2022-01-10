import React, { Component } from "react";
import "./App.css";
import auth from "./services/authService";
import { ToastContainer, toast } from "react-toastify";
import ClientRoutes from "./components/layout/ClientRoutes";
import NavBar from "./components/layout/Navbar";
import { Container, Header, Content, FlexboxGrid, Footer, Sidebar } from "rsuite";
import SideNavigation from "./components/layout/SideNavigation";
class App extends Component {
  state = {
    user: {
      id: "",
      firstName: "",
      lastName: "",
      userName: "",
      phoneNo: "",
      validationCode: "",
      isAdmin: 0,
    },
    activeTab: "Home",
    clientWidth: document.documentElement.clientWidth,
    validPwToken: null,
    sideNavOpened: true
  };

  componentDidMount() {
    //const user = auth.getTokenFromCookie();
    const { user } = this.state;
    this.setState({ user });
  }

  toggleSideNav = ()  =>{
    this.setState({ sideNavOpened: !this.state.sideNavOpened})
  }

  handleSetActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  handleSetUser = (user) => {
    this.setState({ user });
  };

  handleSetValidPwToken = (validPwToken) => {
   
    this.setState({ validPwToken });
  };

  displayWindowSize = () => {
    let clientWidth = document.documentElement.clientWidth;
    this.setState({ clientWidth });
  };

  render() {
    const { user, activeTab, clientWidth, validPwToken, sideNavOpened } = this.state;
    window.addEventListener("resize", this.displayWindowSize);
    return (
      <>
        <Container>
          <Header>
            <NavBar
              handleSetActiveTab={this.handleSetActiveTab}
              handleToggleSideNav={this.toggleSideNav}
              user={user}
              activeTab={activeTab}
            /> 
          </Header>
          <Container>
          <Content className="h100">
            <ToastContainer autoClose={3000} hideProgressBar />
            { sideNavOpened ? <Sidebar><SideNavigation/></Sidebar> : ""}
            
            
            
            
            <ClientRoutes
              user={user}
              clientWidth={clientWidth}
              activeTab={activeTab}
              handleSetActiveTab={this.handleSetActiveTab}
              token={validPwToken}
              handleSetValidPwToken={this.handleSetValidPwToken}
              handleSetUser={this.handleSetUser}
            /> 
          </Content>
          </Container>

        </Container> 
        
      </>
    );
  }
}

export default App;
