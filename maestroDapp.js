

// window.onload=()=>{
// console.log(document.getElementById("totalMint"),"----")

// }

jQuery(document).ready(()=>{
    const abi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"},{"internalType":"address[]","name":"whiteListAdresesO","type":"address[]"},{"internalType":"address[]","name":"whiteListAdresesL","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address[]","name":"whiteListAdreses","type":"address[]"}],"name":"addWhiteListAddresesL","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"whiteListAdreses","type":"address[]"}],"name":"addWhiteListAddresesO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getMintedAmountByWallet","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPreSaleAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPublicSaleAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhiteListedL","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhiteListedO","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mintOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitFreeL","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitFreeO","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitFreePublic","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitL","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitO","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitPublic","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyWhiteListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paidMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paidMintedLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_mintAmount","type":"uint8"}],"name":"preSaleMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_mintAmount","type":"uint8"}],"name":"preSaleMintLimited","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"publicFreeLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicFreeMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_mintAmount","type":"uint8"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"publicSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUsersO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftPerAddressLimitFreeO","type":"uint8"}],"name":"setNftPerAddressLimitFreeO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftPerAddressLimitFreePublic","type":"uint8"}],"name":"setNftPerAddressLimitFreePublic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftPerAddressLimitO","type":"uint8"}],"name":"setNftPerAddressLimitO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftPerAddressLimitPublic","type":"uint8"}],"name":"setNftPerAddressLimitPublic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setOnlyWhiteListed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"paidMintLim","type":"uint256"}],"name":"setPaidMintLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_newmaxMintAmount","type":"uint8"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistFreeLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistFreeMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistLFreeMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistLLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOFreeMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]

  //loading Web3 script
  jQuery.getScript("https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js").done(function( script, textStatus ) {
    console.log( textStatus );
  })
  .fail(function( jqxhr, settings, exception ) {
    $( "div.log" ).text( "Triggered ajaxError handler." );
})
// ------------------------------------------------------------------------------------------------------
  // const connectButton = document.getElementById("connectBtn");
var totalMinted = ""
var mintButton = ""
var mintButtonText = ""
var slider = ""
var sliderMark=""
var mintDetail = ""
var openSeaBtn=""
var connectedAccount=""
//var .innerText="0X123"

var walletCheckerText=""
var walletCheckerInput=""
var walletCheckerBtn=""



console.log(totalMinted,mintButton,mintButtonText,slider,sliderMark)
console.log("---wallet",connectedAccount)
// ------------------------------------------------
let isWalletConnected = false;
let connectedWalletAddress;
let web3 = "";
let contract = "";
let balanceOfWallet = 0;
let amountToMint = 0;
let isWhiteListed=false
let isWhiteListOg=true;
let paidAmount=0;

let maxSupply=0;
let whiteListFree=0;
let whiteListTotalLimit=0;
let publicFree=0;
let publicTotalLimit=0;
let cost=0;
let totalSupply=0;

let publicFreeMinted=0;//1000
let whitelistFreeMinted=0;//500
let publicFreeLimit=0;
let whitelistFreeLimit=0;
let paidMinted=0;//on setMintTotal
let paidMintLimit=0
let whitelistOFreeMinted=0;
let whitelistLFreeMinted=0;
let whitelistOLimit=0;
let whitelistLLimit=0;

let whiteListAddressesO=["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4","0xf3bDa98A1Be61D8C6fd7B2F757123AD7acc05Bb6"
,"0xD981662F8CA0F485F5807CDea9aB2c087eF09d16"
,"0x3c3f067ff1b38a1223f3cf9f09cb95f47a47766c"
,"0x4D69e5E6e5a0a75A064828519110C8b70272C56a"
,"0x74ff875135a52a7af9d3a76d37cadc6ea1ad8bed"
,"0x4847f6F9382719b92537427Bc392485418fFD99D"
,"0x30439021Ed5B3BB247bF0FDbb92F18010930ee7c",
"0xE2195f55a887a40d29E6A9fc5D025b68a437976a",
"0xDfFdC7b954853112579DfB8FBE8ADba5eC145032",
"0xAaaF8855ecED11cD10709F82E408CFd2caaF82A4",
"0xC841fAbb79C0b39Bd0af850DCD5281022445Eb51",
"0x3F1f18C75dBE7919E054993CeA62AeEa89996Dbd",
"0xEC6aEFe1D661ad80A359533E04daf05101c09c2f",
"0x139cf099c24bfac77e46e8779c0e73bbd91a9c53",
"0xA3D8071efB44d83e6068B4e9918b5170C019B164",
"0xE5cB669F880211b0E77517aE40d7353100d173B9","0xB777612a63E0EC7025D2d9D539E0541cD8Ca8ebE"]
let whiteListAddressesL=["0x5B38Da6a701c568545dCfcB03FcB875f56beddC5","0x4c06845427F8D4dCc2b198326F4EAC680A426650","0x5f55EbcdcfE4F448604dda4ef68FF690e335F879"]
// ------------------------------------------------
const setMintButtonText = (text) => {
  mintButtonText.innerText = text;
};
const initializeContract = () => {
  contract = new web3.eth.Contract(abi);
  contract.options.address = "0x675A847e7B17a9dc4f3D49CD18E8F7a2d9e73546";
//   0xC2df542F6141abeC84a012127B4E278D5A7CaA76
  console.log("Contract", contract);
};

