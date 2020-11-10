export class blogModal {
  serverUrl = 'http://127.0.0.1:8000/';
  constructor(
    public title: string,
    public subtitle: string,
    public content: string,
    public img: string,
    public date: Date,
    public username: string
  ) {
    this.date;
    this.img = this.serverUrl + this.img;
  }
}
