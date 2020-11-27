import React from "react";
import { Col, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class ArtistCard extends React.Component {
  state = {
    genre: "rock",
    artists: [],
    loading: true,
  };
  componentDidMount = () => {
    console.log(this.props.genre);
    this.setState({ genre: this.props.genre });
    this.fetchArtists();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.genre !== this.props.genre) {
      console.log("differnet genre");
      this.setState({ genre: this.props.genre });
      this.setState({ loading: true });
      this.fetchArtists();
    }
  };
  fetchArtists = async () => {
    let response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/genre/${this.state.genre}/artists`,
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
    this.setState({ artists: parsedResponse.data });
    this.setState({ loading: false });
    console.log(parsedResponse.data);
  };
  render() {
    if (this.state.artists) {
      return this.state.artists.map((artist, index) => (
        <Col
          xs={12}
          sm={6}
          lg={4}
          xl={2}
          key={index}
          onClick={() => this.props.history.push("/artist/" + artist.id)}
        >
          <Card>
            <Card.Img variant="top" src={artist.picture_xl} alt="artistImage" />
            <Card.Body>
              <Card.Text className="text-center">{artist.name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ));
    }
  }
}

export default withRouter(ArtistCard);
