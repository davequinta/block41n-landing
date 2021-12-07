import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import abis from "../../contracts";
import addresses from "./addresses.json";

const web3 = new Web3(window.ethereum);
const lendingPool = new web3.eth.Contract(
  abis.LendingPool.abi,
  addresses.lendingPool
);
const assetToken = new web3.eth.Contract(
  abis.AssetToken.abi,
  addresses.stablecoin
);

//connects metamask
export const connectMetamask = async () => {
  return await web3.eth.requestAccounts();
};

// ask to install metamask if returns null
export const isWeb3Enabled = async () => {
  const provider = await detectEthereumProvider();
  if (provider) return provider;
  return null;
};

// deposit x amount of stablecoin to pool
export const depositOnLendingPool = async (amount) => {
  const accounts = await window.ethereum.request({method: "eth_accounts"});
  await assetToken.methods
    .approve(lendingPool.address, amount)
    .send({from: accounts[0]});
  await lendingPool.methods.deposit(amount).send({from: accounts[0]});
};

//change metamask to rsk network
export const changeWalletAddress = async () => {
  await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{chainId: "0x1F"}],
  });
};

//uint256 amount,
//uint256 interest,
//uint8 installmentNumber,
//uint8 installmentAmount,
//string recipient
//borrower must provide data(registerBorrower) to createLoan
export const createLoan = async ({
  amount,
  interest,
  installmentAmount,
  installmentNumber,
  recipient,
}) => {
  const accounts = await window.ethereum.request({method: "eth_accounts"});
  await lendingPool.methods
    .createLoan(
      amount,
      interest,
      installmentAmount,
      installmentNumber,
      recipient
    )
    .send({from: accounts[0]});
};

//string borrowerAddress,
//uint256 age,
//LaboralStatus status,
//uint256 income,
//uint256 activity,
//uint256 score,
//bool evidence
export const registerBorrower = async ({
  borrowerAddress,
  age,
  status,
  income,
  activity,
  score,
  evidence,
}) => {
  const accounts = await window.ethereum.request({method: "eth_accounts"});
  await lendingPool.methods
    .registerBorrower(
      borrowerAddress,
      age,
      status,
      income,
      activity,
      score,
      evidence
    )
    .send({
      from: accounts[0],
    });
};
