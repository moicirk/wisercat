import { Criteria } from './criteria';

export class Filter {
  constructor(
    public id: number | null,
    public name: string,
    public selection: number,
    public criteria: Criteria[]
  ) {}

  static from(filter: Filter): Filter {
    const copyFilter = new Filter(null, '', 1, []);
    copyFilter.id = filter.id;
    copyFilter.name = filter.name;
    copyFilter.selection = filter.selection;
    copyFilter.criteria = filter.criteria;

    return copyFilter;
  }
}
