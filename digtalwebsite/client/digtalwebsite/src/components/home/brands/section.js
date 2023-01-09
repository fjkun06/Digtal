
export const giveRandomImageLocation = ()=>{
    const randomNumber = Math.floor(Math.random()*28)
    return require(`../../../assets/images/technology/backup/cobaye${randomNumber}.png`)
}
