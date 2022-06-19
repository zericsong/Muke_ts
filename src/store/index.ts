import { defineStore } from 'pinia'
import { testData, testPosts, ColumnProps, PostProps } from '@/testData'
import { PropType } from "vue";
import { createPinia } from "pinia";

const pinia = createPinia();

export default pinia;


interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: {
    isLogin: boolean;
    name?: string;
    id?: number;
    columnId?: 1;
  };
}


export const useStore = defineStore('mainStore', {
  // arrow function recommended for full type inference
  state: () : GlobalDataProps => ({   //()立即返回函数，省略了return{...}
    // all these properties will have their type inferred automatically
    columns: testData,
    posts: testPosts,
    //user: { isLogin: false },
    user: { isLogin: true, name: 'viking', columnId: 1 }
  }),
  getters: {
    biggerColumnLen: (state) => state.columns.filter(c => c.id > 2).length,
    getColumnById: (state) => (id: number) => state.columns.find(c => c.id === id),
    getPostsByCid: (state) => (cid: number) => state.posts.filter(post => post.columnId === cid)
  },
  actions: {
    login() {
      this.user = { isLogin: true , name: "viking"}
    },
    createPost(newPost: PostProps) {
      this.posts.push(newPost)
    }
  },
})

