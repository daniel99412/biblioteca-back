import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from 'src/book/book.service';
import { CopyController } from './copy.controller';
import { CopyEntity } from './copy.entity';
import { CopyService } from './copy.service';

@Module({
  imports: [TypeOrmModule.forFeature([CopyEntity])],
  providers: [CopyService],
  controllers: [CopyController],
})
export class CopyModule {}
