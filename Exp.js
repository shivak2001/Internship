export const name="john";

export const phone=9207483098;//individual exporting


const Address="Mangaluru";
const Pincode=575001;
const Country="India"

export {Address,Pincode,Country} //grouped exporting

const Hello=()=>
{
    alert("This is Default function call");
}

export default Hello
