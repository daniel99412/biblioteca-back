import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB, DB_HOST, DB_PORT, DB_PWD, DB_USER } from './config/constants';
import { EmployeeModule } from './employee/employee.module';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { MembershipModule } from './membership/membership.module';
import { VisitRecordModule } from './visit-record/visit-record.module';
import { LoanModule } from './loan/loan.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PWD),
        database: configService.get<string>(DB),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: false,
      }),
      inject: [ConfigService],
    }),
    EmployeeModule,
    UserModule,
    BookModule,
    MembershipModule,
    VisitRecordModule,
    LoanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
