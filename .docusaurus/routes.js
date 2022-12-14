import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/knowledgebase/blog',
    component: ComponentCreator('/knowledgebase/blog', 'ddd'),
    exact: true
  },
  {
    path: '/knowledgebase/blog/archive',
    component: ComponentCreator('/knowledgebase/blog/archive', '4c0'),
    exact: true
  },
  {
    path: '/knowledgebase/blog/tags',
    component: ComponentCreator('/knowledgebase/blog/tags', 'bf7'),
    exact: true
  },
  {
    path: '/knowledgebase/blog/tags/hello',
    component: ComponentCreator('/knowledgebase/blog/tags/hello', 'a81'),
    exact: true
  },
  {
    path: '/knowledgebase/blog/tags/patch-management',
    component: ComponentCreator('/knowledgebase/blog/tags/patch-management', '4a8'),
    exact: true
  },
  {
    path: '/knowledgebase/blog/tags/welcome',
    component: ComponentCreator('/knowledgebase/blog/tags/welcome', 'a11'),
    exact: true
  },
  {
    path: '/knowledgebase/blog/welcome',
    component: ComponentCreator('/knowledgebase/blog/welcome', '85b'),
    exact: true
  },
  {
    path: '/knowledgebase/markdown-page',
    component: ComponentCreator('/knowledgebase/markdown-page', 'be2'),
    exact: true
  },
  {
    path: '/knowledgebase/docs',
    component: ComponentCreator('/knowledgebase/docs', '21b'),
    routes: [
      {
        path: '/knowledgebase/docs/Backend/Load Balancer/Introduction',
        component: ComponentCreator('/knowledgebase/docs/Backend/Load Balancer/Introduction', '985'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/knowledgebase/docs/Backend/Python Backend/Basic Setup',
        component: ComponentCreator('/knowledgebase/docs/Backend/Python Backend/Basic Setup', '14f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/knowledgebase/docs/Backend/Python Backend/FastAPI/Welcome',
        component: ComponentCreator('/knowledgebase/docs/Backend/Python Backend/FastAPI/Welcome', '2af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/knowledgebase/docs/Backend/Python Backend/Python ORM/Create Table',
        component: ComponentCreator('/knowledgebase/docs/Backend/Python Backend/Python ORM/Create Table', '62c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/knowledgebase/docs/Backend/Python Backend/Python ORM/Data Transaction',
        component: ComponentCreator('/knowledgebase/docs/Backend/Python Backend/Python ORM/Data Transaction', '6eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/knowledgebase/docs/Backend/Python Backend/Python ORM/Establish Connection',
        component: ComponentCreator('/knowledgebase/docs/Backend/Python Backend/Python ORM/Establish Connection', 'df4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/knowledgebase/docs/Backend/Python Backend/Python ORM/Introduction',
        component: ComponentCreator('/knowledgebase/docs/Backend/Python Backend/Python ORM/Introduction', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/knowledgebase/docs/Backend/Python Backend/Python ORM/SQLAlchemy Intro',
        component: ComponentCreator('/knowledgebase/docs/Backend/Python Backend/Python ORM/SQLAlchemy Intro', '565'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/knowledgebase/docs/Fontend/Redux',
        component: ComponentCreator('/knowledgebase/docs/Fontend/Redux', '89f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/knowledgebase/docs/intro',
        component: ComponentCreator('/knowledgebase/docs/intro', 'ec3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/knowledgebase/',
    component: ComponentCreator('/knowledgebase/', '541'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
