import { Criteria } from './criteria';

export class Filter {
  constructor(
    public id: number | null,
    public name: string,
    public selection: number,
    public criteria: Criteria[]
  ) {}
}
