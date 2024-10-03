import {defineField, defineType} from 'sanity'

export const projectType = defineType({
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },

      {
        name: 'detail1',
        title: 'Detail1',
        type: 'string',
      },

      {
        name: 'detail2',
        title: 'Detail2',
        type: 'string',
      },

      {
        name: 'detail3',
        title: 'Detail3',
        type: 'string',
      },

      {
        name: 'detail4',
        title: 'Detail4',
        type: 'string',
      },

      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
    },
]

})