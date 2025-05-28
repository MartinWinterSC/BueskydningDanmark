import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

// Applicable pages
import LandingView from '../views/LandingView.vue'

import CommunityMainView from '../views/community/CommunityMainView.vue'
    import NewsView from '../views/community/NewsView.vue'
    import ArticlesView from '../views/community/ArticlesView.vue'
    import ForumView from '../views/community/ForumView.vue'

import CalendarMainView from '../views/calendar/CalendarMainView.vue'

import EquipmentView from '../views/EquipmentView.vue'

import EliteMainView from '../views/elite/EliteMainView.vue'
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

    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    
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
    },{
      path: '/ForumView',
      name: 'ForumView',
      component: ForumView,
    },
    
    {
      path: '/CalendarMainView',
      name: 'CalendarMainView',
      component: CalendarMainView,
    },
    
  {
      path: '/EquipmentView',
      name: 'EquipmentView',
      component: EquipmentView,
    },
    
    {
      path: '/EliteMainView',
      name: 'EliteMainView',
      component: EliteMainView,
    },{
      path: '/NationalTeamView',
      name: 'NationalTeamView',
      component: NationalTeamView,
    },
  ],
})

export default router
