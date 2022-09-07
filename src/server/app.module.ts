import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users.modeule';
import { User } from './models/user.entity';
import { AppController } from './controllers/app.controller';
import { LoginController } from './controllers/login.controller';
import { AppService } from './services/app.service';

@Module({
    /* should pass a NEXT.js server instance
        as the argument to `forRootAsync` */
    imports: [
        RenderModule.forRootAsync(
            Next({ dev: true }),
            /* null means that nest-next 
                should look for pages in root dir */
            { viewsDir: null }
        ),
        UsersModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'nest_test',
            entities: [User],
            synchronize: process.env.NODE_ENV !== 'production',
        }),        
    ],
    controllers: [
        AppController,
        LoginController
    ],
    providers: [AppService],
})
export class AppModule {}