const setTotalMint = async () => {
    // if(await contract.methods.paused().call()=="false"){
    // totalMinted.innerText = `Minting is Scheduled for 5th Oct 2022`;
    //  mintButton.style.display="none"
    //  slider.style.display="none"
    //  sliderMark.style.display="none"
    //  mintDetail.style.display="none"
    // }
      if(contract==""){
          
    // hideMintFunctionality()
    totalMinted.innerText = `You're Early! Minting will open on 5th Oct 2PM EST
    Meanwhile you may check your wallet if you're Whitelisted.`;
     mintButton.style.display="none"
     $("#qtyDetail").css("display", "none");
     setTimeout(()=>{
         //$("#totalMint").find('h2').css("display","none")
         $("#qty").css("display", "none")
      console.log(totalMinted.childNodes[1].childNodes[1])
        //$("#totalMint").find('h2').css("display", "none");
     },5000);
     $("#totalMint").find('h2').css("letter-spacing","0px")
     $("#totalMint").find('h2').css("word-spacing","0px")
      $("#totalMint").find('h2').css("text-transform","capitalize")
      $("#totalMint").find('h2').css("font-size","15px")
      $("#totalMint").find('h2').css("line-height","26px")

// //         $("#totalMint").children("h2").css("word-spacing", "0px");
// // $("#totalMint").find("h2").css("color", "red");
//     //  document.getElementById("qty").style.display="none"
//      sliderMark.style.display="none"
//      mintDetail.style.display="none"
   return;
    }else{
         $("#qtyDetail").css("display", "block");
          $("#totalMint").find('h2').css("all","none")
    }
  const amount = parseInt(await contract.methods.totalSupply().call());
 // maxSupply=amount;
  if(parseInt(amount)==maxSupply&&parseInt(amount)>0){
     totalMinted.innerText = `SOLD OUT`;
     mintButton.style.display="none"
     slider.style.display="none"
     //sliderMark.style.display="none"
     mintDetail.style.display="none"
     showOpenSeaButton()
    
  }
  else{
    totalMinted.innerText = `${amount} / ${maxSupply} Minted`;
      mintButton.style.display="block"
    slider.style.display="block"
    //sliderMark.style.display="block"
    mintDetail.style.display="block"
    hideOpenSeaButton();
  
  }
  
  


};

const setBalanceOfWallet = async () => {
  balanceOfWallet =parseInt( await contract.methods
    .getMintedAmountByWallet(connectedWalletAddress)
    .call());
  console.log(balanceOfWallet);
  // slider.max = 5 - balanceOfWallet;
};

const setAmountToMint = async (amount) => {
  amountToMint = amount;
};

const setIsWhiteListed=async()=>{
  console.log("call")
  const isWhiteListedResult = await contract.methods.isWhiteListedO(connectedWalletAddress).call();
   const isWhiteListedResult2 = await contract.methods.isWhiteListedL(connectedWalletAddress).call();
  console.log("iswhitelisted",isWhiteListedResult,isWhiteListedResult2)
  isWhiteListed=isWhiteListedResult||isWhiteListedResult2;
  isWhiteListOg=isWhiteListedResult?true:false;
  populateSettings()
}

