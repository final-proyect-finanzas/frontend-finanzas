export class Company {
  constructor(
    public name: string,
    public address: string,
    public email: string,
    public phone: string,
    public username: string,
    public password: string,
    public roles: string[]
  ) {}
}
