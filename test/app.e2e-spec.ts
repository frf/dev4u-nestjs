import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  let token;

  beforeAll((done) => {
    request(app)
      .post('/auth/login')
      .send({
        email: 'nutrixxx@nutdiet.com.br',
        password: '123456',
      })
      .end((err, response) => {
        token = response.body.token; // save the token!
        done();
      });
  });

  describe('GET /', () => {
    // token not being sent - should respond with a 401
    test('It should require authorization', () => {
      return request(app)
        .get('/')
        .then((response) => {
          expect(response.status).toBe(401);
        });
    });
    // send the token - should respond with a 200
    test('It responds with JSON', () => {
      return request(app)
        .get('/')
        .set('Authorization', `Bearer ${token}`)
        .then((response) => {
          expect(response.status).toBe(200);
          expect(response.type).toBe('application/json');
        });
    });
  });
});
