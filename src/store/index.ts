import { defineStore, createPinia } from 'pinia'
import axios from 'axios';


const pinia = createPinia();

export default pinia;

interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}
interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
}
export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}
export interface PostProps {
  _id: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: ImageProps;
  createdAt: string;
  column: string;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

export const useStore = defineStore('mainStore', {
  // arrow function recommended for full type inference
  state: () : GlobalDataProps => ({   //()立即返回函数，省略了return{...}
    // all these properties will have their type inferred automatically
    columns: [],
    posts: [],
    //user: { isLogin: false },
    user: { isLogin: true, name: 'viking', columnId: 1 }
  }),
  getters: {
    getColumnById: (state) => (id: string) => state.columns.find(c => c._id === id),
    getPostsByCid: (state) => (cid: string) => state.posts.filter(post => post.column === cid),
  },
  actions: {
    login() {
      this.user = { isLogin: true , name: "viking"}
    },
    createPost(newPost: PostProps) {
      this.posts.push(newPost)
    },
    async fetchColumns() {
      await axios.get(`/columns?currentPage=${currentPage}&pageSize=${pageSize}`).then(resp => (this.columns.push(...resp.data.data.list)) )
      console.log(this.columns)
    },
    fetchColumn() {
      axios.get(`/columns/{id}`).then(resp => {
        this.columns = [resp.data]
        console.log(this.columns)
      })
    },
    fetchPosts() {
      axios.get(`/columns/{id}/posts`).then(resp => {
        this.posts.push(...resp.data.data.list)
      })
    }
  },
})