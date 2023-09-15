import { PartialType } from '@nestjs/mapped-types';
import { CreateVersionDto } from './create-version.dto';

export class UpdateVersioneDto extends PartialType(CreateVersionDto) {}
