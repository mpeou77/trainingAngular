import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/posts.service';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostListComponent } from './components/post-list/post-list.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PostListComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    SharedModule
  ],
  providers: [
    PostsService,
    PostsResolver

  ]
})
export class SocialMediaModule { }
