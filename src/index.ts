import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/post";
import microConfig from './mikro-orm.config';

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  const post = orm.em.create(Post, {title: 'first post'});
  orm.em.persistAndFlush(post);
}

main().catch(err => {
  console.error(err);
});

console.log("Hello World");