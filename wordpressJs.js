

// window.onload=()=>{
// console.log(document.getElementById("totalMint"),"----")

// }

jQuery(document).ready(()=>{
    const abi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"string","name":"_initNotRevealedUri","type":"string"},{"internalType":"address[]","name":"whiteListAdresesO","type":"address[]"},{"internalType":"address[]","name":"whiteListAdresesL","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address[]","name":"whiteListAdreses","type":"address[]"}],"name":"addWhiteListAddresesL","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"whiteListAdreses","type":"address[]"}],"name":"addWhiteListAddresesO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getMintedAmountByWallet","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPreSaleAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPublicSaleAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhiteListedL","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhiteListedO","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mintOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitFreeL","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitFreeO","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitFreePublic","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitL","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitO","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftPerAddressLimitPublic","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onlyWhiteListed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_mintAmount","type":"uint8"}],"name":"preSaleMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_mintAmount","type":"uint8"}],"name":"preSaleMintLimited","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"publicFreeLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicFreeMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_mintAmount","type":"uint8"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"publicSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUsersO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftPerAddressLimitFreeO","type":"uint8"}],"name":"setNftPerAddressLimitFreeO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftPerAddressLimitFreePublic","type":"uint8"}],"name":"setNftPerAddressLimitFreePublic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftPerAddressLimitO","type":"uint8"}],"name":"setNftPerAddressLimitO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_nftPerAddressLimitPublic","type":"uint8"}],"name":"setNftPerAddressLimitPublic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setOnlyWhiteListed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_newmaxMintAmount","type":"uint8"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistFreeLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistFreeMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]

  //loading Web3 script
  jQuery.getScript("https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js").done(function( script, textStatus ) {
    console.log( textStatus );
  })
  .fail(function( jqxhr, settings, exception ) {
    $( "div.log" ).text( "Triggered ajaxError handler." );
})
// ------------------------------------------------------------------------------------------------------
  // const connectButton = document.getElementById("connectBtn");
const totalMinted = document.getElementById("totalMint").childNodes[1].childNodes[1];
const mintButton = document.getElementById("mintBtn");
const mintButtonText = document.getElementById("mintBtn").childNodes[1].childNodes[1];
const slider = document.getElementById("qty");
const sliderMark=document.getElementById("qtyMark")
const mintDetail = document.getElementById("qtyDetail").childNodes[1].childNodes[1];
const openSeaBtn=document.getElementById("openSea")
const connectedAccount=document.querySelector(".walletAddress").childNodes[0]
// .innerText="0X123"

const walletCheckerText=document.getElementById("walletCheckerText").childNodes[1].childNodes[1];
const walletCheckerInput=document.getElementById("walletCheckerInput")
const walletCheckerBtn=document.getElementById("walletCheckerBtn")



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
let whitelistFreeLimit=0

let whiteListAddressesO=["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"]
let whiteListAddressesL=["0x5B38Da6a701c568545dCfcB03FcB875f56beddC5"]
// ------------------------------------------------
const setMintButtonText = (text) => {
  mintButtonText.innerText = text;
};
const initializeContract = () => {
  contract = new web3.eth.Contract(abi);
  contract.options.address = "0xC2df542F6141abeC84a012127B4E278D5A7CaA76";
  console.log("Contract", contract);
};

const setTotalMint = async () => {
  const amount = parseInt(await contract.methods.totalSupply().call());
 // maxSupply=amount;
  if(parseInt(amount)==maxSupply&&parseInt(amount)>0){
     totalMinted.innerText = `SOLD OUT`;
     mintButton.style.display="none"
     slider.style.display="none"
     sliderMark.style.display="none"
     mintDetail.style.display="none"
     showOpenSeaButton()
    
  }
  else{
    totalMinted.innerText = `${amount} / ${maxSupply} Minted`;
      mintButton.style.display="block"
    slider.style.display="block"
    sliderMark.style.display="block"
    mintDetail.style.display="block"
    hideOpenSeaButton();
  }


};

