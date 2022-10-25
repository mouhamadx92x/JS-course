let a =11;

a<10 ? console.log(10):(a>=10 && a<=40)?console.log("10 to 40"):a>40?console.log(">40"):console.log("unknown");

//-------------------------------

let st="Elzero web School"

if(st.length*2 ==="34")
{
    console.log("Good");
}

//------------------------------

if (st.charAt(st.indexOf("w")) ==="w"){
    console.log("Good");
}
//-----------------------------

if (st.slice(1,4) !== "string"){
    console.log("Good");
}
//-----------------------------
if (typeof parseInt(st.charAt(5)) ==="number"){

    console.log("Good");
}
console.log(parseInt(st.charAt(5)));
//-----------------------------
if (st.slice(0,6).repeat(2) ==="ElzeroElzero"){
    console.log("Good");
}
//-----------------------------

