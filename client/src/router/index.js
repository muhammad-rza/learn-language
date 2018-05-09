import Vue from 'vue'
import Router from 'vue-router'
// import ContentDefault from '@/components/layouts/Content/Default'

Vue.use(Router);


const ContentDefault = () => import('@/components/layouts/Content/Default');

// import ContentDefault from '@/components/layouts/Content/Default';

const Vocabulary = () => import('@/components/Vocabulary/Index.vue');

const DeletedVocabulary = () => import('@/components/Vocabulary/Deleted.vue');

const DoneVocabulary = () => import('@/components/Vocabulary/Done.vue');


const SubjectSimple = () => import('@/components/Subject/SubjectSimple.vue');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ContentDefault',
      component: ContentDefault,
      children: [
        {
          path: 'vocabulary/',
          name: 'IndexVocabulary',
          component: Vocabulary,

          children: [
            {
              path: 'deleted',
              name: 'DeletedVocabulary',
              component: DeletedVocabulary,
            },
            {
              path: 'done',
              name: 'DoneVocabulary',
              component: DoneVocabulary,
            }
          ]
        },
        {
          path: 'subject',
          name: 'SubjectSimple',
          component: SubjectSimple,
        },


      ]
    }
  ]
})
