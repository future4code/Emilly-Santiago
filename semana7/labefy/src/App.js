import React from "react";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "emilly-santiago-maryam",
  },
};

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export default class App extends React.Component {
  state = {
    playlists: [],
    playlistName: "",
    formTrack: false,
    playlistID: "",
    trackName: "",
    trackartist: "",
    trackurl: "",
    openTracksID: "",
    tracksIn: [],
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  handlePlaylistName = (e) => {
    this.setState({ playlistName: e.target.value });
  };

  handleTrackName = (e) => {
    this.setState({ trackName: e.target.value });
  };

  handleTrackArtist = (e) => {
    this.setState({ trackartist: e.target.value });
  };

  handleTrackUrl = (e) => {
    this.setState({ trackurl: e.target.value });
  };

  createPlaylists = () => {
    const body = {
      name: this.state.playlistName,
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ playlistName: "" });
        this.getAllPlaylists();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  getAllPlaylists = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  deletePlaylist = (id) => {
    axios
      .delete(url + "/" + id, headers)
      .then((res) => {
        this.getAllPlaylists();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  openFormToAddTrack = (id) => {
    this.setState({ playlistID: id });

    if (this.state.formTrack) {
      this.setState({ formTrack: false });
    } else {
      this.setState({ formTrack: true });
    }
  };

  addTrackToPlaylist = (e) => {
    e.preventDefault();

    const bory = {
      name: this.state.trackName,
      artist: this.state.trackartist,
      url: this.state.trackurl,
    };

    if (this.state.playlistID) {
      axios
        .post(url + "/" + this.state.playlistID + "/tracks", bory, headers)
        .then((res) => {
          //chama funçao de pegar todas as musicas
          alert("track add sucessfully");
          this.setState({formTrack: false})
          this.setState({trackName: "", trackartist: "", trackurl:""})
        })
        .catch((err) => {
          console.log(err.response.request);
        });
    } else {
      alert("Something go wrong!");
    }
  };

  getPlaylistTracks = (id) => {
   
     if (this.state.openTracks) {
       this.setState({ openTracksID: "" });
     } else {
       this.setState({openTracksID: id})
     }

    axios.get(url + "/" + id + "/tracks", headers)
    .then((res) => {
      this.setState({ tracksIn: res.data.result.tracks });
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  render() {
    const playlistComponents = this.state.playlists.map((play) => {
      return (
        <li key={play.id}>
          {play.name}
          <button
            onClick={() => {
              this.deletePlaylist(play.id);
            }}
          >
            delete
          </button>
          <button
            onClick={() => {
              this.openFormToAddTrack(play.id);
            }}
          >
            AddTrack
          </button>
          <button onClick={() => {this.getPlaylistTracks(play.id)}}>Tracks</button>
        </li>
      );
    });
    const tracksList = this.state.tracksIn.map((track) => {
      return(
        <ul key={track.id}>
          <li>Track name: {track.name}</li>
          <li>Track artist: {track.artist}</li>
          <li>Track url: {track.url}</li>
        </ul>
      )
    })

    return (
      <div>
        <h1>Labefy</h1>
        <input
          placeholder="Nome playlist"
          value={this.state.playlistName}
          onChange={this.handlePlaylistName}
        />
        <button onClick={this.createPlaylists}>Send</button>
        {playlistComponents}

        {this.state.formTrack && (
          <div>
            <p>Add here your song</p>
            <form onSubmit={this.addTrackToPlaylist}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  name="name"
                  type="text"
                  value={this.state.trackName}
                  onChange={this.handleTrackName}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="artist">Artist: </label>
                <input
                  name="artist"
                  type="text"
                  value={this.state.trackartist}
                  onChange={this.handleTrackArtist}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="url">URL:</label>
                <input
                  name="url"
                  type="text"
                  value={this.state.trackurl}
                  onChange={this.handleTrackUrl}
                  required
                ></input>
              </div>
              <input value="Send" type="submit" />
            </form>
          </div>
        )}

        {/* Não ta funcionando */}
        {tracksList ? tracksList : (this.state.openTracksID && <p>ListTrack is empty</p>)}
      </div>
    );
  }
}
