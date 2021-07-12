import MainGrid from "../src/components/MainGrid"
import Box from "../src/components/Box"
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props){
  return (
    <Box>
      {/* <img src={`https://github.com/${ props.username }.png`} /> */}
      <a href={`/users/${  props.username }`}>
        <img src={`https://github.com/${  props.username }.png`} />
      </a>
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
    'felipefialho'
  ];
  const communitiesList = [

  ];

  return (
    <>
      <AlurakutMenu />
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
        </div>

        <div className="relationsArea" style={{ gridArea: 'relationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({ friendList.length })
            </h2>

            <ul>
              { friendList.map((friend) => {
                return <li><a href={`/users/${ friend }`} key={ friend }>
                  <img src={`https://github.com/${ friend }.png`} />
                  <span>{ friend }</span>
                </a></li>
              })}
            </ul>
          
          </ProfileRelationsBoxWrapper>
          
          <Box>
            <h2 className="smallTitle">
              Comunidades ({ communitiesList.length })
            </h2>
          </Box>

        </div>

      </MainGrid>
    </>
  )
}
