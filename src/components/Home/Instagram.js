import React, { useEffect, useState } from 'react';

function InstagramGrid() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const ACCESS_TOKEN = 'IGQWROZA3hsRGg2OFVRR2ZANcFY0UkVvODB2MkF2eGRBWHNUR21CelgxVGtOaV9YaDQtRUNlNjFPWHVkTVRLU1dEY19qWFRrSlFUY0ZA1NW41VVJRVjNDWFpDQUJCcGMwX1hTV0FDdnBybjZAXMGozWjNLNUI4THk3cGMZD'; // Replace with your access token
  const USER_ID = '1080474326801056'; // Replace with your numeric Instagram user ID

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${ACCESS_TOKEN}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.data) {
          // Limit to the latest 6 posts
          setPosts(data.data.slice(0, 6));
        } else {
          console.error('No data found:', data);
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [USER_ID, ACCESS_TOKEN]);

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <h2 className="pb-4 text-7xl font-light tracking-wide text-black">
          Latest Instagram Posts
        </h2>
      </div>
      {loading ? (
        <p style={styles.loadingText}>Loading Instagram posts...</p>
      ) : (
        <div style={styles.gridContainer}>
          {posts.map((post) => (
            <div key={post.id} style={styles.embedContainer}>
              {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
                <img
                  src={post.media_url}
                  alt={post.caption || 'Instagram Post'}
                  style={styles.image}
                />
              ) : post.media_type === 'VIDEO' ? (
                <video controls style={styles.video}>
                  <source src={post.media_url} />
                </video>
              ) : null}
              {post.caption && <p>{post.caption}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  // Your styles here
};

export default InstagramGrid;
