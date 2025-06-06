import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { Job } from './job.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Job])],
    controllers: [JobsController],
    providers: [JobsService],
})
export class JobsModule { }
