import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsService {
    constructor(
        @InjectRepository(Job)
        private jobRepository: Repository<Job>,
    ) { }

    create(createJobDto: CreateJobDto) {
        return this.jobRepository.save(createJobDto);
    }

    findAll() {
        return this.jobRepository.find();
    }

    findOne(id: number) {
        return this.jobRepository.findOne({ where: { id } });
    }

    async update(id: number, updateJobDto: UpdateJobDto) {
        await this.jobRepository.update(id, updateJobDto);
        return this.findOne(id);
    }

    async remove(id: number) {
        const job = await this.findOne(id);
        return this.jobRepository.remove(job);
    }
}
