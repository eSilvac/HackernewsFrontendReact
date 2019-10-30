import React, { createContext, Component } from 'react';
import Api from "./../helpers/api";

const { Provider, Consumer } = createContext();

class UserProvider extends Component {
  state = {
    user: null,
    error: null,
    loading: false  
  };
  
  async componentDidMount() {
    const token = localStorage.getItem("authenticationToken")
    if (token) {
      this.setState({
        loading: true
      });
      
      try {
        const { data } = await Api.get("/current-user");
        this.setState({ user: data });
      } catch (error) {
        console.log(error);
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  
  render() {
    return(
      <Provider value={{
        ...this.state
      }}>
        {this.props.children}
      </Provider>

    );
  }
}

export { UserProvider, Consumer as UserConsumer } 
