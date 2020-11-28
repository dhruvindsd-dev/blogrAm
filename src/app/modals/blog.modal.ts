export class blogModal {
  serverUrl = 'http://127.0.0.1:8000/';
  constructor(
    public id: number,
    public title: string,
    public subtitle: string,
    public content: string,
    public img: string,
    public date: Date,
    public user: { username: string; id: number },
    public tags: Tag[]
  ) {
    this.date = new Date(date);
    this.id = +id;
  }
}

export class Tag {
  constructor(public name: string, public id: number) {}
}
