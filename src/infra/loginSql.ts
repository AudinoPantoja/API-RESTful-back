import User from '../models/userModel';

export class GetLoginSql {
  async getLoginSql(userName: string) : Promise<User | null> {
    const user = await User.findOne({ where: { userName } });
    return user;
  }
}
