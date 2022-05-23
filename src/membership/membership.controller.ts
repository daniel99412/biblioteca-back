import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MembershipDto } from './dto/membership.dto';
import { MembershipService } from './membership.service';

@Controller('membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Get()
  async findAll() {
    return this.membershipService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.membershipService.findById(id);
  }

  @Post()
  async create(@Body() dto: MembershipDto) {
    return this.membershipService.save(dto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: MembershipDto) {
    return this.membershipService.update(id, dto);
  }
}
