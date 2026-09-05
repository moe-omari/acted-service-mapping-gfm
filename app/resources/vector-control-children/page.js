import ResourceDetail from '../ResourceDetail';

const resource = {
  file: '/vector-control-children-poster.pdf',
  type: 'pdf',
  downloadName: 'Poster - Disease-carrying insects for children.pdf',
  translations: {
    en: {
      title: 'Poster: Disease-carrying Insects for Children',
      description: 'Child-friendly poster on insects that spread disease and how to stay protected.',
    },
    ar: {
      title: 'بوستر الحشرات الناقلة للأمراض للأطفال',
      description: 'ملصق مبسط للأطفال حول الحشرات الناقلة للأمراض وطرق الوقاية منها.',
    },
  },
};

export default function VectorControlChildrenPage() {
  return <ResourceDetail resource={resource} />;
}
