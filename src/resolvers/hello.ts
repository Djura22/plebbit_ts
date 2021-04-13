import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return "Goodbye"
  }
  @Query(() => String)
  bonjour() {
    return "Au revoir"
  }
}