const setQtyDetail=async (free,paid)=>{
   // if(isWhiteListed){
      if(free<=0&&paid<=0){
         mintDetail.innerText=`MINT MAESTRO MIX`
      }
      else if(free>0&&paid==0){
         mintDetail.innerText=`MINT ${free} MAESTRO MIX FOR FREE`
      }
      else{
         mintDetail.innerText=`MINT ${paid+free} MAESTRO MIX FOR ${"≡ "+(paid)*cost}`
      }

      
   // }
}
const hideMintFunctionality=()=>{
   totalMinted.style.display="none"
   slider.style.display="none"
   mintDetail.style.display="none"
}
const showMintFunctionality=()=>{
   totalMinted.style.display="block"
   slider.style.display="block"
    mintDetail.style.display="block"
}

const populateSettings=async()=>{
   maxSupply= parseInt(await contract.methods.maxSupply().call());
   whiteListFree= isWhiteListOg?parseInt(await contract.methods.nftPerAddressLimitFreeO().call()):parseInt(await contract.methods.nftPerAddressLimitFreeL().call());
   whiteListTotalLimit= isWhiteListOg?parseInt(await contract.methods.nftPerAddressLimitO().call()):parseInt(await contract.methods.nftPerAddressLimitL().call());
   publicFree= parseInt(await contract.methods.nftPerAddressLimitFreePublic().call());
   publicTotalLimit= parseInt(await contract.methods.nftPerAddressLimitPublic().call());
   cost=web3.utils.fromWei(await contract.methods.cost().call(),"ether");

   publicFreeMinted=parseInt(await contract.methods.publicFreeMinted().call());
   whitelistFreeMinted=parseInt(await contract.methods.whitelistFreeMinted().call());
   publicFreeLimit=parseInt(await contract.methods.publicFreeLimit().call());
   whitelistFreeLimit=parseInt(await contract.methods.whitelistFreeLimit().call());
   
   paidMinted=parseInt(await contract.methods.paidMinted().call());
   paidMintLimit=parseInt(await contract.methods.paidMintedLimit().call());
    
    
whitelistOFreeMinted=parseInt(await contract.methods.whitelistOFreeMinted().call());
whitelistLFreeMinted=parseInt(await contract.methods.whitelistLFreeMinted().call());
whitelistOLimit=parseInt(await contract.methods.whitelistOLimit().call());
whitelistLLimit=parseInt(await contract.methods.whitelistLLimit().call());

   console.log(maxSupply,whiteListFree,whiteListTotalLimit,publicFree,publicTotalLimit,cost,"GET SETTINGS FROM CONTRACT")
   setRangeSettings()
   //setSlider()
}

