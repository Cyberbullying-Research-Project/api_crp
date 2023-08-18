import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { NarrativesModule } from './narratives/narratives.module';
import { PostsModule } from './posts/posts.module';
import { ResourcesModule } from './resources/resources.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [CategoriesModule, NarrativesModule, PostsModule, ResourcesModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
