import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';


export default class Home extends React.Component {
  state = {
  };

  componentWillMount() {
  }

  render() {
    return (
      <Container>
        <Segment>
          <Header>Hem</Header>
          Hello
        </Segment>
      </Container>
    );
  }
}

Home.propTypes = {

};
