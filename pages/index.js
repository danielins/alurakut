import React from 'react';
import MainGrid from "../src/components/MainGrid"
import Box from "../src/components/Box"
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper, ProfileRelationsGallery } from '../src/components/ProfileRelations'

function ProfileSidebar(props){
  return (
    <Box as="aside">
      <a href={`/users/${  props.username }`}>
        <img src={`https://github.com/${  props.username }.png`} />
      </a>
      <hr />
      <p className="">
        <a className="boxLink" href={`https://github.com/${ props.username }.png`}>
          @{ props.username }
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {

  const myUser = 'danielins';
  const friendList = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'FihCapua',
    'felipefialho',
  ];

  const [communitiesList, setCommunity] = React.useState([]);

  const handleCriaComunidade = function(e){
    e.preventDefault();

    const data = new FormData(e.target);
    
    setCommunity( [...communitiesList, {
      id: + new Date(),
      title: data.get('title'),
      image: data.get('image') || 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
    }]);

  }

  return (
    <>
      <AlurakutMenu myUser={ myUser }/>
      <MainGrid>

        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar username={ myUser } />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)!
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>

            <form onSubmit={ handleCriaComunidade }>
            
              <div>
                <input placeholder="Qual será o nome da sua comunidade?" name="title" aria-label="Qual será o nome da sua comunidade?" type="text" />
              </div>

              <div>
                <input placeholder="Coloque uma URL para usarmos de capa" name="image" aria-label="Coloque uma URL para usarmos de capa" type="text" />
              </div>

              <button>
                Criar comunidade
              </button>

            </form>
            
          </Box>
        </div>

        <div className="relationsArea" style={{ gridArea: 'relationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({ friendList.length })
            </h2>

            {/* <ul>
              { friendList.length > 0 && friendList.map((friend) => {
                return <li key={ friend }><a href={`/users/${ friend }`}>
                  <img src={`https://github.com/${ friend }.png`} />
                  <span>{ friend }</span>
                </a></li>
              })}
            </ul> */}

            <ProfileRelationsGallery list={friendList} listType="friend"></ProfileRelationsGallery>
          
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>

            <h2 className="smallTitle">
              Comunidades ({ communitiesList.length })
            </h2>

            <ProfileRelationsGallery list={communitiesList} listType="community"></ProfileRelationsGallery>

          </ProfileRelationsBoxWrapper>

        </div>

      </MainGrid>
    </>
  )
}
