export const componentArrToReactRenderArr = (arrayButtons) =>{
    return arrayButtons.map((buttonRender, index) => buttonRender(index));
}