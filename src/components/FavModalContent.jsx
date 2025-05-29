import React from 'react'
import {ImageList, ImageListItem, ImageListItemBar} from '@mui/material'
import useFav from './hooks/useFav'

function FavModalContent({themeColor}) {
    const {fav}= useFav()
  return (
    <ImageList cols={3} gap={10}>
      {fav.map((item) => (  
        // console.log(item.img)      
        <ImageListItem key={item.id} sx={{ width: 150, height: 100 }}>
          <img
            // srcSet={`${item.image}?w=124&fit=crop&auto=format&dpr=2 2x`}
            // src={`${item.image}?w=124&fit=crop&auto=format`}
            srcSet={item.image}
            src={item.image}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title.split(" ", 3).join(" ")}
            subtitle={<span>Category: {item.category}</span>}
            position="below"
            sx={{backgroundColor:themeColor, textAlign:"center", borderRadius:1}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default FavModalContent