const setBalanceOfWallet = async () => {
  balanceOfWallet =parseInt( await contract.methods
    .balanceOf(connectedWalletAddress)
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
         qtyMarkHtml+=`<option style="display:none">${i+1}</option>`
      }
      sliderMark.innerHTML=qtyMarkHtml;


   }
   else{
      slider.min=0;
      slider.max=publicTotalLimit

      let qtyMarkHtml=""
      for(i=0;i<publicTotalLimit;i++){
         qtyMarkHtml+=`<option style="display:none">${i+1}</option>`
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
   if(isWalletConnected&&connectedWalletAddress){
   connectedAccount.innerHTML=connectedAccount.innerHTML.replace("Connect Wallet",connectedWalletAddress.substr(0,6)+" . . . "+connectedWalletAddress.substr(connectedWalletAddress.length-4,4))
   }
   //console.log(connectedAccount.innerHTML.replace("Mint Coming Soon","0X123"),"+++++")
}
// -------------------------------------------------
//when pages load,check if the wallet is connected to app,if yes then get address
window.addEventListener("load", async () => {
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
});

// -------------------------------------------------
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

   setQtyDetail(freeMint,paidMint)
   setAmountToMint(freeMint+paidMint)
   paidAmount=paidMint;
  //check if it has lesss than max mint amount
//   if(targetValue<=5-balanceOfWallet){
//     console.log("wallet balance",balanceOfWallet,"amount to mint",e.target.value)
//     setAmountToMint(parseInt(e.target.value));

//    //set paid and free mint
//    let paidMint=0,freeMint=0;
//    if(isWhiteListed){
//       if(balanceOfWallet>=2){
//          freeMint=0;
//          paidMint=targetValue;
//       }else{
//          freeMint=targetValue==1?1:(targetValue==2?2:0);
//          paidMint=targetValue-freeMint
//       }
//    }else{
//       if(balanceOfWallet>=1){
//          freeMint=0;
//          paidMint=targetValue;
//       }else{
//          freeMint=1
//          //targetValue+balanceOfWallet<=1?targetValue:0;
//          paidMint=targetValue-freeMint
//          console.log("not white free",freeMint,paidMint,balanceOfWallet,targetValue)
//       }
//    }
//    console.log("free",freeMint,"paid",paidMint)
//    setQtyDetail(freeMint,paidMint)


//    if(paidMint>0){
//       paidAmount=paidMint*0.000004;
//    }

//   }
//   else{
//    //stop range bar from exceding the limitg
//    e.target.value=5-balanceOfWallet
//   }
// -----------------------------------
//   else{
//     setAmountToMint(parseInt(e.target.value));
//   }
//   if(isWhiteListed){
//    let isFree=balanceOfWallet+targetValue>2?false:true
//    let free=2-balanceOfWallet;
//    setQtyDetail(targetValue,isFree,free?free:0)
//   }
//   else{
   
//    let isFree=balanceOfWallet+targetValue>1?false:true
//    let free=1-balanceOfWallet;
//    console.log(isFree,targetValue)
//    setQtyDetail(targetValue,isFree,free?free:0)
//   }
  
});
// jQuery(document).on("input change", "#qty", function() {
//   // var scrolled_value = $(this).val();
//   // var limiting_value = 50;

//   // if (scrolled_value <= limiting_value)
//   //   $(this).val(limiting_value);
// });

// mintButton.addEventListener("click", async (e) => {
//   e.preventDefault();
//   console.log(await web3.eth.getBalance(connectedWalletAddress));
//   const contract = new web3.eth.Contract(abi);
//   contract.options.address = "0x7070a617918f7b12e7f5e89f5348640ba157075b";
//   console.log(contract);
//   console.log("total supply", await contract.methods.totalSupply().call());
//   console.log(
//     await contract.methods.publicMint(1).send({ from: connectedWalletAddress })
//   );
//   //   const test = contract.at("0x7070a617918f7b12e7f5e89f5348640ba157075b");
//   //   console.log(test);
// });

walletCheckerBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(walletCheckerInput.value,"+++++",walletCheckerText)
    const addr=walletCheckerInput.value
    if(whiteListAddressesO.includes(addr)){
        walletCheckerText.innerText="You are aded in OG Whitelist"
    }
    else if(whiteListAddressesL.includes(addr)){
        walletCheckerText.innerText="You are aded in Whitelist"
    }
    else{
        walletCheckerText.innerText="You are aded in Public Sale"
    }
    
})
setInterval(()=>{
  isWalletConnected&&setTotalMint()
  console.log("get mint amount")
},1000)

})
