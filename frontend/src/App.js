import './App.css';
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider"
import { loadContract } from "./utils/load-contract";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useEffect,useState} from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/home";

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  const[balance,setBalance] = useState(null);
  const setAccountListener = (provider) => {
    provider.on("accountsChanged", (accounts) => setAccount(accounts[0]));
  };
useEffect(() => {
  const loadProvider = async () => {
    const provider = await detectEthereumProvider();
    const contract = await loadContract("Funder", provider);
    if (provider) {
      setAccountListener(provider);
      provider.request({ method: 'eth_requestAccounts' });
      setWeb3Api({
        web3: new Web3(provider),
        provider,
        contract,
      });
    } else {
      console.log("Please install MetaMask!");
    }
  }

  loadProvider();
})

useEffect(() => {
  const loadBalance = async () => {
    const { contract, web3 } = web3Api;
    const balance = await web3.eth.getBalance(contract.address);
    setBalance(web3.utils.fromWei(balance, "ether"));
  };
  web3Api.contract && loadBalance();
}, [web3Api]);

const tranferFund = async () => {
  const { contract, web3 } = web3Api;
 await contract.transfer({ from: account, value: web3.utils.toWei("2", "ether") });
}
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
  </Router>
    </div>
  );
}

export default App;
