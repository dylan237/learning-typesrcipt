import axios from "axios";

const url = "https://my-json-server.typicode.com/typicode/demo/comments/1";

interface todos {
  id: number;
  body: string;
  postId: number;
}

axios.get(url).then(res => {
  const { id, body, postId } = res.data as todos;
  fn(id, body, postId);
});

const fn = (id: number, body: string, postId: number) => {
  console.log(`
    id is '${id}'
    title is '${body}'
    completed is '${postId}'
  `);
};
