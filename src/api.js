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

export const updateVote = async (article_id, incVotes) => {
  const { data } = await axios.patch(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
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
