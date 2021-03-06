import styled from 'styled-components';
import Box from '../Box';

export const ProfileRelationsBoxWrapper = styled(Box)`
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr; 
    max-height: 220px;
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: 102px;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
  .placeholderText {
    font-size: 12px;
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const ProfileRelationsGallery = function(props) {

  const listToShow = props.list.slice(0,6);

  let placeholderText = "Nada para ser exibido";
  switch ( props.listType ) {
    case "friend":
      placeholderText = "Adicione um amigo!"
      break;
    case "community":
      placeholderText = "Crie ou entre em alguma comunidade!"
      break;
  }

  const treatData = function( data ){

    if ( props.listType === "friend" ) {
      return {
        id: data.id,
        title: data.login,
        imageUrl: data.avatar_url,
        link: data.url,
      }
    }
    return {
      ...data,
      link: `/communities/${ data.id }`
    };
  }

  return (
    <>
      { listToShow.length > 0 ?
        (
          <ul>
            { listToShow.map((item) => {
                item = treatData(item);
                return <li key={ item.id }><a href={ item.link }>
                  <img src={ item.imageUrl } />
                  <span>{ item.title }</span>
                </a></li>
              }) }
          </ul>
        )
        :
        <p className="placeholderText">{ placeholderText }</p>
      }
      {
        props.list.length > 6 && (
          <>
            <hr />
            <a href="">Ver todos</a>
          </>
        )
      }
    </>
  )

}