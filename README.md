# Simple Reddit Clone

This project is a simplified version of Reddit, featuring subreddit timelines, user subscriptions, post submissions, upvotes, comments, and user profiles.

## Features

1. **Subreddit Timeline:** Posts are ordered by recency of creation time.
2. **User Subscriptions:** Users can subscribe to and submit posts to subreddits.
3. **Upvotes and Comments:** Each post can receive upvotes and comments.
4. **User Profile:** Displays all the subreddits a user subscribes to and all upvotes they have received.

## REST API Design

### Subreddit Timeline

**Endpoint:** `GET /subreddits/{subreddit_id}/posts`

**Description:** Retrieve posts from a specific subreddit ordered by the recency of their creation time.

**Parameters:**
- `subreddit_id` (required): ID of the subreddit
- `limit` (optional): Number of posts to retrieve
- `offset` (optional): Offset for pagination

### User Subscription to Subreddits

**Endpoint:** `POST /users/{user_id}/subscriptions`

**Description:** Subscribe a user to a subreddit.

**Parameters:**
- `user_id` (required): ID of the user
- `subreddit_id` (required): ID of the subreddit to subscribe to

**Endpoint:** `DELETE /users/{user_id}/subscriptions/{subreddit_id}`

**Description:** Unsubscribe a user from a subreddit.

**Parameters:**
- `user_id` (required): ID of the user
- `subreddit_id` (required): ID of the subreddit to unsubscribe from

### Submit Posts to Subreddits

**Endpoint:** `POST /subreddits/{subreddit_id}/posts`

**Description:** Submit a new post to a subreddit.

**Parameters:**
- `subreddit_id` (required): ID of the subreddit
- `user_id` (required): ID of the user submitting the post
- `title` (required): Title of the post
- `content` (required): Content of the post

### Upvote Posts

**Endpoint:** `POST /posts/{post_id}/upvote`

**Description:** Upvote a post.

**Parameters:**
- `post_id` (required): ID of the post
- `user_id` (required): ID of the user upvoting the post

### Comment on Posts

**Endpoint:** `POST /posts/{post_id}/comments`

**Description:** Add a comment to a post.

**Parameters:**
- `post_id` (required): ID of the post
- `user_id` (required): ID of the user commenting
- `content` (required): Content of the comment

### User Profile

**Endpoint:** `GET /users/{user_id}/profile`

**Description:** Retrieve the user's profile, including subscribed subreddits and received upvotes.

**Parameters:**
- `user_id` (required): ID of the user

## Database Model

### Entities and Relationships

1. **User**
   - `user_id` (Primary Key)
   - `username`
   - `email`
   - `password_hash`

2. **Subreddit**
   - `subreddit_id` (Primary Key)
   - `name`
   - `description`

3. **Subscription**
   - `subscription_id` (Primary Key)
   - `user_id` (Foreign Key to User)
   - `subreddit_id` (Foreign Key to Subreddit)

4. **Post**
   - `post_id` (Primary Key)
   - `subreddit_id` (Foreign Key to Subreddit)
   - `user_id` (Foreign Key to User)
   - `title`
   - `content`
   - `creation_time`

5. **Upvote**
   - `upvote_id` (Primary Key)
   - `user_id` (Foreign Key to User)
   - `post_id` (Foreign Key to Post)

6. **Comment**
   - `comment_id` (Primary Key)
   - `post_id` (Foreign Key to Post)
   - `user_id` (Foreign Key to User)
   - `content`
   - `creation_time`

## Potential Issues and Solutions

### Performance

**Problem:** High traffic on popular subreddits can cause delays in loading the timeline due to the large volume of posts.

**Solution:** Implement caching strategies for frequently accessed subreddits and use pagination (also known as paging) to load posts incrementally.

### Security

**Problem:** Unauthorized access to user data and actions (e.g., upvoting, commenting) due to inadequate authentication and authorization checks.

**Solution:** Implement robust authentication (e.g., OAuth or FireBase) and authorization mechanisms to ensure users can only perform actions they are permitted to and can only access their own data.

**Problem:** Unauthorized access to user data and actions (e.g., upvoting, commenting, unauthorized login) due to inadequate authentication and authorization checks.

**Solution:** Implement robust authentication (e.g., OAuth or FireBase) and authorization mechanisms to ensure users can only perform actions they are permitted to and can only access their own data.
