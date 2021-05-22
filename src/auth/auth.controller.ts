import { JwtAuthGuard } from './guards/jwt-auth.guard';
import {
  Controller,
  Get,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import jwt_decode from 'jwt-decode';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('loadUserInfo')
  async loadUserInfo(@Req() req) {
    console.log('서버 헤더 ', req.headers);

    if (req.headers && req.headers) {
      const cookie_Info = jwt_decode(req.headers['vintage-auth-cookie']);
      const userId = cookie_Info['userId'];

      //userId로 정보를 찾아서 객체로 정보를 돌려주면
      //프론트단에서 정보를 추가해준다. 근데 이 정보를 전역적으로 관리를 해야하는데.
      //프론트 헤더쪽에서 관리를 해줘야하나?
      const result = await this.authService.loadUserInfo(userId);
      delete result.password;

      return result;
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res({ passthrough: true }) res) {
    const { accessToken, userInfo } = await this.authService.login(req.user);
    delete userInfo.password;

    const data = {
      accessToken,
      userInfo,
    };

    //인증받은 user 기반으로 쿠키 설정
    // res.cookie('vintage-auth-cookie', accessToken, { httpOnly: true });
    return data;
  }
}
