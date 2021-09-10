import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    listaDePost: [
      {
        nomeUsuario: "finn",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "jack",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151",
      },
      {
        nomeUsuario: "marcelina",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152",
      },
    ],
    textoNovoPost: "",
    inputName: "",
    inputPhoto: "",
    inputPicture:"",
  };

  handleName = (event) => {
    this.setState({ inputName: event.target.value })
  };
  handlePhoto = (event) => {
    this.setState({ inputPhoto: event.target.value})
  };
  handlePicture = (event) => {
    this.setState({ inputPicture: event.target.value})
  }

  adicionarPost =() =>{
    const novoPost ={
      nomeUsuario: this.state.inputName,
      fotoUsuario: this.state.inputPhoto,
      fotoPost: this.state.inputPicture,
    };

    if(!this.state.inputName || !this.state.inputPhoto || !this.state.inputPicture) {
      alert("Complete todos os campos !!");
      return;
    }
    this.setState({
      listaDePost: [...this.state.listaDePost, novoPost],
      inputName:"",
      inputPhoto:"",
      inputPicture:""
    })
  }

  render() {
    return (
      <MainContainer>
        <div>
          <input
            type="text"
            onChange={this.handleName}
            value={this.state.inputName}
            placeholder="Nome do Usuário"
          />

          <input
            type="text"
            onChange={this.handlePhoto}
            value={this.state.inputPhoto}
            placeholder="Foto do Perfil"
          />

          <input
            type="text"
            onChange={this.handlePicture}
            value={this.state.inputPicture}
            placeholder="Foto o Post"
          />
          <button onClick={this.adicionarPost}>Postar</button>
        </div>
        <br/>

        {this.state.listaDePost.map((post) => {
          return (
            <Post
              key={post.nomeUsuario}
              nomeUsuario={post.nomeUsuario}
              fotoUsuario={post.fotoUsuario}
              fotoPost={post.fotoPost}
            />
          );
        })}
        {/* <Post
          nomeUsuario={"Finn"}
          fotoUsuario={"https://picsum.photos/50/50"}
          fotoPost={"https://picsum.photos/200/150"}
        />
        <Post
          nomeUsuario={"Jack"}
          fotoUsuario={"https://picsum.photos/50/51"}
          fotoPost={"https://picsum.photos/200/151"}
        />
        <Post
          nomeUsuario={"marcelina"}
          fotoUsuario={"https://picsum.photos/50/52"}
          fotoPost={"https://picsum.photos/200/152"}
        /> */}
      </MainContainer>
    );
  }
}

export default App;
