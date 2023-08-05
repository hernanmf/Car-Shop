import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitudescontactoDto } from './create-solicitudescontacto.dto';

export class UpdateSolicitudescontactoDto extends PartialType(CreateSolicitudescontactoDto) {}
