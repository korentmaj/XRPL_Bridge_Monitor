const axios = require('axios');
const Wallet = require('./wallet.model');

// Create a new wallet
exports.createWallet = async (req, res) => {
  const { address, label } = req.body;

  try {
    const wallet = await Wallet.create({ address, label });
    res.status(201).json(wallet);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create wallet' });
  }
};

// Get all wallets
exports.getAllWallets = async (req, res) => {
  try {
    const wallets = await Wallet.find();
    res.json(wallets);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get wallets' });
  }
};

// Get a single wallet by address
exports.getWalletByAddress = async (req, res) => {
  const { address } = req.params;

  try {
    const wallet = await Wallet.findOne({ address });
    if (!wallet) {
      res.status(404).json({ message: 'Wallet not found' });
    } else {
      res.json(wallet);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to get wallet' });
  }
};

