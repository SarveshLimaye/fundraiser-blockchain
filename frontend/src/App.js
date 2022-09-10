import './App.css';
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider"
import {useEffect,useState} from 'react';

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  const setAccountListener = (provider) => {
    provider.on("accountsChanged", (accounts) => setAccount(accounts[0]));
  };
useEffect(() => {
  const loadProvider = async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
      setAccountListener(provider);
      provider.request({ method: 'eth_requestAccounts' });
      setWeb3Api({
        web3: new Web3(provider),
        provider,
      });
    } else {
      console.log("Please install MetaMask!");
    }
  }

  loadProvider();
})
  return (
    <div className="App">
      <h1>First dapp</h1>
      <p>Account: {account}</p>
    </div>
  );
}

export default App;
