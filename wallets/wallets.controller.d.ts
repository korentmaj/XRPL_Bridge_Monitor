import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { WalletDto } from './dto/wallet.dto'; // Create a DTO for wallet data transfer

@Controller('wallets')
export class WalletsController {
  @Get()
  findAll(): string {
    return 'Get all wallets';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Get wallet with ID ${id}`;
  }


