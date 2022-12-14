let GM = 'GM'
let GN = 'GN'
let gmAction = () => {
    console.log("Second - action")
    return { type: GM }
}
let gnAction = () => {
    return { type: GN }
}
export { gmAction, gnAction, GM, GN }