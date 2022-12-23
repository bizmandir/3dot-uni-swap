import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";
import userStorageData from "./UserStorageData.json";

//BOOTOKEN
export const BooTokenAddress = "0x6A47346e722937B60Df7a1149168c0E76DD6520f";
export const BooTokenABI = booToken.abi;

//LIFE TOken
export const LifeTokenAddress = "0x7A28cf37763279F774916b85b5ef8b64AB421f79";
export const LifeTokenABI = lifeToken.abi;

//SINGLE SWAP TOKEN
export const SingleSwapTokenAddress =
  "0x6A47346e722937B60Df7a1149168c0E76DD6520f";
export const SingleSwapTokenABI = singleSwapToken.abi;

// SWAP MULTIHOP
export const SwapMultiHopAddress = "0xB7ca895F81F20e05A5eb11B05Cbaab3DAe5e23cd";
export const SwapMultiHopABI = swapMultiHop.abi;

//IWETH
export const IWETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const IWETHABI = IWETH.abi;

//USER STROAGE DATA
export const userStorageDataAddress =
  "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318";
export const userStorageDataABI = userStorageData.abi;
