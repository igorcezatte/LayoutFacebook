import React, { Component } from "react";

import PostItem from "./PostItem";

import profileIara from "../assets/Iara.jpeg";

import profileLucas from "../assets/Lucas Cezatte.png";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Igor Cezatte",
          avatar: "https://avatars3.githubusercontent.com/u/19882853?s=400&v=4"
        },
        date: "24 Set 2019",
        content: "Fala galera, alguém mais acaba as vezes conversando sozinho?",
        comments: [
          {
            id: 2,
            author: {
              name: "Igor Cezatte:",
              avatar:
                "https://avatars3.githubusercontent.com/u/19882853?s=400&v=4"
            },
            date: "24 Set 2019",
            content: "Pessoal?"
          },
          {
            id: 12,
            author: {
              name: "Igor Cezatte:",
              avatar:
                "https://avatars3.githubusercontent.com/u/19882853?s=400&v=4"
            },
            date: "24 Set 2019",
            content: "Poxa, ta acontecendo de novo"
          }
        ]
      },
      {
        id: 6,
        author: {
          name: "Iara Abdalla Fantin",
          avatar: profileIara
        },
        date: "24 Set 2019",
        content: "Onde compro maquiagem legais?",
        comments: [
          {
            id: 4,
            author: {
              name: "Bruna Medeiros:",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            date: "24 Set 2019",
            content: "Na internet tem umas bem bonitas amiga!"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Lucas Cezatte",
          avatar: profileLucas
        },
        date: "24 Set 2019",
        content: "Alguém tem uma recomendação de PC Gamer?",
        comments: [
          {
            id: 4,
            author: {
              name: "Mano Gamer:",
              avatar: "https://i.pravatar.cc/150?img=7"
            },
            date: "24 Set 2019",
            content: "PC bom tem naquela loja online"
          },
          {
            id: 5,
            author: {
              name: "Streamer de Fortnite:",
              avatar: "https://i.pravatar.cc/150?img=16"
            },
            date: "24 Set 2019",
            content: "O meu eu tbm comprei lá, é o melhor custo beneficio do BR"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
