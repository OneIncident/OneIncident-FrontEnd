export class Incident 
{
    constructor (
        public _id?: number,
        public name?: string,
        public date?: string,
        public status?: string,
        public location?: string,
        public priority?: number,
        public description?: string
        //make model identical with the backend
        //format the data
    ) {}

    public toString(): string
  {
    return `
    Incident
    ---------------------------------
    Name        : ${this.name}
    Date        : ${this.date}
    Status      : ${this.status}
    Location    : ${this.location}
    Priority    : ${this.priority}
    Description : ${this.description}
    ---------------------------------
    `;
  }
}

