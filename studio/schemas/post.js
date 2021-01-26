export default {
  name: "post",
  title: "Job Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Job Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "place",
      title: "Place",
      type: "string",
    },
    {
      name: "dateStarted",
      title: "Date Started",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "Date Ended",
      type: "date",
    },
    {
      name: "body",
      title: "Job Description",
      type: "blockContent",
    },
  ],
  orderings: [
    {
      title: "Title, alph",
      name: "sortTitleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { title } = selection;
      return Object.assign({}, selection, {
        subtitle: title && `by ${title}`,
      });
    },
  },
};
