require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Z6Pub7d-sTA66fyKree2Do3In-NvX9FP",
      accounts: [
        "f056373e50e0a92cba774f54b376563af02fc337b82e6bc67fc42d92efd1818c",
      ],
    },
  },
};
