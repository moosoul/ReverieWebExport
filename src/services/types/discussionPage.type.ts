export interface AttachedAsset {
  date: string;
  id: string;
  url: string;
}

export interface CreatorProfile {
  profile_url: string;
  user_id: string;
  username: string;
}

export interface LinkedPost {
  id: string;
  date: number;
  preview_path: string;
}

export interface Discussion {
  attached_assets: Array<AttachedAsset>;
  creator_profile: CreatorProfile;
  linked_posts: Array<LinkedPost>;
  published_time: number;
  title: string;
  caption: string;
  comment_count: number;
}

export interface Message {
  attached_assets: Array<AttachedAsset>;
  creator_profile: CreatorProfile;
  id: string;
  like_count: number;
  message_level: number;
  reply_count: number;
  reply_to_message_id: string | null;
  text: string;
  thread_id: string;
  timestamp: number;
  user_id: string;
}

export interface DiscussionPageProps {
  id: string;
  discussion: Discussion;
  messages: Array<Message>;
}

export interface CommentItemProps {
  discussionId: string;
  message: Message;
}
