class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async register({ name, email, password }) {
    try {
      const user = await this.userRepository.getByEmail(email);
      if (user) {
        return {
          statusCode: 400,
          message: "Pengguna sudah ada",
        };
      }

      const createdUser = await this.userRepository.insert({
        name,
        email,
        password,
      });

      return {
        statusCode: 201,
        createdUser: createdUser,
        message: "berhasil membuat akun",
      };
    } catch (err) {
      return {
        statusCode: 500,
        createdUser: null,
        message: err,
      };
    }
  }

  async login({ email, password }) {
    try {
      const user = await this.userRepository.getByEmail(email);
      if (!user) {
        return { message: "user tidak terdaftar", statusCode: 400 };
      }

      if (password === user.password) {
        return { message: "berhasil login", user: user, statusCode: 200 };
      } else {
        return { message: "password salah", statusCode: 400 };
      }
    } catch (err) {
      return {
        statusCode: 500,
        message: err,
      };
    }
  }
}
module.exports = AuthService;
