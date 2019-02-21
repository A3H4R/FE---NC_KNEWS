import axios from 'axios';

const BASE_URL = 'https://ma-nc-knews.herokuapp.com/api';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async topic => {
  const URL = topic
    ? `${BASE_URL}/topics/${topic}/articles`
    : `${BASE_URL}/articles`;

  const { data } = await axios.get(URL);
  return data.articles;
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
  const add = { inc_votes: num };
  console.log(add);
  console.log(article_id + 'AI   ', comment_id + 'CI   ', add + '  data');
  axios
    .patch(`${BASE_URL}/articles/${article_id}/comments/${comment_id}`, { add })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
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

export const postNewComment = (article_id, data) => {
  console.log(article_id);
  axios
    .post(`${BASE_URL}/articles/${article_id}/comments`, data)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteArticle = article_id => {
  console.log(article_id);
  axios
    .delete(`${BASE_URL}/articles/${article_id}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteComment = (article_id, comment_id) => {
  console.log(article_id + 'yoooooo' + comment_id);
  axios
    .delete(`${BASE_URL}/articles/${article_id}/comments/${comment_id}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
