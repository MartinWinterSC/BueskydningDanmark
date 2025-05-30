import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

// Applicable pages
import CommunityMainView from '../views/community/CommunityMainView.vue'
    import NewsView from '../views/community/NewsView.vue'
    import ArticlesView from '../views/community/ArticlesView.vue'
    import ArticlesPostView from '../views/community/ArticlesPostView.vue'
    import ForumView from '../views/community/ForumView.vue'

import CalendarMainView from '../views/calendar/CalendarMainView.vue'

import EquipmentView from '../views/EquipmentView.vue'

import EliteMainView from '../views/elite/EliteMainView.vue'
  import NationalTeamOverviewView from '../views/elite/NationalTeamsOverviewView.vue'
    import NationalTeamView from '../views/elite/NationalTeamView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    
    //Fællesskab sider
    {
      path: '/communityMainView',
      name: 'communityMainView',
      component: CommunityMainView,
    },
    {
      path: '/newsView',
      name: 'newsView',
      component: NewsView,
    },{
      path: '/articlesView',
      name: 'articlesView',
      component: ArticlesView,
    },
    {
      path: '/articlesPostView',
      name: 'articlesPostView',
      component: ArticlesPostView,
    },{
      path: '/ForumView',
      name: 'ForumView',
      component: ForumView,
    },

    // Kalender side
    {
      path: '/CalendarMainView',
      name: 'CalendarMainView',
      component: CalendarMainView,
    },
    
    // Bredde sider
    {
      path: '/EquipmentView',
      name: 'EquipmentView',
      component: EquipmentView,
    },
    
    // Elite sider
    {
      path: '/EliteMainView',
      name: 'EliteMainView',
      component: EliteMainView,
      props:true,
    },
    {
      path: '/NationalTeamOverviewView/:id',
      name: 'NationalTeamOverviewView',
      component: NationalTeamOverviewView,
      props: true,
    },
    {
      path: '/NationalTeamView/:id',
      name: 'NationalTeamView',
      component: NationalTeamView,
      props: true,
    },
  ],
})

export default router
