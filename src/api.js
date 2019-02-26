import axios from 'axios';

const BASE_URL = 'https://ma-nc-knews.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async (topic, page, limit) => {
  const URL = topic
    ? `${BASE_URL}/topics/${topic}/articles/?limit=${limit}&p=${page}`
    : `${BASE_URL}/articles?limit=${limit}&p=${page}`;

  const { data } = await axios.get(URL);
  console.log(data);
  return data;
};

export const fetchUser = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
};

export const getArticleById = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};

export const getCommentsByArticleId = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
};

export const updateVote = async (article_id, comment_id, num) => {
  const { data } = await axios.patch(
    `${BASE_URL}/articles/${article_id}/comments/${comment_id}`,
    {
      inc_vote: num,
    }
  );
  return data.article;
  // const { data } = await axios.patch(
  //   `${BASE_URL}/articles/${article_id}/comments/${comment_id}`,
  //   { inc_votes: num }
  // );
  // return data.article;
};

export const postNewArticle = (topic, data) => {
  console.log(data);
  axios
    .post(`${BASE_URL}/topics/${topic}/articles`, data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export const postNewTopic = data => {
  console.log(data);
  axios
    .post(`${BASE_URL}/topics/`, data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export const postNewComment = async (article_id, data) => {
  return await axios
    .post(`${BASE_URL}/articles/${article_id}/comments`, data)
    .then(comment => {
      const newComment = comment.data.newComment;
      return newComment;
    });
};

export const deleteItem = async (article_id, comment_id) => {
  const URL = comment_id
    ? `${BASE_URL}/articles/${article_id}/comments/${comment_id}`
    : `${BASE_URL}/articles/${article_id}`;
  return await axios.delete(URL);
};

export const deleteComment = async (article_id, comment_id) => {
  return await axios.delete(
    `${BASE_URL}/articles/${article_id}/comments/${comment_id}`
  );
};
