//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "erc721a/contracts/ERC721A.sol";

/// @title Mestro's Mix Test
/// @author Adam Bawany
/// @custom:experimental This is an experimental contract.
contract NFTA is ERC721A, Ownable {

    using Strings for uint256;
    
    bool public paused = false;
    bool public revealed = false;
    bool public onlyWhiteListed = true;
    bool public publicSale = true;//only specified here.Implemented if needed in future
    
    uint8 public maxMintAmount = 10; //Max Limit per Wallet
    uint8 public nftPerAddressLimitFreeO =2; //Max Free mint for WL
    uint8 public nftPerAddressLimitO =5; //Max Limit per Wallet for WL
    uint8 public nftPerAddressLimitFreeL =1; //Max Free mint for WL
    uint8 public nftPerAddressLimitL =5; //Max Limit per Wallet for WL
    uint8 public nftPerAddressLimitFreePublic =1; //Max Free mint for Public
    uint8 public nftPerAddressLimitPublic =5; //Max Limit per Wallet for Public
    
    uint256 public cost = 0.001 ether;
    uint256 public maxSupply = 70;
    uint256 public publicFreeMinted=0;//1000
    uint256 public whitelistFreeMinted=0;//500
    uint256 public whitelistOFreeMinted=0;
    uint256 public whitelistLFreeMinted=0;
    uint256 public publicFreeLimit=20;
    uint256 public whitelistFreeLimit=30;
    uint256 public whitelistOLimit=20;
    uint256 public whitelistLLimit=10;
    uint256 public paidMinted=0;
    uint256 public paidMintedLimit=20;

    string public baseURI;
    string public baseExtension = ".json";
    string public notRevealedUri;

    mapping(address => bool) whitelistedAddressesO;
    mapping(address => bool) whitelistedAddressesL;
    mapping(address => uint8) mintedList;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initBaseURI,
        string memory _initNotRevealedUri,
        address[] memory whiteListAdresesO,
        address[] memory whiteListAdresesL
    ) ERC721A(_name, _symbol) {
        setBaseURI(_initBaseURI);
        setNotRevealedURI(_initNotRevealedUri);
        addWhiteListAddresesO(whiteListAdresesO);
        addWhiteListAddresesL(whiteListAdresesL);
    //    _safeMint(msg.sender, 5);
    }

    ///@notice some common conditions for public and pre sale that needs to be true like minting is not paused,amount to mint is greater than 0,supply dont exceed more than the total supply and sender dont exceed the max mint amount set
    ///@dev this modifier needs to be added on every function thats going to mint tokens
    ///@param _mintAmount is the amount to mint tokens
    modifier preConditions(uint8 _mintAmount) {
        require(!paused,"Minting is currently paused");
        require(_mintAmount > 0,"Mint amount should be greater than 0");
        require(totalSupply() + _mintAmount <= maxSupply,"Insuffiecient tokens available");
        require(_mintAmount+ mintedList[msg.sender] <= maxMintAmount,"Max lmit of tokens exceeded");
        _;
    }
    
    ///@notice it is the helper mint function which cheks if the mint amount is less than free mint available then it mint wwithout charges.Otherwise it calculates mint amount that need to be charged,alculate and verify the charges and then mint the tokens
    ///@dev  if the mint amount is less than free mint available,then we mint without checking the amount.Otherwise we first calculate how many tokens need to be minted are paid,then checkes the amount send by the minter and then mints the tokens
    ///@param _mintAmount is the number of tokens to mint,senderAmount is the amount send by minter while minting,freeMintAvailable is the number of free tokens that are left for the specified addresss.
    function mint(
        uint8 _mintAmount,
        uint256 senderAmount,
        uint256 freeMintAvailable,
        uint8 isWhitelist
    ) private {
         if (_mintAmount <= freeMintAvailable) {

             if(isWhitelist==1){
                whitelistFreeMinted=whitelistFreeMinted+_mintAmount;
                whitelistOFreeMinted=whitelistOFreeMinted+_mintAmount;
             }
             else if(isWhitelist==2){
                 whitelistFreeMinted=whitelistFreeMinted+_mintAmount;
                 whitelistLFreeMinted=whitelistLFreeMinted+_mintAmount;
             }
             else{
                 publicFreeMinted=publicFreeMinted+_mintAmount;
             }

            _safeMint(msg.sender, _mintAmount);
            mintedList[msg.sender]+=_mintAmount;
           

        } else {

           
            if(isWhitelist==1){
                whitelistFreeMinted=whitelistFreeMinted+freeMintAvailable;
                 whitelistOFreeMinted=whitelistOFreeMinted+freeMintAvailable;
            }
            else if(isWhitelist==2){
                whitelistFreeMinted=whitelistFreeMinted+freeMintAvailable;
                whitelistLFreeMinted=whitelistLFreeMinted+freeMintAvailable;
            }
             else{
                 publicFreeMinted=publicFreeMinted+freeMintAvailable;
             }
             

            uint256 paidMint = _mintAmount - freeMintAvailable;
            require(senderAmount >= paidMint * cost,"Insuffiecient funds transfered");
            require(paidMinted+paidMint<=paidMintedLimit,"paid limit is exceded");
            _safeMint(msg.sender, _mintAmount);
            mintedList[msg.sender]+=_mintAmount;
            paidMinted=paidMinted+paidMint;
        }
    }

    ///@notice It returns the number of free mint available for the specific address depending on the type of mint such as pre sale and public sale
    ///@dev It is used to calculate the number of free token available for the specific address.It is used as we have different number of free mints for different whitelisting and public sale.
    ///@param maxFreeMintAmount is the maximum amount of tokens available to mint free.
    ///@return it returns the number of free tokens available to mint,in type uint256, for the senders address.
    function getFreeMintAvailableAmount(uint256 maxFreeMintAmount,uint8 isWhitelist)
        private
        view
        returns (uint256)
    {
        uint256 currentMintAmount = mintedList[msg.sender];
        if (maxFreeMintAmount > currentMintAmount) {
            uint256 freeMintAvailable=maxFreeMintAmount - currentMintAmount;
            if((isWhitelist==1&&whitelistOFreeMinted<whitelistOLimit)){
                
                if(freeMintAvailable<whitelistOLimit-whitelistOFreeMinted){
                    return freeMintAvailable;
                }
                else{
                    return(whitelistOLimit-whitelistOFreeMinted);
                }
                    
            }
            else if((isWhitelist==2&&whitelistLFreeMinted<whitelistLLimit)){
                
                if(freeMintAvailable<whitelistLLimit-whitelistLFreeMinted){
                    return freeMintAvailable;
                }
                else{
                    return(whitelistLLimit-whitelistLFreeMinted);
                }
                    
            }
            else if((isWhitelist==0&&publicFreeMinted<publicFreeLimit)){

                if(freeMintAvailable<publicFreeLimit-publicFreeMinted){
                    return freeMintAvailable;
                }
                else{
                    return(publicFreeLimit-publicFreeMinted);
                }
            }
            else{
                return 0;
            }
            
        } else {
            return 0;
        }
    }

    /// @notice It is use to allow mint for the adresses added in whitelist
    /// @dev Since we have two whitelist,we calculate there free mint avialble depending on the whitelist and call the private mint function.Cannot break further as free mints are variable to type of sale
    /// @param _mintAmount is the quantity of tocken to mint
    function preSaleMint(uint8 _mintAmount) preConditions(_mintAmount) public payable {
       
        require(onlyWhiteListed,"Pre sale is not active currently");
       
        uint256 ownerTokenCount = mintedList[msg.sender];
        require(_mintAmount+ownerTokenCount<= nftPerAddressLimitO,"Max lmit of tokens exceeded for Whitelists");

        require(isWhiteListedO(msg.sender),"This Adresses is not whitelisted, You can Mint Maestro's Mix in Public Sale");
        if (isWhiteListedO(msg.sender)) {
            require(ownerTokenCount < nftPerAddressLimitO,"Max lmit of tokens exceeded for OG list");
            uint256 freeMintAvailable = getFreeMintAvailableAmount(
                nftPerAddressLimitFreeO,1
            );
            // require(freeMintAvailable+whitelistFreeMinted<=500,"White list free mint are over");
            mint(_mintAmount,msg.value,freeMintAvailable,1);
           
        }
}

    /// @notice It is use to allow mint for the adresses added in whitelist
    /// @dev Since we have two whitelist,we calculate there free mint avialble depending on the whitelist and call the private mint function.Cannot break further as free mints are variable to type of sale
    /// @param _mintAmount is the quantity of tocken to mint
    function preSaleMintLimited(uint8 _mintAmount) preConditions(_mintAmount) public payable {
       
        require(onlyWhiteListed,"Pre sale is not active currently");
       
        uint256 ownerTokenCount = mintedList[msg.sender];
        require(_mintAmount+ownerTokenCount<= nftPerAddressLimitL,"Max lmit of tokens exceeded for Whitelists");

        require(isWhiteListedL(msg.sender),"This Adresses is not whitelisted, You can Mint Maestro's Mix in Public Sale");
        if (isWhiteListedL(msg.sender)) {
            require(ownerTokenCount < nftPerAddressLimitL,"Max lmit of tokens exceeded for OG list");
            uint256 freeMintAvailable = getFreeMintAvailableAmount(
                nftPerAddressLimitFreeL,2
            );
            // require(freeMintAvailable+whitelistFreeMinted<=500,"White list free mint are over");
            mint(_mintAmount,msg.value,freeMintAvailable,2);
           
        }
}

    /// @notice It is use to allow mint for the public sale
    /// @dev Use in public sale.Can also add a check of boolean onlyPulicSale in order to make it discrete with onlyWhiteListed.Cause as of now when whitelisting is off,public sales gets active immediately.Can also add lazy minting for optimization
    /// @param _mintAmount is the quantity of tocken to mint
    function publicMint(uint8 _mintAmount) preConditions(_mintAmount) public payable {
       
        require(publicSale,"Public sale is currently inactive");
        //require(_mintAmount <= nftPerAddressLimitPublic,"Mint amount should be greater than 0");
        uint256 ownerTokenCount = mintedList[msg.sender];
        require(_mintAmount+ownerTokenCount <= nftPerAddressLimitPublic,"Max lmit of tokens exceeded for public sale");

        uint256 freeMintAvailable = getFreeMintAvailableAmount(
            nftPerAddressLimitFreePublic,0
        );

        // require(freeMintAvailable+publicFreeMinted<=1000,"Public free mint is over free");

         mint( _mintAmount,msg.value,freeMintAvailable,0);
    }

    function mintOwner(uint256 _mintAmount) public onlyOwner {
         _safeMint(msg.sender, _mintAmount);
    }

    /// @notice it stops/resume the whitelisting minting process
    /// @dev it is to stop/resume the whitelisting minting process.When passed false public mint will be open
    /// @param _state is the boolean to whther resume or pause the whitelisting minting process or public mint.
    function setOnlyWhiteListed(bool _state) public onlyOwner {
        onlyWhiteListed = _state;
    }

    /// @notice check if the address is in whitelisted og list
    /// @dev use to check if address is in whitelisted og list
    /// @param _user is the address of wallet to check
    /// @return it returns the boolen,true if address exist in the whitelist og list
    function isWhiteListedO(address _user) public view returns (bool) {
        bool userIsWhitelisted = whitelistedAddressesO[_user];
        return userIsWhitelisted;
    }

    /// @notice check if the address is in whitelisted og list
    /// @dev use to check if address is in whitelisted og list
    /// @param _user is the address of wallet to check
    /// @return it returns the boolen,true if address exist in the whitelist og list
    function isWhiteListedL(address _user) public view returns (bool) {
        bool userIsWhitelisted = whitelistedAddressesL[_user];
        return userIsWhitelisted;
    }

    ///@notice add number of whitelisted addresses in OG List
    ///@dev It takes an array of addreses and add them into mapping of whitelistedO.Istead of taking them in array we can use merkle tree
    ///@param whiteListAdreses is array of type adresses where all the whitelisted addreses are stored
    function addWhiteListAddresesO(address[]memory whiteListAdreses)public onlyOwner{
        for(uint16 i=0;i<whiteListAdreses.length;i++){
            whitelistedAddressesO[whiteListAdreses[i]]=true;
        }
    }

    ///@notice add number of whitelisted addresses in OG List
    ///@dev It takes an array of addreses and add them into mapping of whitelistedO.Istead of taking them in array we can use merkle tree
    ///@param whiteListAdreses is array of type adresses where all the whitelisted addreses are stored
    function addWhiteListAddresesL(address[]memory whiteListAdreses)public onlyOwner{
        for(uint16 i=0;i<whiteListAdreses.length;i++){
            whitelistedAddressesL[whiteListAdreses[i]]=true;
        }
    }

    ///@notice add number of whitelisted addresses in L List
    ///@dev It takes an array of addreses and add them into mapping of whitelistedL.Istead of taking them in array we can use merkle tree
    ///@param whiteListAdreses is array of type adresses where all the whitelisted addreses are stored
    
    /// @notice it removes the address from whitelist Og list
    /// @dev it removes the address from whitelist Og list.Could be removed in future due  to high gass fee
    /// @param _user is the address of wallet to be removed from whitelist Og list
    function removeWhitelistUsersO(address _user) public onlyOwner {
        // Validate the caller is already part of the whitelist.
        require(
            whitelistedAddressesO[_user],
            "Error: Sender is not whitelisted"
        );
        // Set whitelist boolean to false.
        whitelistedAddressesO[_user] = false;
        
    }

    
    ///@notice To set the number of token allowed to free mint in OG whitelist per address
    ///@dev set the number of token allowed to free mint in OG list
    ///@param _nftPerAddressLimitFreeO of type uint8 is the number of free tokens allowed to mint in OG whitelist
    function setNftPerAddressLimitFreeO (uint8 _nftPerAddressLimitFreeO) public onlyOwner{
       nftPerAddressLimitFreeO=_nftPerAddressLimitFreeO;
       
    }
    
   

    ///@notice To set the total number of token allowed to mint in OG whitelist per address
    ///@dev set the total number of token allowed to mint in OG list per address
    ///@param _nftPerAddressLimitO of type uint8 is the total number of tokens allowed to mint in OG whitelist per address
    function setNftPerAddressLimitO (uint8 _nftPerAddressLimitO) public onlyOwner{
        nftPerAddressLimitO=_nftPerAddressLimitO;
    }

     ///@notice To set the number of token allowed to free mint in public sale per address
    ///@dev set the number of token allowed to free mint in public sale per address
    ///@param _nftPerAddressLimitFreePublic of type uint8 is the number of free tokens allowed to mint in public sale per address
    function setNftPerAddressLimitFreePublic (uint8 _nftPerAddressLimitFreePublic) public onlyOwner{
        nftPerAddressLimitFreePublic=_nftPerAddressLimitFreePublic;
    }

    ///@notice To set the total number of token allowed to mint in public sale per address
    ///@dev set the total number of token allowed to mint in public sale per address
    ///@param _nftPerAddressLimitPublic of type uint8 is the total number of tokens allowed to mint in public sale per address
    function setNftPerAddressLimitPublic(uint8 _nftPerAddressLimitPublic) public onlyOwner{
        nftPerAddressLimitPublic=_nftPerAddressLimitPublic;
    }

    /// @notice Gives the base uri for tocken
    /// @dev use for the BaseUri setup at the time of initialization
    /// @return base uri of tockens on ipfs in string
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }
    /// @notice gives the token uri of specific token
    /// @dev it is to give us the token uri when minted an nft
    /// @param tokenId is the index of the token for which uri has to return
    /// @return it returns the uri of specific token
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        if (revealed == false) {
            return notRevealedUri;
        }

        string memory currentBaseURI = _baseURI();
        if(bytes(currentBaseURI).length > 0){
                return string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        baseExtension
                    )
                );
        }else{
                return "";
            }
    }

    /// @notice reveal the nft art
    /// @dev set the reveal to true inorder to reveal nft art.
    function reveal() public onlyOwner {
        revealed = true;
    }

    /// @notice set the cost for paid mint
    /// @dev it is to set the cost for the tokens minted in paid mint
    /// @param _newCost is the new cost to set for the paid mint
    function setCost(uint256 _newCost) public onlyOwner {
        cost = _newCost;
    }

    /// @notice set the max amount of token that can be minted by a simgle wallet
    /// @dev it is to set max amount of token that can be minted by a simgle wallet
    /// @param _newmaxMintAmount is the new max amount that a single wallet can mint totally
    function setmaxMintAmount(uint8 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    /// @notice it sets the uri for the image to show when tokens are not revealed
    /// @dev it is to set uri of json that has details to show along with image when the tokens are not revealed
    /// @param _notRevealedURI is the new uri of json for the metadata when tokens are not revealed
    function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
        notRevealedUri = _notRevealedURI;
    }

    /// @notice it sets the uri for the data including images,description to show when tokens are  revealed
    /// @dev it is to set domain uri of json metadata that has details to show along with image when the tokens are revealed
    /// @param _newBaseURI is the new domain uri of json for the metadata when tokens are  revealed
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    /// @notice it sets the extension of file containing metadata
    /// @dev it is to set file extension of metadata that has details to show along with image when the tokens are not revealed
    /// @param _newBaseExtension is the new extension of the metadata file
    function setBaseExtension(string memory _newBaseExtension)
        public
        onlyOwner
    {
        baseExtension = _newBaseExtension;
    }

    /// @notice it stops/resume wallet from minting.
    /// @dev it is to stop/resume the minting process.Could be used when system is compromised.
    /// @param _state is the boolean to whther resume or pause the minting process.
    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    /// @notice it is to withraw funds from the paid mint
    /// @dev it withdraws the fund from minting to the wallet of owner
    function withdraw() public payable onlyOwner {
        (bool os, ) = payable(owner()).call{value: address(this).balance}("");
        require(os);
    }

    /// @notice it to get track of public mint minted.
    /// @dev it to get track of public mint minted.
    function getPublicSaleAmount() public view onlyOwner returns (uint256){
    return publicFreeMinted;
    }
    /// @notice it to get track of pres sale mint minted.
    /// @dev it to get track of presale mint minted.
    function getPreSaleAmount() public view onlyOwner returns (uint256){
    return whitelistFreeMinted;
    }
    /// @notice it to track addresses that mints and thier amount
    /// @dev it is added to stop addresses from selling and minting again
    /// @param wallet is the wallet addr of minter
    function getMintedAmountByWallet(address wallet) public view returns (uint8){
    return mintedList[wallet];
    }
    /// @notice it sets the paid mint amount
    /// @dev it is to set the cap on paid mint
    /// @param paidMintLim is the uint256 to set paid mint amount limit
    function setPaidMintLimit(uint256 paidMintLim)
        public
        onlyOwner
    {
        paidMintedLimit=paidMintLim;
    }
}
