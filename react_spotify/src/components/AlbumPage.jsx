import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class AlbumPage extends React.Component {
  state = {
    tracklist: [],
    album: {},
  };

  componentDidMount = () => {
    this.fetchTracklist();
    console.log("hi");
  };

  fetchTracklist = async () => {
    try {
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/album/${this.props.match.params.id}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let parsedResponse = await response.json();
      console.log(parsedResponse);
      this.setState({ tracklist: parsedResponse.tracks.data });
      this.setState({ album: parsedResponse });
      console.log(this.state.tracklist);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (this.state.album) {
      return (
        <Container fluid className="d-flex">
          <Row>
            <Col xs={12} lg={4}></Col>
          </Row>
        </Container>
      );
    }
  }
}

export default AlbumPage;
