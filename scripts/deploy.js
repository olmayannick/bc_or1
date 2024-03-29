const { hexStripZeros } = require("ethers/lib/utils");

const main = async () => {

const[deployer] = await hre.ethers.getSigners();
const accountBalance = await deployer.getBalance();

console.log("hesap sozlesmelerini dagitiyor: ", deployer.address);
console.log("hesap bakiyesi: ", accountBalance.toString());

const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

console.log("WavePortal address: ", waveContract.address);
};


const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();