const setRangeSettings=()=>{
   console.log("setting range settings",whiteListTotalLimit,publicTotalLimit)
   if(isWhiteListed){
      slider.min=0;
      slider.max=whiteListTotalLimit;
      
      let qtyMarkHtml=""
      for(i=0;i<whiteListTotalLimit;i++){
         qtyMarkHtml+=`<option value="${i}"></option>`
      }
      sliderMark.innerHTML=qtyMarkHtml;
console.log(sliderMark)

   }
   else{
      slider.min=0;
      slider.max=publicTotalLimit

      let qtyMarkHtml=""
      for(i=0;i<publicTotalLimit;i++){
         qtyMarkHtml+=`<option value="${i}"></option>`
      }
      sliderMark.innerHTML=qtyMarkHtml;

   }
}
const setSlider=()=>{
   if(isWhiteListed){
      if(balanceOfWallet<whiteListTotalLimit){
         slider.value=0;
      }
      else{
         slider.value=0;
      }
      
   }
   else{
      if(balanceOfWallet<publicTotalLimit){
         slider.value=0;
      }
      else{
         slider.value=0;
      }
      
   }
}
const hideOpenSeaButton=()=>{
   openSeaBtn.style.display="none";
}
const showOpenSeaButton=()=>{
   openSeaBtn.style.display="block";
}
const setConnectedWalletAddress=()=>{
    console.log("in changing wallet address function+++++++")
   if(isWalletConnected&&connectedWalletAddress){
   connectedAccount.innerHTML=connectedAccount.innerHTML.replace("Mint",connectedWalletAddress.substr(0,6)+" . . . "+connectedWalletAddress.substr(connectedWalletAddress.length-4,4))
   }
   else{
       connectedAccount.innerHTML=connectedAccount.innerHTML.replace("Mint","Connect Wallet")
       console.log("in wallet addr")
   }
   //console.log(connectedAccount.innerHTML.replace("Mint Coming Soon","0X123"),"+++++")
}
// -------------------------------------------------
//when pages load,check if the wallet is connected to app,if yes then get address
window.addEventListener("load", async () => {
    
    
    
    totalMinted = document.getElementById("totalMint").childNodes[1].childNodes[1];
 mintButton = document.getElementById("mintBtn");
 mintButtonText = document.getElementById("mintBtn").childNodes[1].childNodes[1];
 slider = document.getElementById("qty");
 sliderMark=document.getElementById("qtyMark")
 mintDetail = document.getElementById("qtyDetail").childNodes[1].childNodes[1];
 openSeaBtn=document.getElementById("openSea")
 connectedAccount=document.querySelector(".walletAddress").childNodes[0]
// .innerText="0X123"

 walletCheckerText=document.getElementById("walletCheckerText").childNodes[1].childNodes[1];
 walletCheckerInput=document.getElementById("walletCheckerInput")
 walletCheckerBtn=document.getElementById("walletCheckerBtn")
    
    // ---------------------------------------------------------
    
    
     if(contract==""){
          
    // hideMintFunctionality()
    totalMinted.innerText = `You're Early! Minting will open on 5th Oct 2PM EST
    Meanwhile you may check your wallet if you're Whitelisted.`;
     mintButton.style.display="none"
     $("#qtyDetail").css("display", "none");
     setTimeout(()=>{
         //$("#totalMint").find('h2').css("display","none")
         $("#qty").css("display", "none")
      console.log(totalMinted.childNodes[1].childNodes[1])
        //$("#totalMint").find('h2').css("display", "none");
     },5000);
     $("#totalMint").find('h2').css("letter-spacing","0px")
     $("#totalMint").find('h2').css("word-spacing","0px")
      $("#totalMint").find('h2').css("text-transform","capitalize")
      $("#totalMint").find('h2').css("font-size","15px")
      $("#totalMint").find('h2').css("line-height","26px")

// //         $("#totalMint").children("h2").css("word-spacing", "0px");
// // $("#totalMint").find("h2").css("color", "red");
//     //  document.getElementById("qty").style.display="none"
//      sliderMark.style.display="none"
//      mintDetail.style.display="none"
   
    }
    
    //only use to invoke metamask popup
mintButton.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!isWalletConnected) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log("connnect", accounts[0]);
  } else {
    console.log("Mint");
    console.log(await web3.eth.getBalance(connectedWalletAddress));
    console.log("total supply", await contract.methods.totalSupply().call(),"amount to mint",amountToMint);
   console.log(paidAmount,"paid amount")
    if(isWhiteListed&&isWhiteListOg){
      
          const resp=  await contract.methods
              .preSaleMint(amountToMint)
              .send({ from: connectedWalletAddress,value:web3.utils.toWei(`${paidAmount*cost}`,"ether") })
          ;

          console.log(resp)
          location.reload()
    }
    else if(isWhiteListed&&!isWhiteListOg){
      
          const resp=  await contract.methods
              .preSaleMintLimited(amountToMint)
              .send({ from: connectedWalletAddress,value:web3.utils.toWei(`${paidAmount*cost}`,"ether") })
          ;

          console.log(resp)
          location.reload()
    }
    else{
      
       const resp=await contract.methods
        .publicMint(amountToMint)
        .send({ from: connectedWalletAddress,value:web3.utils.toWei(`${paidAmount*cost}`, "ether") })

        location.reload(resp)
    
    }
   
  }
});

//sets the walletadress whenever it changes
window.ethereum.on("accountsChanged", async (accounts) => {
   location.reload()
  // Time to reload your interface with accounts[0]!
  console.log("change", accounts);
//   if (accounts.length != 0) {
//     connectedWalletAddress = accounts[0];
//     isWalletConnected = true;
//     setMintButtonText("Mint");
//     web3 = new Web3(window.ethereum);
//     initializeContract();
//     setTotalMint();
//     setBalanceOfWallet();
//     showMintFunctionality()
//       populateSettings()

//   }
});

