export default {
    name: 'proj',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        },
        {
            name: "place",
            title: 'Place',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    { value: "Personal", title: 'Personal' },
                    { value: "Client", title: 'Client' },
                    { value: "School", title: 'School' },
                ],
            },
        },
        {
            name: 'link',
            type: 'url',
        },
        {
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'body',
            title: 'Job Description',
            type: 'blockContent',
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            })
        },
    },
}
