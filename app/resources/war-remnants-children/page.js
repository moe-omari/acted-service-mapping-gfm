import ResourceDetail from '../ResourceDetail';

const resource = {
  file: '/war-remnants-children-poster.pdf',
  type: 'pdf',
  downloadName: 'Poster - War remnants for children.pdf',
  translations: {
    en: {
      title: 'Poster: War Remnants for Children',
      description: 'Child-friendly poster on recognizing war remnants and staying away from them.',
    },
    ar: {
      title: 'بوستر مخلفات الحرب للأطفال',
      description: 'ملصق مبسط للأطفال حول التعرف على مخلفات الحرب والابتعاد عنها.',
    },
  },
};

export default function WarRemnantsChildrenPage() {
  return <ResourceDetail resource={resource} />;
}
