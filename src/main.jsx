import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./page/LandingPage.jsx";
import QuizPage from "./page/QuizPage.jsx";
import ResultPage from "./page/ResultPage.jsx";
import DownloadMUZA from "./page/DownloadMUZA.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
  {
    path: "/result/:innovatorType",
    element: <ResultPage />,
  },
  {
    path: "/download-muza",
    element: <DownloadMUZA />,
  },
]);
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon];
const projectId = "927a43721d99d99685616aa6b9f0ed9a";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RouterProvider router={router} />
    </WagmiConfig>
    <Web3Modal
      projectId={projectId}
      ethereumClient={ethereumClient}
      explorerRecommendedWalletIds={[
        "47bb562043e570200267c79b256c5fc4e005bde1d5628db9205f072243329fbf",
      ]}
    />
  </React.StrictMode>
);
