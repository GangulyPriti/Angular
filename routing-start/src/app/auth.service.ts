export class AuthService {
  loogedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loogedIn)
        }, 800);
      }
    );
    return promise;
  }
  logIn() {
    this.loogedIn = true;
  }
  logOut() {
    this.loogedIn = false;
  }
}
