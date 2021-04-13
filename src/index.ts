import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/post";
import microConfig from './mikro-orm.config';
import express from 'express';

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const app = express();
  app.get('/', (_, res) => {
    res.send("Express Check");

  });
  
  app.listen(4000, () => {
    console.log('Server started on localhost:4000')
  });
  // //--- get all posts
  // const posts = await orm.em.find(Post, {});
  // //--- create post
  // const post = orm.em.create(Post, {title: 'first post'});
  // await orm.em.persistAndFlush(post);
}

main().catch(err => {
  console.error(err);
});

console.log("Hello World");