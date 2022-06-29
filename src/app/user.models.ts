export class User {
    value(value: any) {
      throw new Error('Method not implemented.');
    }
    public username: string | null;
    public email: string | null;
    public password: string | null;
    public street: string | null;
    public zip: string | null;
    public city: string | null;

    constructor(
      username: string,
        email: string,
        password: string,
        street: string,
        zip: string,
        city: string, 
    ) {
       this.username = username;
        this.email = email;
        this.password = password;
        this.street = street;
        this.zip = zip;
        this.city = city;
    }
}