# XRPL Bridge Service

XRPL Bridge is a powerful service that monitors wallets on the XRP Ledger, records payment transactions, and provides seamless wallet management. This service is designed to run on Node.js and optionally utilizes the NestJS framework. It operates on the XRPL Testnet.

## Introduction

XRPL Bridge is a service that allows you to monitor and manage digital wallets on the XRP Ledger. It provides the following features:

- CRUD operations for managing the wallets you want to monitor.
- Real-time subscription to the XRP Ledger for wallet activity.
- Recording of all payment transactions from monitored wallets to a persistent database.
- Recording of all payment transactions to monitored wallets to a persistent database.

## Prerequisites

- Node.js LTS (12.x or later)
- NPM (Node Package Manager)
- MongoDB (or any other database of your choice)
- XRP Ledger Testnet Account (for testing the subscription)

## Installation

1. Clone the repository from GitHub:

```bash
git clone https://github.com/your-username/xrpl-bridge.git
cd xrpl-bridge