console.log(slider);
slider.addEventListener("input", async (e) => {
//   slider.max=5-balanceOfWallet;
  console.log(balanceOfWallet,"balance of wallet")
let targetValue=parseInt(e.target.value)

//if mint amount is 0 then dont set any free and paid mint
 if(targetValue<=0){
   mintDetail.innerText="MINT MAESTRO MIX"
   return;
 }

 console.log(targetValue+totalSupply,maxSupply)
 //if minamount + already minted overall tokens are greater than supply then only allow to mint leftover tokens
 if(targetValue+totalSupply>maxSupply){
   slider.value=maxSupply-totalSupply;
   targetValue=maxSupply-totalSupply
   // return;
 }
 console.log("afterrr-----")
 let freeMint=0,paidMint=0;
 if(isWhiteListed){
     
     if(isWhiteListOg&&targetValue+whitelistOFreeMinted>whitelistOLimit){
         targetValue=whitelistOLimit-whitelistOFreeMinted;
         e.target.value=targetValue;
     }
     else if(!isWhiteListOg&&targetValue+whitelistLFreeMinted>whitelistLLimit){
          targetValue=whitelistLLimit-whitelistLFreeMinted;
         e.target.value=targetValue;
     }
     
   if(balanceOfWallet+targetValue>whiteListTotalLimit){
      slider.value=whiteListTotalLimit-balanceOfWallet
      return;
   }

   if(balanceOfWallet>=whiteListFree){
      console.log(targetValue,"paid mint")
      paidMint=targetValue;
   }
   else{
      let freeAvailable=whiteListFree-balanceOfWallet;
      freeMint=(targetValue<freeAvailable)?targetValue:freeAvailable;
      paidMint=targetValue-freeMint;
      console.log(freeMint,paidMint)
   }
 }
 else{

   if(balanceOfWallet+targetValue>publicTotalLimit){
      slider.value=publicTotalLimit-balanceOfWallet
      return;
   }

   if(balanceOfWallet>=publicFree){
      console.log(targetValue,"paid mint")
      paidMint=targetValue
   }
   else{
      let freeAvailable=publicFree-balanceOfWallet;
      freeMint=(targetValue<freeAvailable)?targetValue:freeAvailable;
      paidMint=targetValue-freeMint;
      console.log(freeMint,paidMint)
   }
 }

   freeMint=freeMint<=0?0:freeMint;
   paidMint<=0?0:paidMint

   if(isWhiteListed&&(freeMint+whitelistFreeMinted>whitelistFreeLimit)){
      freeMint=whitelistFreeLimit-whitelistFreeMinted;
      paidMint=targetValue-freeMint;
   }
   else if(!isWhiteListed&&(freeMint+publicFreeMinted>publicFreeLimit)){
      freeMint=publicFreeLimit-publicFreeMinted;
      paidMint=targetValue-freeMint;
   }

    if(paidMint+paidMinted>paidMintLimit){
        paidMint=paidMintLimit-paidMinted;
        paidMint<=0?0:paidMint;
        e.target.value=paidMint+freeMint
    }
   setQtyDetail(freeMint,paidMint)
   setAmountToMint(freeMint+paidMint)
   paidAmount=paidMint;
  
  
});


walletCheckerBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(walletCheckerInput.value,"+++++",walletCheckerText)
    const addr=walletCheckerInput.value
    if(whiteListAddressesO.includes(addr)){
        walletCheckerText.innerText="Congrats your wallet address is OG listed"
    }
    else if(whiteListAddressesL.includes(addr)){
        walletCheckerText.innerText="Congrats your wallet address is Whitelisted"
    }
    else{
        walletCheckerText.innerText="Sorry! your wallet address is not Whitelisted"
    }
    
})


connectedAccount.addEventListener("click",async (e)=>{
    if(window.location.href=="https://maestrosmix.xyz/mint-maestros-mix/"&&isWalletConnected==false){
       mintButton.click();
    }
    console.log(window.location)
})
    // ---------------------------------------------------------
  //   const accounts = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });
  //   connectedWalletAddress = accounts[0];
  const accounts = await window.ethereum.request({ method: "eth_accounts" });
  if (accounts.length != 0) {
    console.log("relod", accounts);
    connectedWalletAddress = accounts[0];
    isWalletConnected = true;
    setMintButtonText("Mint");
    web3 = new Web3(window.ethereum);
    initializeContract();
    hideOpenSeaButton()
    setTotalMint();
    setBalanceOfWallet();
    setIsWhiteListed()
   showMintFunctionality()
//   populateSettings()
   setConnectedWalletAddress();
  }
  else{
   hideMintFunctionality()
  }
  hideOpenSeaButton()
     setConnectedWalletAddress();

});

// -------------------------------------------------

setInterval(()=>{
  isWalletConnected&&setTotalMint()
  console.log("get mint amount")
},1000)

})
