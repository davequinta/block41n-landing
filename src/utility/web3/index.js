import {ethers} from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import abis from "../../contracts";
import addresses from "./addresses.json";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner()
const lendingPool = new ethers.Contract(addresses.lendingPool, abis.LendingPool.abi, signer);

//connects metamask
export const connectMetamask = async () => {
  await window.ethereum.request({method: "eth_requestAccounts"});
};

// ask to install metamask if returns null
export const isWeb3Enabled = async () => {
  const provider = await detectEthereumProvider();
  if (provider) return provider;
  return null;
};

// deposit x amount of stablecoin to pool
export const depositOnLendingPool = async (amount) => {
  const assetToken = new ethers.Contract(addresses.stablecoin, abis.AssetToken.abi, signer);
  await assetToken.approve(lendingPool.address, amount);
  await lendingPool.deposit(amount);
};

//change metamask to rsk network
export const changeWalletAddress = async () => {
  await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{chainId: '0x1F'}],
  });
};

