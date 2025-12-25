type Post = {
  _id?: string | object;
  id: number;
  title: string;
  dateTime: string;
  postBody: string;
  likes?: number;
  disLikes?: number;
  comments?: string[];
  __v?: number;
  userId?: number;
};

type Props = {
  posts: Post[];
};

type postProps = {
  post: Post;
};
