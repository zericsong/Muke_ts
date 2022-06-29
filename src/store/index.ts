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
    getColumnById: (state) => (id: string) => {
      return state.columns.find(c => c._id === id)
    },
    getPostsByCid: (state) => (cid: string) => {
      return state.posts.filter(post => post.column === cid)
    }
  },
  actions: {
    login() {
      this.user = { isLogin: true , name: "viking"}
    },
    createPost(newPost: PostProps) {
      this.posts.push(newPost)
    },
    async fetchColumns() {
      await axios.get('/columns').then(resp => {
        return this.columns.push(...resp.data.data.list)
      })
    },
    fetchColumn(cid: string) {
      axios.get(`/columns/${cid}`).then(resp => (this.columns = [resp.data.data])
      )
    },
    fetchPosts(cid: string) {
      axios.get(`/columns/${cid}/posts`).then(resp => (this.posts = resp.data.data.list)
      )
    }
  },
})