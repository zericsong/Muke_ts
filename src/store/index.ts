import { defineStore, createPinia } from 'pinia'
import axios from 'axios';
import { testData, testPosts } from '@/testData'


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
    posts: testPosts,
    //user: { isLogin: false },
    user: { isLogin: true, name: 'viking', columnId: 1 }
  }),
  getters: {
    biggerColumnLen: (state) => state.columns.filter(c => c._id > 2).length,
    getColumnById: (state) => (id: number) => state.columns.find(c => c._id === id),
    getPostsByCid: (state) => (cid: number) => state.posts.filter(post => post.columnId === cid)
  },
  actions: {
    login() {
      this.user = { isLogin: true , name: "viking"}
    },
    createPost(newPost: PostProps) {
      this.posts.push(newPost)
    },
    fetchColumns() {
      axios.get('/columns')
        .then(resp => (this.columns.push(...resp.data.data.list)) )
      console.log(this.columns)
    }
  },
})