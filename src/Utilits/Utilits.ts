export const getData = async (url:string) => {
  let response = await fetch(url, {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"
    }
  })
  return response.json(); 
}

export const createPhotos = (images: any, windowWidth: number) => {
  if (windowWidth < 576) {
    return [...images].map(({image: {original}}, index) => {
      return {
        src: `${original}`,
        height: 3,
        width: 3
      }
    })
  } else {
    if (images.length === 2) {
      return [...images].map(({image: {original}}, index) => {
        return {
          src: `${original}`,
          width: 5,
          height: 6
        }
      })
    } 
    
    else if (images.length === 3) {
      return [...images].map(({image: {original}}, index) => {
        if (index === 0 || index === 1) {
          return {
            src: `${original}`,
            width: 125,
            height: 100
          }
        } else {
          return {
            src: `${original}`,
            width: 500,
            height: 200
          }
        }
      })
    } 

    else if (images.length === 4) {
      return [...images].map(({image: {original}}, index) => {
        return {
          src: `${original}`,
          width: 3,
          height: 2
        }
      })
    }
    
    else if (images.length === 5) {
      return [...images].map(({image: {original}}, index) => {
        if (index === 0 || index === 1) {
          return {
            src: `${original}`,
            width: 3,
            height: 2
          }
        } else {
          return {
            src: `${original}`,
            width: 2,
            height: 2
          }
        }
      })
    } 

    else if (images.length === 7) {
      return [...images].map(({image: {original}}, index) => {
        if (index === 0 || index === 1 || index === 5 || index === 6) {
          return {
            src: `${original}`,
            width: 8,
            height: 6
          }
        } else {
          return {
            src: `${original}`,
            width: 5,
            height: 4
          }
        }
      })
    }

    else if (images.length === 8) {
      return [...images].map(({image: {original}}, index) => {
        if (index === 0 || index === 2 || index === 3 || index === 4 || index === 6 || index === 7) {
          return {
            src: `${original}`,
            width: 4,
            height: 4
          }
        } else if (index === 1) {
          return {
            src: `${original}`,
            width: 4,
            height: 6.21
          }
        } else {
          return {
            src: `${original}`,
            width: 4,
            height: 6
          }
        }
      })
    }
    
    else {
      return [...images].map(({image: {original}}, index) => {
        return {
          src: `${original}`,
          height: 3,
          width: 3
        }
      })
    }
  }
}