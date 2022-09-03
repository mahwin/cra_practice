export default class User {
  public id = 1;
  public name = "유석";
  public email = "asd@asd.com";
  public level = 10; // 1~10
  public gender = "MALE";
  public age = 20;

  public isAdult() {
    return this.age > 10;
  }
  public getAdultLabel() {
    return this.isAdult() ? "어른" : "어린이";
  }
}
